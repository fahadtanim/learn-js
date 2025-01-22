import * as motion from 'motion/react-client'

type TypoMode =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'b-text'
  | 'gradient'
  | 'normal'

type TypoProps = {
  mode?: TypoMode
  children?: React.ReactNode
  className?: string
}

export default function Typography({
  mode = 'normal',
  children,
  className = ''
}: TypoProps) {
  switch (mode) {
    case 'h1':
      return (
        <motion.h1
          className={`text-5xl font-extrabold text-white mb-4 ${className}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.h1>
      )
    case 'h2':
      return (
        <motion.h2
          className={`text-4xl font-extrabold text-white mb-4 ${className}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.h2>
      )
    case 'h3':
      return (
        <motion.h3
          className={`text-3xl font-extrabold text-white mb-4 ${className}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.h3>
      )

    case 'h4':
      return (
        <motion.h4
          className={`text-2xl font-extrabold text-white mb-4 ${className}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.h4>
      )

    case 'h5':
      return (
        <motion.h5
          className="text-xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.h5>
      )

    case 'h6':
      return (
        <motion.h6
          className={`text-lg font-extrabold text-white mb-4 ${className}`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.h6>
      )
    case 'b-text':
      return (
        <motion.span
          className={`font-semibold text-white text-justify ${className}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.span>
      )
    case 'gradient':
      return (
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          {children}
        </motion.span>
      )

    default:
      return (
        <motion.p
          className={`mb-4 text-lg font-normal text-gray-300 text-justify ${className}`}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1
          }}
        >
          {children}
        </motion.p>
      )
  }
}
