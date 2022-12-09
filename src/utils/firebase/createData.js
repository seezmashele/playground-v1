import { setDoc, doc } from 'firebase/firestore'
import { firestore } from '../firebase'

export const createEvent = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `events/${slug}`)
    setDoc(docRef, docData).catch((err) => ({ error: err }))
  }
}

export const createArticle = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `articles/${slug}`)
    setDoc(docRef, docData).catch((err) => ({ error: err }))
  }
}

export const createGroup = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `groups/${slug}`)
    setDoc(docRef, docData).catch((err) => ({ error: err }))
  }
}

export const createCategory = async () => null
