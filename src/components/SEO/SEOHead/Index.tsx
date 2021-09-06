import { currentEnv } from '@config/envs/env'
import { NextSeo, NextSeoProps } from 'next-seo'
import { MetaTag, OpenGraphImages, OpenGraphVideos } from 'next-seo/lib/types'

export const SEOHead = (props: NextSeoProps) => {
  return (
    <>
      <NextSeo
        title={props?.title}
        defaultTitle={props?.defaultTitle}
        titleTemplate={props?.titleTemplate}
        description={props?.description}
        canonical={props?.canonical}
        facebook={props?.facebook}
        openGraph={{
          type: props?.openGraph?.type,
          url: props?.openGraph?.url,
          title: props?.openGraph?.title,
          description: props?.openGraph?.description,
          images: props?.openGraph?.images?.map(
            (e: OpenGraphImages, i: any) => {
              return {
                key: i,
                url: `${currentEnv.API_NEWS + e?.url}`,
                width: e?.width,
                height: e?.height,
                alt: e?.alt
              }
            }
          ),
          videos: props?.openGraph?.videos?.map(
            (e: OpenGraphVideos, i: any) => {
              return {
                key: i,
                url: `${currentEnv.API_NEWS + e?.url}`,
                width: e?.width,
                height: e?.height,
                alt: e?.alt,
                type: e?.type,
                secureUrl: e?.secureUrl
              }
            }
          ),
          site_name: props?.openGraph?.site_name
        }}
        additionalMetaTags={props?.additionalMetaTags}
        additionalLinkTags={props?.additionalLinkTags?.map((e: LinkTag) => {
          return {
            rel: e?.rel,
            href: e?.href,
            sizes: e?.sizes,
            type: e?.type,
            color: e?.color,
            keyOverride: e?.keyOverride
          }
        })}
      />
    </>
  )
}

interface LinkTag {
  rel: string
  href: string
  sizes?: string
  type?: string
  color?: string
  keyOverride?: string
}

// additionalMetaTags={
//         props?.additionalMetaTags?.map((e: MetaTag) => {
//           return {
//             name: e?.name,
//             property: e?.property,
//             httpEquiv: e?.httpEquiv
//           }
//         }) || ''
//       }
