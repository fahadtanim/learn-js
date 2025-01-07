'use client'

import React, { useRef } from 'react'
import ScrollToTop from '../atoms/ScrollToTop'

type PageContentProps = {
  content: React.ReactNode
}

export default function PageContent({ content }: PageContentProps) {
  const scrollableDivRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <div
        className="h-[80vh] overflow-y-scroll overflow-x-hidden pr-4"
        ref={scrollableDivRef}
      >
        <div className="container">
          {content}
          <ScrollToTop scrollableDivRef={scrollableDivRef} />
        </div>
      </div>
    </>
  )
}
