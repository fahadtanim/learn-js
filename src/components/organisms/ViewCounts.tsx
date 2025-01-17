'use client'

import { firestoreDb } from '@/config/firebase'
import { formatViewCount } from '@/utils'
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'

enum FetchStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export default function ViewCounts() {
  const [count, setCount] = useState(1)
  const [status, setStatus] = useState(FetchStatus.LOADING)
  useEffect(() => {
    const fetchItems = async () => {
      setStatus(() => FetchStatus.LOADING)
      try {
        const querySnapshot = await getDocs(
          collection(firestoreDb, 'view_counts')
        )
        const allPageViewDatas = querySnapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id
            }) as {
              id: string
              pathname: string
              count: number
            }
        )

        const pageViewData = allPageViewDatas.find(
          (data) =>
            data.pathname == window.location.pathname + window.location.search
        )

        console.log('pageViewData', pageViewData)

        if (pageViewData) {
          const pageViewDataRef = doc(
            firestoreDb,
            'view_counts',
            pageViewData.id
          )
          const result = await updateDoc(pageViewDataRef, {
            count: pageViewData.count + 1
          })
          setCount(pageViewData.count + 1)

          console.log('Update result', result)
        } else {
          const result = await addDoc(collection(firestoreDb, 'view_counts'), {
            pathname: window.location.pathname + window.location.search,
            count: 1
          })

          console.log('Addition result', result)
        }
      } catch (error) {
        console.log(error)
        setStatus(() => FetchStatus.ERROR)
      }

      setStatus(() => FetchStatus.SUCCESS)
    }

    fetchItems()
  }, [])

  if (status === FetchStatus.LOADING) {
    return (
      <>
        <div className="h-3 rounded-full bg-gray-700 w-[40px] animate-pulse mb-4"></div>
      </>
    )
  } else
    return (
      <>
        <motion.span className="text-sm text-gray-500 mb-4 flex items-center gap-2 h-3">
          <FaEye className="" /> {formatViewCount(count)}
        </motion.span>
      </>
    )
}
