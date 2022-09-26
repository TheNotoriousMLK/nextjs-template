import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../app/redux/store'
import type { AppUser } from './hooks/userContext'

interface AuthState {
  user: AppUser | null
  loadingUser: Boolean
}

const initialState: AuthState = {
  user: null,
  loadingUser: false,
}

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setUser: (state, { payload }: PayloadAction<AppUser | null>) => {
      state.user = payload
    },
    clearUser: (state) => {
      state.user = null
    },
    setLoadingUser: (state, { payload }: PayloadAction<Boolean>) => {
      state.loadingUser = payload
    },
  },
})

export const { setUser, clearUser, setLoadingUser } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer
