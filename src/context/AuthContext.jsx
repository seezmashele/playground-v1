import { createContext, useContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { createUserDoc } from '../utils/firebase/users'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  // const [currentUserIsLoading, setCurrentUserIsLoading] = useState()

  const signup = (email, password, username, displayName, dateOfBirth) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { user } = userCredential
        updateProfile(auth.currentUser, {
          displayName
        })
          .then(() => ({ success: true }))
          .catch((error) => ({ error }))
        const result = await createUserDoc(user.uid, username, dateOfBirth)
        return result.success ? { success: true } : result.error
      })
      .catch((error) => ({
        errorCode: error.code,
        errorMessage: error.message
      }))

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(() => ({ success: true }))
      .catch((error) => ({
        errorCode: error.code,
        errorMessage: error.message
      }))

  const logout = () => {
    signOut(auth)
      .then(() => ({ success: true }))
      .catch((error) => ({ error }))
  }

  const resetPassword = () => 'reset password'

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
