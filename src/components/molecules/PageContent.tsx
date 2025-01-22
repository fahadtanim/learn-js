'use client'

import React, { useRef } from 'react'
import ScrollToTop from './ScrollToTop'

type PageContentProps = {
  children: React.ReactNode
}

export default function PageContent({ children }: PageContentProps) {
  const scrollableDivRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <div
        className="h-[80vh] overflow-y-scroll overflow-x-hidden pr-4 pl-8 md:pl-4"
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
