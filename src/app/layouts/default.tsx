import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box>{children}</Box>
    </>
  )
}
