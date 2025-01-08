import * as motion from 'motion/react-client'
import { Typography } from '../atoms'
import { FaLongArrowAltRight } from 'react-icons/fa'
import React from 'react'
type Blocks = {
  title?: string
  classes?: string
}

type DesignBlockProps = {
  className?: string
  title?: string
  Boxes?: Blocks[]
}
export default function DesignBlock({
  className,
  title,
  Boxes
}: DesignBlockProps) {
  return (
    <>
      <motion.div
        className={`bg-gray-700 justify-center items-center rounded-md flex flex-col p-4 mb-4 ${className}`}
        initial={{ opacity: 0, marginLeft: 100 }}
        whileInView={{ opacity: 1, marginLeft: 0 }}
        transition={{ duration: 0.75 }}
      >
        {title && <Typography mode="h6">{title}</Typography>}
        <div className="flex flex-wrap gap-4 py-2 justify-center perspective-container">
          {Boxes?.map((box, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`flex items-center justify-center px-4 py-3 transition-all duration-300 cursor-pointer tilt 
            ${box.classes ? box.classes : 'bg-cyan-600'} 
            scale-75 sm:scale-90 md:scale-100`}
                >
                  <Typography mode="b-text">{box.title}</Typography>
                </div>
                {index !== Boxes.length - 1 && (
                  <div className="flex items-center scale-75 sm:scale-90 md:scale-100">
                    <FaLongArrowAltRight size={30} />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}
