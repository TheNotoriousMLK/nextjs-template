import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

interface Credentials {
  email: string
  password: string
}

export const createAccount = async ({ email, password }: Credentials) => {
  const auth = getAuth()
  await createUserWithEmailAndPassword(auth, email, password)
}

export const login = async ({ email, password }: Credentials) => {
  const auth = getAuth()
  await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  const auth = getAuth()
  await signOut(auth)
}
