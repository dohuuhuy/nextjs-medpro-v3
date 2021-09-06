import { NextSeo, NextSeoProps } from 'next-seo'

interface Props {
  meta: NextSeoProps
}

export const SEOHead = ({ meta }: Props) => {
  return (
    <NextSeo
      title={meta?.title}
      titleTemplate={meta?.titleTemplate}
      defaultTitle={meta?.defaultTitle}
      noindex={meta?.noindex}
      nofollow={meta?.nofollow}
      robotsProps={meta?.robotsProps}
      description={meta?.description}
      canonical={meta?.canonical}
      mobileAlternate={meta?.mobileAlternate}
      languageAlternates={meta?.languageAlternates}
      openGraph={meta?.openGraph}
      facebook={meta?.facebook}
      twitter={meta?.twitter}
      additionalMetaTags={meta?.additionalMetaTags}
      additionalLinkTags={meta?.additionalLinkTags}
    />
  )
}
