import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'cypress'

loadEnvConfig(process.env.PWD || '')

const HOST = process.env.HOST

export default defineConfig({
  e2e: {
    baseUrl: HOST,
    // eslint-disable-next-line unused-imports/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
