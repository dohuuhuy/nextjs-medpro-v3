export interface NextSeoProps {
  key: string // ví dụ quy-trinh, gioi-thieu
  title?: string
  titleTemplate?: string
  defaultTitle?: string
  noindex?: boolean
  nofollow?: boolean
  robotsProps?: AdditionalRobotsProps
  description?: string
  canonical?: string
  mobileAlternate?: MobileAlternate
  languageAlternates?: ReadonlyArray<LanguageAlternate>
  openGraph?: OpenGraph
  facebook?: {
    appId: string
  }
  twitter?: Twitter
  additionalMetaTags?: ReadonlyArray<MetaTag>
  additionalLinkTags?: ReadonlyArray<LinkTag>
}

interface LinkTag {
  rel: string
  href: string
  sizes?: string
  type?: string
  color?: string
  keyOverride?: string
}

export interface BaseMetaTag {
  content: string
  keyOverride?: string
}
export interface HTML5MetaTag extends BaseMetaTag {
  name: string
  property?: undefined
  httpEquiv?: undefined
}
export interface RDFaMetaTag extends BaseMetaTag {
  property: string
  name?: undefined
  httpEquiv?: undefined
}
export interface HTTPEquivMetaTag extends BaseMetaTag {
  httpEquiv:
    | 'content-security-policy'
    | 'content-type'
    | 'default-style'
    | 'x-ua-compatible'
    | 'refresh'
  name?: undefined
  property?: undefined
}
export declare type MetaTag = HTML5MetaTag | RDFaMetaTag | HTTPEquivMetaTag

export interface Twitter {
  handle?: string
  site?: string
  cardType?: string
}

export interface AdditionalRobotsProps {
  nosnippet?: boolean
  maxSnippet?: number
  maxImagePreview?: ImagePrevSize
  maxVideoPreview?: number
  noarchive?: boolean
  unavailableAfter?: string
  noimageindex?: boolean
  notranslate?: boolean
}
export declare type ImagePrevSize = 'none' | 'standard' | 'large'

interface MobileAlternate {
  media: string
  href: string
}

interface LanguageAlternate {
  hrefLang: string
  href: string
}

export interface OpenGraph {
  url?: string
  type?: string
  title?: string
  description?: string
  images?: ReadonlyArray<OpenGraphImages>
  videos?: ReadonlyArray<OpenGraphVideos>
  defaultImageHeight?: number
  defaultImageWidth?: number
  locale?: string
  site_name?: string
  profile?: OpenGraphProfile
  book?: OpenGraphBook
  article?: OpenGraphArticle
  video?: OpenGraphVideo
}

export interface OpenGraphImages {
  url: string
  width?: number
  height?: number
  alt?: string
}
export interface OpenGraphVideos {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: string
  secureUrl?: string
}

export interface OpenGraphProfile {
  firstName?: string
  lastName?: string
  username?: string
  gender?: string
}

export interface OpenGraphBook {
  authors?: ReadonlyArray<string>
  isbn?: string
  releaseDate?: string
  tags?: ReadonlyArray<string>
}

export interface OpenGraphArticle {
  publishedTime?: string
  modifiedTime?: string
  expirationTime?: string
  authors?: ReadonlyArray<string>
  section?: string
  tags?: ReadonlyArray<string>
}

export interface OpenGraphVideo {
  actors?: ReadonlyArray<OpenGraphVideoActors>
  directors?: ReadonlyArray<string>
  writers?: ReadonlyArray<string>
  duration?: number
  releaseDate?: string
  tags?: ReadonlyArray<string>
  series?: string
}

export interface OpenGraphVideoActors {
  profile: string
  role?: string
}

//  ví dụ mẫu thui, chưa đủ

export const SEOPage: NextSeoProps[] = [
  {
    key: 'gioi-thieu',
    title: 'Giới thiệu',
    description: 'Giới thiệu medpro',
    canonical: 'https://medpro.vn',
    openGraph: {
      type: 'website',
      url: 'https://medpro.vn',
      title: 'Giới thiệu',
      description: 'Giới thiệu medpro',
      images: [
        {
          url: `https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg`,
          width: 800,
          height: 600,
          alt: 'giới thiệu'
        }
      ],
      site_name: 'Trang Giới thiệu'
    }
  },
  {
    key: 'quy-trinh',
    title: 'Quy trình',
    description: 'Quy trình medpro',
    canonical: 'https://medpro.vn',
    openGraph: {
      type: 'website',
      url: 'https://medpro.vn',
      title: 'Quy trình',
      description: 'Quy trình medpro',
      images: [
        {
          url: `https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg`,
          width: 800,
          height: 600,
          alt: 'giới thiệu'
        }
      ],
      site_name: 'Trang Quy trình'
    }
  }
]
