import { NewsPageCustom } from '@componentsTest/NewsPage'
import { SEOHead } from '@src/components/SEO/SEOHead/Index'
import { urlSEOPage } from '@src/utils/contants'
import { fetcher } from '@src/utils/func'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { TinTucCtrl } from 'src/containers/News/news'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = ({ data, meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })
  if (!data) return null
  return (
    <>
      <SEOHead meta={findMeta} />
      <NewsPageCustom {...data} />
    </>
  )
}

TinTucPage.layout = DefaultLayout

export const getServerSideProps = async (ctx: any) => {
  const data = await TinTucCtrl(ctx)
  const meta = await fetcher(urlSEOPage)
  return { props: { data, meta } }
}

export default TinTucPage
