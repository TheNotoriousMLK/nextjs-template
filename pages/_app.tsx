import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Provider } from 'react-redux'

import { SEO } from '~/next-seo.config'
import type { NextPageWithLayout } from '~/src/app/layouts'
import store from '~/src/app/redux/store'
import createEmotionCache from '~/src/app/utils/createEmotionCache'
import { theme } from '~/src/app/utils/theme'
import UserProvider from '~/src/auth/hooks/userContext'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout
}

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)
  const enableFirebase = Number(process.env.NEXT_PUBLIC_ENABLE_FIREBASE)

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <DefaultSeo {...SEO} />

        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {enableFirebase ? (
            <UserProvider>
              {getLayout(<Component {...pageProps} />)}
            </UserProvider>
          ) : (
            getLayout(<Component {...pageProps} />)
          )}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}
