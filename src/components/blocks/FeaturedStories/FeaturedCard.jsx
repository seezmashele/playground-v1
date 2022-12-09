import Link from 'next/link'

const FeaturedCard = ({ item }) => {
  // const images = [
  //   '/avatars/image-1.png',
  //   '/avatars/image-2.png',
  //   '/avatars/image-3.png',
  //   '/avatars/image-4.png',
  //   '/avatars/image-5.png',
  //   '/avatars/image-6.png',
  //   '/avatars/image-7.png',
  //   '/avatars/image-8.png',
  //   '/avatars/image-9.png',
  //   '/avatars/image-10.png',
  //   '/avatars/image-11.png',
  //   '/avatars/image-12.png',
  //   '/avatars/image-13.png',
  //   '/avatars/image-14.png',
  //   '/avatars/image-15.png',
  //   '/avatars/image-16.png',
  //   '/avatars/image-17.png',
  //   '/avatars/image-18.png',
  //   '/avatars/image-19.png',
  //   '/avatars/image-20.png'
  // ]

  const cardTitle = item.title
  const cardImage = item.cover_image
  const cardLink = item.slug ? `/post/${item.slug}` : '/'
  // const cardAuthor = item.created_by ? item.created_by : 'littledragon'
  // const authorImage = images[Math.floor(Math.random() * 20)]

  return (
    <Link
      href={cardLink}
      className="box_radius gradient_card_container relative w-1/2 cursor-pointer overflow-hidden"
    >
      <div className="absolute h-full w-full overflow-hidden">
        <img
          draggable="false"
          className="gradient_card_image left-0 h-full w-full object-cover"
          src={cardImage}
          alt={cardTitle}
        />
      </div>
      <div className="absolute -bottom-0 h-5/6 w-full bg-gradient-to-t from-black to-transparent" />
      <div className='absolute -bottom-2 flex flex-col z-10 overflow-hidden px-4 pb-5 text-base font-semibold leading-snug text-white'>
      <p className=" max-h-12 overflow-hidden">
        {cardTitle}
      </p>
      <div className="flex items-center text-sm absoluteF bottom-0">
            {/* <div className="card_author_image w-4 h-4 mr-2 overflow-hidden">
              <img src={authorImage} alt="" className="h-full w-full" />
            </div> */}
            <span className="inline_author hover:no-underline pointer-events-none font-normal">zelda</span>
          </div>

      </div>
    </Link>
  )
}

export default FeaturedCard
