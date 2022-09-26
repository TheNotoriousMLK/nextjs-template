import type { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

import DefaultLayout from './default'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export const wrapWithDefaultLayout = (page: NextPage) =>
  ((page as NextPageWithLayout).getLayout = (page: ReactElement) => {
    return <DefaultLayout>{page}</DefaultLayout>
  })
