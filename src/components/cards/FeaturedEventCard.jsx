import Link from 'next/link'
import FeaturedEventCardLoader from '../loaders/FeaturedEventCardLoader'

const FeaturedEventCard = ({ data }) => {
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
  const cardTitle = data.title
  const cardImage = data.cover_image
  const cardLink = data.slug ? `/event/${data.slug}` : '/'
  const cardAuthor = data.author ? data.author : 'johndonut'
  const authorImage = images[Math.floor(Math.random() * 20)]

  return data.placeholder ? (
    <FeaturedEventCardLoader />
  ) : (
    <div className="box_radius border_color--main w-54 flex-shrink-0 flex-grow overflow-hidden">
      <div className="card_container">
        <Link href={cardLink} passHref>
          <div className="box_radius relative top-0 left-0 block h-34 w-full cursor-pointer overflow-hidden">
            <img
              draggable="false"
              className="image_bg absolute left-0 h-full w-full object-cover object-top"
              src={cardImage}
              alt={cardTitle}
            />
          </div>
        </Link>
        <Link href={cardLink} passHref>
          <div className="card_title text-custom_base mt-3 max-h-14 overflow-hidden leading-normal">
            {cardTitle}
          </div>
        </Link>
        <div className="relative mt-1 w-full">
          <div className=" select-none py-1 text-sm">Fri, Nov 4, 2022</div>
        </div>
        <div className="mt-0.5 flex items-center text-sm">
          <div className="card_author_image mr-2 overflow-hidden">
            <img src={authorImage} alt="" className="h-full w-full" />
          </div>
          <span className="inline_author">{cardAuthor}</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedEventCard
