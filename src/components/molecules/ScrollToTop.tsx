'use client'

import React, { useState, useEffect } from 'react'
import { FaJetFighterUp } from 'react-icons/fa6'
import { Button } from '../atoms'
type ScrollToTopProps = {
  scrollableDivRef: React.RefObject<HTMLDivElement | null>
}
const ScrollToTop = ({ scrollableDivRef }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false)

  // Show or hide the button based on scroll position of the div
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef?.current) {
        const scrollTop = scrollableDivRef.current.scrollTop
        setIsVisible(scrollTop > 200) // Show button if scrolled down 300px
      }
    }

    const divElement = scrollableDivRef?.current
    if (divElement) {
      divElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    if (scrollableDivRef?.current) {
      scrollableDivRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      <Button
        size="xs"
        onClick={scrollToTop}
        className={`fixed ${isVisible ? 'opacity-100 mt-0' : 'opacity-0 mt-10'} top-[75vh] right-10 p-3 rounded-full`}
      >
        <span className="flex justify-center items-center gap-3">
          <FaJetFighterUp /> Back to top
        </span>
      </Button>
    </div>
  )
}

export default ScrollToTop
