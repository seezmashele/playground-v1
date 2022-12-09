import { setDoc, doc } from 'firebase/firestore'
import { firestore } from '../firebase'

export const createUserDoc = async (
  uid,
  username,
  displayName,
  dateOfBirth
) => {
  try {
    await setDoc(doc(firestore, `users/${uid}`), {
      uid,
      username,
      displayName,
      dateofbirth: dateOfBirth || null
    })
    return { success: true }
  } catch (error) {
    return { error }
  }
}

export const updateUserDoc = async (uid, username, dateOfBirth) => {
  try {
    await setDoc(doc(firestore, `users/${uid}`), {
      uid,
      username,
      dateofbirth: dateOfBirth || null
    })
    return { success: true }
  } catch (error) {
    return { error }
  }
}
