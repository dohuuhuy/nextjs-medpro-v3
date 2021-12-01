import { HuongDanCustom } from '@componentsTest/HuongDanCustom'
import BannersPublic from '@src/components/organisms/BannersPublic'
import { SEOHead } from '@src/components/SEO/SEOHead/Index'
import { currentEnv } from '@src/config/envs'
import { urlSEOPage } from '@src/utils/contants'
import { fetcher, fetcherGuide } from '@utils/func'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDan = ({ data, meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })

  return (
    <>
      <SEOHead meta={findMeta} />
      <BannersPublic />
      {!data ? null : <HuongDanCustom data={data} />}
    </>
  )
}
HuongDan.layout = DefaultLayout

export default HuongDan

export const getServerSideProps = async (_ctx: any) => {
  const url = currentEnv.BO_API + '/quy-trinh/get-by-partner'
  const data = await fetcherGuide(url)
  const meta = await fetcher(urlSEOPage)

  return { props: { data, meta } }
}
