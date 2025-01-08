type SkeletonProps = {
  className?: string
  mode?: 'normal' | 'header' | 'box'
}

export default function Skeleton({
  className,
  mode = 'normal'
}: SkeletonProps) {
  switch (mode) {
    case 'normal':
      return <NormalSkeleton className={className} />
    case 'header':
      return <HeaderSkeleton className={className} />
    case 'box':
      return <BoxSkeleton className={className} />
    default:
      return <NormalSkeleton className={className} />
  }
}

function NormalSkeleton({ className }: SkeletonProps) {
  return (
    <>
      <div
        role="status"
        className={`space-y-2.5 animate-pulse w-full ${className}`}
      >
        <div className="flex items-center w-full">
          <div className="h-2.5 rounded-full bg-gray-700 w-3/12"></div>
          <div className="h-2.5 ms-2  rounded-full bg-gray-600 w-2/12"></div>
          <div className="h-2.5 ms-2  rounded-full bg-gray-600 w-7/12"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 rounded-full bg-gray-700 w-6/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-4/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-1/12"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 rounded-full bg-gray-600 w-4/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-700 w-2/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-3/12"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 ms-2 rounded-full bg-gray-700 w-4/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-4/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-1/12"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-2/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-1/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-700 w-5/12"></div>
        </div>
        <div className="flex items-center w-full">
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-3/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-700 w-3/12"></div>
          <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-3/12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )
}

function HeaderSkeleton({ className }: SkeletonProps) {
  return (
    <>
      <div
        role="status"
        className={`space-y-2.5 animate-pulse w-full ${className}`}
      >
        <div className="h-3.5 rounded-full bg-gray-700 w-2/12 mb-2.5"></div>
        <div className="w-3/12 h-3 mb-10 rounded-full bg-gray-700"></div>
      </div>
    </>
  )
}

function BoxSkeleton({ className }: SkeletonProps) {
  return (
    <>
      <div
        role="status"
        className={`space-y-2.5 animate-pulse w-full border border-gray-700 ${className}`}
      >
        <div className="flex">
          <div className="h-40 bg-gray-700 w-40 mr-4"></div>
          <div className="w-full">
            <div className="flex w-full mt-4 gap-2">
              <div className="h-2.5 rounded-full bg-gray-700 w-2/12 mb-2.5"></div>
              <div className="w-3/12 h-2.5 rounded-full bg-gray-700"></div>
            </div>
            <div className="flex w-full mt-1 gap-2">
              <div className="h-2.5 rounded-full bg-gray-700 w-4/12 mb-2.5"></div>
              <div className="w-7/12 h-2.5 rounded-full bg-gray-700"></div>
            </div>
            <div className="flex w-full mt-1 gap-2">
              <div className="h-2.5 rounded-full bg-gray-700 w-2/12 mb-2.5"></div>
              <div className="w-1/12 h-2.5 rounded-full bg-gray-700"></div>
              <div className="w-5/12 h-2.5 rounded-full bg-gray-700"></div>
            </div>
            <div className="flex w-full mt-1 gap-2">
              <div className="h-2.5 rounded-full bg-gray-700 w-1/12 mb-2.5"></div>
              <div className="w-2/12 h-2.5 rounded-full bg-gray-700"></div>
              <div className="w-3/12 h-2.5 rounded-full bg-gray-700"></div>
            </div>
            <div className="flex w-full mt-1 gap-2">
              <div className="h-2.5 rounded-full bg-gray-700 w-4/12 mb-2.5"></div>
              <div className="w-1/12 h-2.5 rounded-full bg-gray-700"></div>
              <div className="w-5/12 h-2.5 rounded-full bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
