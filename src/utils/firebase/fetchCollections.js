/* eslint-disable no-shadow */
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { firestore } from '../firebase'

const eventsCollectionRef = collection(firestore, 'events')
const groupsCollectionRef = collection(firestore, 'groups')
const articlesCollectionRef = collection(firestore, 'articles')
const categoriesCollectionRef = collection(firestore, 'categories')

const setHomePageItems = async (articles) => {
  const itemsDocRef = doc(firestore, 'app-content/home-page-items')
  const processedArticles = articles.slice(0, 20)
  const finalDocData = {
    events: [1, 2, 3],
    articles: processedArticles
  }
  setDoc(itemsDocRef, finalDocData).catch((err) => {
    throw err
  })
}

const setEventsPageItems = async (events) => {
  const itemsDocRef = doc(firestore, 'app-content/events-page-items')
  const newEvents = events.slice(0, 20)
  const finalDocData = {
    events: newEvents
  }
  setDoc(itemsDocRef, finalDocData).catch((err) => {
    throw err
  })
}

export const setGroupsPageItems = async (groups) => {
  const itemsDocRef = doc(firestore, 'app-content/groups-page-items')
  const processedItems = groups.slice(0, 20)
  const finalDocData = {
    groups: processedItems
  }
  setDoc(itemsDocRef, finalDocData).catch((err) => {
    throw err
  })
}

export const fetchHomePageEvents = async () => {
  const querySnapshot = await getDocs(eventsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchHomePageArticles = async () => {
  const querySnapshot = await getDocs(articlesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  setHomePageItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchHomePageGroups = async () => {
  const querySnapshot = await getDocs(groupsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchEventsPageEvents = async () => {
  const querySnapshot = await getDocs(eventsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  setEventsPageItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchTrendingBarCategories = async () => {
  const querySnapshot = await getDocs(categoriesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug ? docData.slug : null,
      title: docData.title,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchSidebarArticles = async () => {
  const querySnapshot = await getDocs(articlesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchSidebarGroups = async () => null

export const fetchNewsPageArticles = async () => {
  const querySnapshot = await getDocs(articlesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchGroupsPageGroups = async () => {
  const querySnapshot = await getDocs(groupsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}
