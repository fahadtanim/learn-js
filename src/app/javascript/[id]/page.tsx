import PageContent from '@/components/molecules/PageContent'
import { JSBlog } from '@/data/javascript/javascript'
import { Button } from 'flowbite-react'
import Link from 'next/link'
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
    <div className="p-4 pb-0 h-[calc(100vh-54px)] overflow-hidden">
      <PageContent content={post?.content} />
      <div className="border-t border-gray-600 sticky bottom-0 p-4">
        <div className="flex justify-between">
          {post?.prev && (
            <Button
              className="text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all sm:scale-75 scale-75 md:scale-100 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
              as={Link}
              href={post?.prev}
            >
              <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
              Previous Section{' '}
              {post?.prev.split('/')[post?.prev.split('/').length - 1]}
            </Button>
          )}
          {post?.next && (
            <Button
              className="text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all sm:scale-75 scale-75 md:scale-100"
              as={Link}
              href={post?.next}
            >
              Next Section{' '}
              {post?.next.split('/')[post?.next.split('/').length - 1]}
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
