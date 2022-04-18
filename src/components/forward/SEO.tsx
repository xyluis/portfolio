import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  url?: string
  title?: string
  image?: string
  description?: string
}

interface MakeUrlProps {
  path: string
}

const makeUrl = ({ path = '' }: MakeUrlProps) => `https://zorin.com.br/${path}`

export default function SEO({
  description = 'I\'m a computer science student at Universidade de Cuiabá (UNIC) in Cuiabá, MT, Brazil.',
  title = 'xyluis',
  children
}: PropsWithChildren<Props>): JSX.Element {
  const metaImage = 'https://github.com/xyluis.png'
  const canonical = 'https://xyluis.vercel.app'

  return (
    <Head>
      <title>{title}</title>

      <link rel="canonical" href={canonical} />

      <link rel="icon" href="/favicon.ico" />

      <link itemProp="url" href={canonical} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />

      {/* OpenGraph */}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="xyLuis" />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />

      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />

      {/* Twitter */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      <meta name="twitter:site" content="@xyluiis" />
      <meta name="twitter:creator" content="@xyluiis" />
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </Head>
  )
}