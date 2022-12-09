import Link from 'next/link'
import ListArticleCardLoader from '../loaders/ListArticleCardLoader'
import { getPostAge } from '../../utils/helpers/time'

const ArticleListCard = ({ data, isLastItem = false }) => {
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
  const tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ].sort(() => Math.random() - 0.5)
  tempTags.splice(4)
  const cardTitle = data.title
  const cardImage = data.cover_image
  const cardLink = data.slug ? `/post/${data.slug}` : '/'
  const cardTags = data.tags || tempTags
  const cardAuthor = data.created_by ? data.created_by : 'littledragon'
  const cardOverview = data.overview
  const authorImage = images[Math.floor(Math.random() * 20)]
  const postAge = getPostAge(data)

  return data.placeholder ? (
    <ListArticleCardLoader isLastItem={isLastItem} />
  ) : (
    <div className="card_container relative mb-7 w-full flex-grow overflow-hidden">
      <div className="flex w-full select-none space-x-10">
        <div className="relative inline-block w-1/2 flex-grow overflow-hidden">
          <div className="flex items-center text-sm">
            <div className="card_author_image mr-2 overflow-hidden">
              <img src={authorImage} alt="" className="h-full w-full" />
            </div>
            <span className="inline_author">{cardAuthor}</span>
          </div>
          <Link href={cardLink} passHref>
            <div className="card_title mt-2 max-h-14 overflow-hidden">
              {cardTitle}
            </div>
          </Link>
          <div className="h-10F mt-3.5 w-full max-w-xl overflow-hidden truncate text-sm leading-normal">
            {cardOverview}
          </div>
          <div className="light_text_color mt-2.5 flex items-center text-xs">
            <span className="inline_publish_time">
              {postAge || 'a long time ago'}
            </span>
            <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
            <div className="box_radius px-1 pb-0.5">gaming</div>
            <div className="card_tags_container hidden">
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
        </div>
        <Link href={cardLink} passHref>
          <div className="image_bg box_radius relative top-0 left-0 inline-block h-[8.5rem] w-52 cursor-pointer overflow-hidden">
            <img
              draggable="false"
              className="absolute left-0 h-full w-full object-cover"
              src={cardImage}
              alt={cardTitle}
            />
          </div>
        </Link>
      </div>
      {!isLastItem && (
        <div className="border_color--main mt-5 w-full border-b" />
      )}
    </div>
  )
}

export default ArticleListCard
