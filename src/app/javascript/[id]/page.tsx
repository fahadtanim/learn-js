import PageContent from '@/components/molecules/PageContent'
import { JSBlog } from '@/data/javascript/javascript'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'
export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const post = JSBlog.find((post) => post.id === id)

  return (
    <div className="p-4">
      <PageContent content={post?.content} />
      <div className="flex justify-between pt-[4rem] border-t border-gray-600">
        {post?.prev && (
          <Button
            className="text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all"
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
            className="text-gray-800 font-bold from-green-400 to-cyan-600 bg-gradient-to-br hover:from-green-600 hover:to-cyan-900 hover:text-white transition-all"
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
  )
}
