import Link from 'next/link'

const FeaturedCard = ({ item }) => {
  const itemTitle = item.title
  // const itemImage = item.cover_image
  const itemLink = item.slug ? `/post/${item.slug}` : '/'

  return (
    <Link href={itemLink}>
      <div className="box_radius hover:bg-neutral-200 transition-colors flex h-9 mb-10 w-52 flex-shrink-0F flex-growF cursor-pointer items-center justify-center overflow-hidden borderF bg-neutral-100 bg-[#fffafa]F text-[#dd0000]F">
        <p className="mt-3.5 h-full w-full truncate px-3 pb-2 text-sm leading-snug">
          {itemTitle}
        </p>
      </div>
    </Link>
  )
}

export default FeaturedCard
