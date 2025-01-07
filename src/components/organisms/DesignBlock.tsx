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
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
      >
        {title && <Typography mode="h6">{title}</Typography>}
        <div className="flex justify-center gap-4 perspective-container relative py-2">
          {Boxes?.map((box, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`px-6 py-4 transition-all tilt duration-300 cursor-pointer ${box.classes ? box.classes : 'bg-cyan-600'}`}
                >
                  <Typography mode="b-text">{box.title}</Typography>
                </div>
                {index !== Boxes.length - 1 && (
                  <div className="flex justify-center items-center">
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
