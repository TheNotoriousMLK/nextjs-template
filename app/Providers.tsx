'use client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import store from '~/src/app/redux/store'
import { theme } from '~/src/app/utils/theme'

import { EmotionRegistry } from './EmotionRegistry'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <EmotionRegistry>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </EmotionRegistry>
    </Provider>
  )
}
