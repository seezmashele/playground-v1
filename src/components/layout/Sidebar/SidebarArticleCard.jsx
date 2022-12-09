import Link from 'next/link'

const SidebarArticleCard = ({ item }) => {
  const itemTitle = item.title
  const itemImage = item.cover_image
  const itemLink = item.slug ? `/post/${item.slug}` : '/'
  const images = [
    '/avatars/image-1.png',
    '/avatars/image-2.png',
    '/avatars/image-3.png',
    '/avatars/image-4.png',
    '/avatars/image-5.png',
    '/avatars/image-6.png',
    '/avatars/image-7.png',
    '/avatars/image-8.png',
    '/avatars/image-9.png',
    '/avatars/image-10.png',
    '/avatars/image-11.png',
    '/avatars/image-12.png',
    '/avatars/image-13.png',
    '/avatars/image-14.png',
    '/avatars/image-15.png',
    '/avatars/image-16.png',
    '/avatars/image-17.png',
    '/avatars/image-18.png',
    '/avatars/image-19.png',
    '/avatars/image-20.png'
  ]
  const authorImage = images[Math.floor(Math.random() * 20)]
  const cardAuthor = item.author ? item.author : 'littledragon'

  return (
    <Link href={itemLink} passHref>
      <div className="card_container relative mb-6 flex w-full flex-grow select-none flex-row overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <div className="card_title max-h-11 cursor-pointer overflow-hidden text-sidebar_card_title font-normal hover:underline">
            {itemTitle}
          </div>
          <div className="mt-1.5 flex items-center text-sm">
            <div className="card_author_image mr-2 overflow-hidden rounded-full bg-neutral-100 text-white">
              <img src={authorImage} alt="" className="h-full w-full" />
            </div>
            <span className="inline_author">{cardAuthor}</span>
          </div>
        </div>
        <div className="box_radius image_bg xs:hiddenF 2xl:blockF relative top-0 left-0 ml-5 h-14 w-16 flex-shrink-0 cursor-pointer overflow-hidden">
          <img
            draggable="false"
            className="absolute left-0 h-full w-full object-cover"
            src={itemImage}
            alt={itemTitle}
          />
        </div>
      </div>
    </Link>
  )
}

export default SidebarArticleCard
