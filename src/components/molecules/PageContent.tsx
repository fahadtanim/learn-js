'use client'

import React, { useEffect, useRef, useState } from 'react'
import ScrollToTop from './ScrollToTop'
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { firestoreDb } from '@/config/firebase'

type PageContentProps = {
  children: React.ReactNode
}

export default function PageContent({ children }: PageContentProps) {
  const scrollableDivRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchItems = async () => {
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
      }
    }

    fetchItems()
  }, [])

  return (
    <>
      <div
        className="h-[80vh] overflow-y-scroll overflow-x-hidden pr-4"
        ref={scrollableDivRef}
      >
        <div className="container">
          {children}
          <ScrollToTop scrollableDivRef={scrollableDivRef} />
        </div>
      </div>
    </>
  )
}
function setPostContent(arg0: any) {
  throw new Error('Function not implemented.')
}
