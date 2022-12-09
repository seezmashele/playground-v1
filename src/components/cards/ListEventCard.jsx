import Link from 'next/link'
import { Calendar2Event } from 'react-bootstrap-icons'
import ListArticleCardLoader from '../loaders/ListArticleCardLoader'
import { getPostAge } from '../../utils/helpers/time'

const CategoryCard = ({ data, isLastItem = false }) => {
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
  const cardTags = data.tags
  const cardAuthor = data.author ? data.author : 'missdiablo'
  const cardOverview = data.overview
  const authorImage = images[Math.floor(Math.random() * 20)]
  const postAge = getPostAge(data)

  return data.placeholder ? (
    <ListArticleCardLoader isLastItem={isLastItem} />
  ) : (
    <div className="card_container relative mb-6 w-full flex-grow overflow-hidden">
      <div className="flex w-full select-none space-x-10">
        <div className="relative inline-block w-1/2 flex-grow">
          <div className="flex items-center text-sm">
            <div className="card_author_image mr-2 overflow-hidden rounded-full bg-neutral-100 text-white">
              <img src={authorImage} alt="" className="h-full w-full" />
            </div>
            <span className="inline_author">{cardAuthor}</span>
          </div>
          <Link href={cardLink} passHref>
            <div className="card_title mt-2 max-h-14">{cardTitle}</div>
          </Link>
          <div className="mt-3 mb-3 flex flex-row items-center space-x-3">
            <div className="box_radius text-sm text-[#FF0000]">
              <Calendar2Event />
            </div>
            <div className=" select-none text-xs">Mon, Jun 19, 2023</div>
          </div>
          <div className="mt-1.5 h-10 w-full max-w-xl overflow-hidden truncateF text-sm leading-normal">
            {cardOverview}
          </div>
          <div className="light_text_color mt-3 flex items-center text-sm">
            <span className="inline_publish_time text-xs">
              {postAge || 'a long time ago'}
            </span>
            <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
            <div className="box_radius px-1 pb-0.5 text-xs">gaming, meetup</div>
          </div>
          <div className="card_tags_container">
            {cardTags &&
              cardTags.map((item, index) => (
                <div
                  key={`articleCard${data.slug}${index}`}
                  className="card_tag"
                >
                  {item}
                  {index < cardTags.length - 1 && ','}
                </div>
              ))}
          </div>
        </div>
        <Link
          href={cardLink}
          passHref
          className="box_radius relative top-0 left-0 inline-block h-44 w-64 cursor-pointer overflow-hidden"
        >
          <div>
            <img
              draggable="false"
              className="image_bg absolute left-0 h-full w-full object-cover"
              src={cardImage}
              alt={cardTitle}
            />
          </div>
        </Link>
      </div>
      {!isLastItem && (
        <div className="border_color--main mt-4 w-full border-b" />
      )}
    </div>
  )
}

export default CategoryCard
