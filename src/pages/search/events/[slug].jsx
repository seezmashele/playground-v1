import { useRouter } from 'next/router'

const EventPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Event: {slug}</p>
}

export default EventPage
