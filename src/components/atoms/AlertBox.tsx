import { Alert } from 'flowbite-react'
import React from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import withMotionWrapped from './WithMotionWrapped'
type AlertBoxProps = {
  children: React.ReactNode
  mode?: string
  className?: string
  showIcon?: boolean
}

export default function AlertBox({
  children,
  mode = 'dark',
  className = '',
  showIcon = true
}: AlertBoxProps) {
  let baseClassName = '!bg-gray-800 !mb-4'
  switch (mode) {
    case 'info':
      baseClassName = `${baseClassName} !text-blue-400`
      break
    case 'failure':
      baseClassName = `${baseClassName} !text-red-400`
      break
    default:
      break
  }

  className = `${baseClassName} ${className}`

  const WrappedAlert = withMotionWrapped(Alert)
  return (
    <WrappedAlert
      color={mode}
      icon={showIcon ? HiInformationCircle : undefined}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child)
        }
        return child
      })}
    </WrappedAlert>
  )
}
