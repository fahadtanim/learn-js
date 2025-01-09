import { ButtonProps, Button as FlowbiteButton } from 'flowbite-react'
import Link from 'next/link'

type ButtonMode = 'link' | 'link-gradient | primary'

type CustomButtonProps = {
  children: React.ReactNode
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  className?: string
  href?: string
  mode?: string
} & ButtonProps

export default function Button({
  children,
  className,
  mode = 'link-gradient',
  href = '',
  ...props
}: CustomButtonProps) {
  let baseClass = ''

  switch (mode) {
    case 'link-gradient':
      baseClass =
        'text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all sm:scale-75 scale-75 md:scale-100'
      break
    default:
      baseClass =
        'text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all sm:scale-75 scale-75 md:scale-100'
      break
  }

  if (mode == 'link' || mode == 'link-gradient')
    return (
      <>
        <FlowbiteButton
          size="xs"
          as={Link}
          href={href}
          className={`py-1 flex justify-center items-center font-bold focus:ring-0 focus:outline-none active:ring-0 active:outline-none ${baseClass} ${className}`}
          {...props}
        >
          {children}
        </FlowbiteButton>
      </>
    )
  else {
    return (
      <>
        <FlowbiteButton
          size="xs"
          className={`py-1 items-center font-bold focus:ring-0 focus:outline-none active:ring-0 active:outline-none ${baseClass} ${className}`}
          {...props}
        >
          {children}
        </FlowbiteButton>
      </>
    )
  }
}

/**
 * <Button
              className="text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all sm:scale-75 scale-75 md:scale-100"
              as={Link}
              href={'/javascript/js-2.1'}
            >
              Next Section js-2.1
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
 * 
 */
