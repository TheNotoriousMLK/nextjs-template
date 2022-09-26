import { DefaultSeoProps } from './node_modules/next-seo/lib/types.d'

const url = process.env.NEXT_PUBLIC_URL

export const SEO: DefaultSeoProps = {
  defaultTitle: 'Next.js Typescript Template',
  titleTemplate: '%s | MLK',
  description: 'A custom Next.js Typescript template.',
  openGraph: {
    locale: 'en_GB',
    site_name: 'Next.js Typescript Template',
    type: 'website',
    url,
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1, width=device-width',
    },
  ],
}
