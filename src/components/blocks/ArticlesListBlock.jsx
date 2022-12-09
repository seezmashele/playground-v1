import SectionTitle from '../widgets/SectionTitle'
import ListArticleCard from '../cards/ListArticleCard'

const ArticlesListBlock = ({ articles, title = '' }) => (
  <>
    {title && <SectionTitle title={title} />}
    <div className="relative flex w-full flex-wrap overflow-hidden">
      {articles &&
        articles.map((item, index) => (
          <ListArticleCard
            data={item}
            isLastItem={index === articles.length - 1}
            key={`articleslist${item.slug}${index}`}
          />
        ))}
    </div>
  </>
)

export default ArticlesListBlock
