import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../firebase'

export const fetchHomePageEvents = async () => {
  try {
    const docRef = doc(firestore, 'app-content/events-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { events } = data
      return events.sort(() => Math.random() - 0.5)
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchHomePageArticles = async () => {
  try {
    const docRef = doc(firestore, 'app-content/home-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { articles } = data
      return articles.sort(() => Math.random() - 0.5)
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchHomePageGroups = async () => {
  try {
    const docRef = doc(firestore, 'app-content/groups-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { groups } = data
      if (groups) groups.sort(() => Math.random() - 0.5)
      return groups
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchArticleBySlug = async (slug) => {
  if (slug) {
    try {
      const docRef = doc(firestore, `articles/${slug}`)
      const docSnapshot = await getDoc(docRef)
      if (docSnapshot.exists()) {
        const data = docSnapshot.data()
        return data
      }
    } catch (err) {
      return { error: err }
    }
  }
  return null
}

export const fetchEventsPageEvents = async () => {
  try {
    const docRef = doc(firestore, 'app-content/events-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { events } = data
      if (events) events.sort(() => Math.random() - 0.5)
      return events
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchEventBySlug = async (slug) => {
  if (slug) {
    try {
      const docRef = doc(firestore, `events/${slug}`)
      const docSnapshot = await getDoc(docRef)
      if (docSnapshot.exists()) {
        const data = docSnapshot.data()
        return data
      }
    } catch (err) {
      return { error: err }
    }
  }
  return null
}

export const fetchTrendingBarCategories = async () => {
  try {
    const docRef = doc(firestore, 'app-content/trending-bar-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { categories } = data
      if (categories) categories.sort(() => Math.random() - 0.5)
      return categories
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchGroupsPageGroups = async () => {
  try {
    const docRef = doc(firestore, 'app-content/groups-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { groups } = data
      if (groups) groups.sort(() => Math.random() - 0.5)
      return groups
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchSidebarArticles = async () => {
  try {
    const docRef = doc(firestore, 'app-content/home-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { articles } = data
      if (articles) articles.sort(() => Math.random() - 0.5)
      return articles
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchSidebarGroups = async () => {
  try {
    const docRef = doc(firestore, 'app-content/groups-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { groups } = data
      if (groups) groups.sort(() => Math.random() - 0.5)
      return groups
    }
  } catch (err) {
    return { error: err }
  }
  return null
}

export const fetchNewsPageArticles = async () => {
  try {
    const docRef = doc(firestore, 'app-content/news-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      const { articles } = data
      if (articles) articles.sort(() => Math.random() - 0.5)
      return articles
    }
  } catch (err) {
    return { error: err }
  }
  return null
}
