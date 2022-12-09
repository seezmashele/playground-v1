import SectionTitle from '../widgets/SectionTitle'
import ListEventCard from '../cards/ListEventCard'

const EventsListBlock = ({ events, title = '' }) => (
  <>
    {title && <SectionTitle title={title} />}
    <div className="relative flex w-full flex-wrap overflow-hidden">
      {events &&
        events.map((item, index) => (
          <ListEventCard
            data={item}
            key={`eventslist${item.slug}${index}`}
            isLastItem={index === events.length - 1}
          />
        ))}
    </div>
  </>
)

export default EventsListBlock
