/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client/react'
import {
  GET_SIDEBAR_ARTICLES,
  GET_HOME_PAGE_ARTICLES,
  GET_STORIES_PAGE_ARTICLES,
  GET_TRENDING_BAR_ARTICLES,
  GET_HOME_PAGE_EVENTS,
  GET_EVENTS_PAGE_EVENTS
} from '../utils/graphql/Queries'

import {
  fetchHomePageGroups,
  fetchGroupsPageGroups,
  fetchTrendingBarCategories,
  fetchSidebarGroups
} from '../utils/firebase/fetchData'

import {
  placeholderArray4,
  placeholderArray5,
  placeholderArray6,
  placeholderArray10,
  placeholderArray12,
  placeholderArray15,
  placeholderArray20
} from '../utils/constants/placeholders'

const DatabaseContext = createContext()

export const useDatabase = () => useContext(DatabaseContext)

// use state to store the fetched doc
// use memo to store the usable arrays for each page, i.e home events 1

export const DatabaseProvider = ({ children }) => {
  const [homePageEvents, setHomePageEvents] = useState(null)
  const [homePageEvents1, setHomePageEvents1] = useState(placeholderArray10)
  const [homePageEvents2, setHomePageEvents2] = useState(placeholderArray6)
  const [homePageArticles, setHomePageArticles] = useState(null)
  const [homePageArticles1, setHomePageArticles1] = useState(placeholderArray6)
  const [homePageArticles2, setHomePageArticles2] = useState(placeholderArray6)
  const [homePageArticles3, setHomePageArticles3] = useState(placeholderArray6)
  const [homePageGroups, setHomePageGroups] = useState(null)
  const [homePageGroups1, setHomePageGroups1] = useState(placeholderArray5)
  const [homePageGroups2, setHomePageGroups2] = useState(null)
  const [newsPageArticles, setNewsPageArticles] = useState(null)
  const [newsPageArticles1, setNewsPageArticles1] = useState(placeholderArray15)
  const [newsPageArticles2, setNewsPageArticles2] = useState(placeholderArray6)
  const [eventsPageGroups, setEventsPageGroups] = useState(null)
  const [eventsPageEvents, setEventsPageEvents] = useState(null)
  const [eventsPageEvents1, setEventsPageEvents1] = useState(placeholderArray12)
  const [eventsPageEvents2, setEventsPageEvents2] = useState(placeholderArray4)
  const [groupsPageGroups, setGroupsPageGroups] = useState(null)
  const [groupsPageGroups1, setGroupsPageGroups1] = useState(null)
  const [groupsPageGroups2, setGroupsPageGroups2] = useState(null)
  const [sidebarArticles, setSidebarArticles] = useState(null)
  const [sidebarArticles1, setSidebarArticles1] = useState(placeholderArray4)
  const [sidebarArticles2, setSidebarArticles2] = useState(placeholderArray4)
  const [sidebarArticles3, setSidebarArticles3] = useState(placeholderArray4)
  const [sidebarGroups, setSidebarGroups] = useState(null)
  const [sidebarGroups1, setSidebarGroups1] = useState(placeholderArray4)
  const [sidebarGroups2, setSidebarGroups2] = useState(placeholderArray4)
  const [sidebarGroups3, setSidebarGroups3] = useState(placeholderArray4)

  const [trendingBarCategories, setTrendingBarCategories] =
    useState(placeholderArray20)
  const [trendingBarStories, setTrendingBarStories] =
    useState(placeholderArray5)

  const useTrendingBarStories = () => {
    const { error, data } = useQuery(GET_TRENDING_BAR_ARTICLES)

    useEffect(() => {
      // use useReducer to prevent re-renders
      if (data && data.articles) {
        const newArray1 = Array.from(data.articles)
        newArray1.splice(4)
        setTrendingBarStories(newArray1)
      }
    }, [data])

    return { trendingBarStories, trendingBarStoriesError: error }
  }

  const useSidebarArticles = () => {
    const { error, data } = useQuery(GET_SIDEBAR_ARTICLES)

    useEffect(() => {
      // use useReducer to prevent re-renders
      if (data && data.articles) setSidebarArticles(data.articles)
    }, [data])

    useEffect(() => {
      if (sidebarArticles) {
        const newArray1 = Array.from(sidebarArticles)
        const newArray2 = newArray1.splice(3)
        const newArray3 = newArray2.splice(4)
        newArray3.splice(4)
        setSidebarArticles1(newArray1)
        setSidebarArticles2(newArray2)
        setSidebarArticles3(newArray3)
      }
    }, [sidebarArticles])

    return {
      sidebarArticles1,
      sidebarArticles2,
      sidebarArticles3,
      sidebarArticlesError: error
    }
  }

  const useSidebarGroups = () => {
    useEffect(() => {
      const fetchData = async () => {
        const items = await fetchSidebarGroups()
        if (items) setSidebarGroups(items)
      }
      if (!sidebarGroups) fetchData()
      if (sidebarGroups) {
        const newArray1 = Array.from(sidebarGroups)
        const newArray2 = newArray1.splice(3)
        const newArray3 = newArray2.splice(4)
        newArray3.splice(1)
        setSidebarGroups1(newArray1)
        setSidebarGroups2(newArray2)
        setSidebarGroups3(newArray3)
      }
    }, [sidebarGroups])

    return { sidebarGroups1, sidebarGroups2, sidebarGroups3 }
  }

  const useHomePageEvents = () => {
    const { error, data } = useQuery(GET_HOME_PAGE_EVENTS)

    useEffect(() => {
      // use useReducer to prevent re-renders
      if (data && data.events) setHomePageEvents(data.events)
    }, [data])

    useEffect(() => {
      if (homePageEvents) {
        const newArray1 = Array.from(homePageEvents)
        const newArray2 = newArray1.splice(8)
        newArray2.splice(8)
        setHomePageEvents1(newArray1)
        setHomePageEvents2(newArray2)
      }
    }, [homePageEvents])

    return { homePageEvents1, homePageEvents2, homePageEventsError: error }
  }

  const useHomePageArticles = () => {
    const { error, data } = useQuery(GET_HOME_PAGE_ARTICLES)

    useEffect(() => {
      // use useReducer to prevent re-renders
      if (data && data.articles) setHomePageArticles(data.articles)
    }, [data])

    useEffect(() => {
      if (homePageArticles) {
        const newArray1 = Array.from(homePageArticles).reverse()
        const newArray2 = newArray1.splice(6)
        const newArray3 = newArray2.splice(8)
        newArray3.splice(8)
        setHomePageArticles1(newArray1)
        setHomePageArticles2(newArray2)
        setHomePageArticles3(newArray3)
      }
    }, [homePageArticles])

    return {
      homePageArticles1,
      homePageArticles2,
      homePageArticles3,
      homePageArticlesError: error
    }
  }

  const useHomePageGroups = () => {
    useEffect(() => {
      const fetchData = async () => {
        const items = await fetchHomePageGroups()
        if (items) setHomePageGroups(items)
      }
      if (!homePageGroups) fetchData()
      if (homePageGroups) {
        const newArray1 = Array.from(homePageGroups)
        const newArray2 = newArray1.splice(5)
        newArray2.splice(20)
        setHomePageGroups1(newArray1)
        setHomePageGroups2(newArray2)
      }
    }, [homePageGroups])

    return {
      homePageGroups1,
      homePageGroups2
    }
  }

  const useTrendingBarCategories = () => {
    useEffect(() => {
      const fetchData = async () => {
        const items = await fetchTrendingBarCategories()
        if (items) setTrendingBarCategories(items)
      }
      if (
        !trendingBarCategories ||
        (trendingBarCategories[0] && trendingBarCategories[0].placeholder)
      )
        fetchData()
    }, [trendingBarCategories])

    return { trendingBarCategories }
  }

  const useNewsPageArticles = () => {
    const { error, data } = useQuery(GET_STORIES_PAGE_ARTICLES)

    useEffect(() => {
      if (data && data.articles) setNewsPageArticles(data.articles)
    }, [data])

    useEffect(() => {
      if (newsPageArticles) {
        const newArray1 = Array.from(newsPageArticles)
        const newArray2 = newArray1.splice(20)
        newArray2.splice(20)
        setNewsPageArticles1(newArray1)
        setNewsPageArticles2(newArray2)
      }
    }, [newsPageArticles])

    return {
      newsPageArticles1,
      newsPageArticles2,
      newsPageArticlesError: error
    }
  }

  const useEventsPageEvents = () => {
    const { error, data } = useQuery(GET_EVENTS_PAGE_EVENTS)

    useEffect(() => {
      // use useReducer to prevent re-renders
      if (data && data.events) setEventsPageEvents(data.events)
    }, [data])

    useEffect(() => {
      if (eventsPageEvents) {
        const newArray1 = Array.from(eventsPageEvents).reverse()
        const newArray2 = newArray1.splice(20)
        newArray2.splice(20)
        setEventsPageEvents1(newArray1)
        setEventsPageEvents2(newArray2)
      }
    }, [eventsPageEvents])

    return {
      eventsPageEvents1,
      eventsPageEvents2,
      eventsPageEventsError: error
    }
  }

  const useEventsPageGroups = () => {
    useEffect(() => {
      const fetchData = async () => {
        const items = await fetchHomePageGroups()
        if (items) setEventsPageGroups(items)
      }
      if (!eventsPageGroups) fetchData()
    }, [eventsPageGroups])

    return { eventsPageGroups }
  }

  const useGroupsPageGroups = () => {
    useEffect(() => {
      const fetchData = async () => {
        const items = await fetchGroupsPageGroups()
        if (items) setGroupsPageGroups(items)
      }
      if (!groupsPageGroups) fetchData()
      if (groupsPageGroups) {
        const newArray1 = Array.from(groupsPageGroups)
        const newArray2 = newArray1.splice(25)
        newArray2.splice(10)
        setGroupsPageGroups1(newArray1)
        setGroupsPageGroups2(newArray2)
      }
    }, [groupsPageGroups])

    return {
      groupsPageGroups1,
      groupsPageGroups2
    }
  }

  return (
    <DatabaseContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        useHomePageEvents,
        useHomePageGroups,
        useHomePageArticles,
        useEventsPageGroups,
        useEventsPageEvents,
        useGroupsPageGroups,
        useTrendingBarCategories,
        useNewsPageArticles,
        useSidebarGroups,
        useSidebarArticles,
        useTrendingBarStories
      }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}
