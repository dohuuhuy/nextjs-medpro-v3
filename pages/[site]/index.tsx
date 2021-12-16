import HandlerGetContentPage from '@components/molecules/HandlerGetContentPage'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import Loading from '@componentsTest/Loading'
import BannersPublic from '@src/components/organisms/BannersPublic'
import { check } from '@src/utils/checkValue'
import { urlJson } from '@utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const Site = ({ data, meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })

  useEffect(() => {
    if (router.asPath.includes('phong-mach')) {
      window.open('https://medpro.vn/clinic', '_blank')
    }
  }, [router.asPath])

  return (
    <>
      <SEOHead meta={findMeta} />
      <BannersPublic />
      {check(data) ? (
        <Loading component text='Đang cập nhật dữ liệu ........' />
      ) : (
        <HandlerGetContentPage dataContent={data} />
      )}
    </>
  )
}

Site.layout = DefaultLayout

export default Site

export const getServerSideProps = async () => {
  const data = await fetcher(urlJson.urlContent)
  const meta = await fetcher(urlJson.urlSEOPage)

  return { props: { data, meta } }
}
