import { Button } from '@/components/atoms'
import PageContent from '@/components/molecules/PageContent'
import { JSBlog } from '@/data/javascript/javascript'

import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'

export async function generateStaticParams() {
  // Extract all possible `id` values from your data source
  return JSBlog.map((post) => ({ id: post.id })) // This should return an array of objects, each with an `id` key
}

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = JSBlog.find((post) => post.id === id)

  return (
    <div className="md:p-4 p-1 pt-4 h-[calc(100vh-54px)] overflow-hidden ">
      <PageContent>{post?.content}</PageContent>
      <div className="border-t border-gray-600 bg-gray-900 sticky bottom-0 p-4">
        <div className="flex justify-between">
          {post?.prev && (
            <Button mode="link-gradient" href={post?.prev}>
              <HiOutlineArrowLeft className="mr-2 h-4 w-4" />
              Previous Section{' '}
              {post?.prev.split('/')[post?.prev.split('/').length - 1]}
            </Button>
          )}
          {post?.next && (
            <Button mode="link-gradient" href={post?.next}>
              Next Section{' '}
              {post?.next.split('/')[post?.next.split('/').length - 1]}
              <HiOutlineArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
