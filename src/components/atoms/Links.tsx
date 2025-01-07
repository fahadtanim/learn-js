type LinkProps = {
  src: string
  className?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  children?: React.ReactNode
}

export default function Links({
  src,
  className,
  target = '_self',
  children
}: LinkProps) {
  return (
    <a
      href={src}
      className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${className}`}
      rel="noreferrer"
      target={target}
    >
      {children}
    </a>
  )
}
