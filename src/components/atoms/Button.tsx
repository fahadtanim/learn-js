import { ButtonProps, Button as FlowbiteButton } from 'flowbite-react'

type CustomButtonProps = {
  children: React.ReactNode
} & ButtonProps

export default function Button({ children, ...props }: CustomButtonProps) {
  return (
    <>
      <FlowbiteButton {...props}></FlowbiteButton>
    </>
  )
}
