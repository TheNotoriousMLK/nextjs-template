import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createContext, PropsWithChildren, useEffect } from 'react'

import { createFirebaseApp } from '~/src/app/firebase/clientApp'
import { useAppSelector } from '~/src/app/redux/hooks'

import { clearUser, selectUser, setLoadingUser, setUser } from '../authSlice'

export interface AppUser {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
}

const UserContext = createContext<AppUser | null>(null)

export default function UserContextComp({ children }: PropsWithChildren) {
  const user = useAppSelector(selectUser)

  useEffect(() => {
    // Listen authenticated user
    const app = createFirebaseApp()
    const auth = getAuth(app)
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL })
        } else {
          clearUser()
        }
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false)
      }
    })

    // Unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
