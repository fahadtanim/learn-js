type PillProps = {
  children: React.ReactNode
  className?: string
}

export default function Pill({ children, className }: PillProps) {
  return (
    <>
      <span
        className={`font-bold h-fit bg-gray-100 text-gray-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ${className}`}
      >
        {children}
      </span>
    </>
  )
}
