import * as motion from 'motion/react-client'

import React from 'react'

interface WithMotionProps {
  motionProps?: React.ComponentProps<typeof motion.div>
}

export default function withMotionWrapped<T extends object>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T & WithMotionProps> {
  return function MotionWrappedComponent({
    motionProps,
    ...props
  }: T & WithMotionProps) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        {...motionProps} // Allows overriding motion properties if needed
      >
        <WrappedComponent {...(props as T)} />
      </motion.div>
    )
  }
}
