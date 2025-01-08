import { Skeleton } from '../atoms'

export default function LoadingSkeleton() {
  return (
    <>
      <div className="container p-4">
        <Skeleton className="mb-6 mt-2" mode="header"></Skeleton>
        <Skeleton className="mb-6 mt-2"></Skeleton>
        <Skeleton className="mb-6 mt-2"></Skeleton>
        <Skeleton className="mb-6 mt-2" mode="box"></Skeleton>
        <Skeleton className="mb-6 mt-2"></Skeleton>
        <Skeleton className="mb-6 mt-2"></Skeleton>
      </div>
    </>
  )
}
