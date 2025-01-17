import { ViewCounts } from '.'
import { Typography } from '../atoms'

type PostTitleProps = {
  children: React.ReactNode
}

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <Typography mode="h2">{children}</Typography>
        <ViewCounts />
      </div>
    </>
  )
}
