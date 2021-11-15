import { SEOHead } from '@components/SEO/SEOHead/Index'
import { BookingType } from '@componentsTest/BookingType'
import { currentEnv } from '@config/envs/env'
import { find } from 'lodash'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const time = new Date().getTime()

const HinhThucDatKham = (props: any) => {
  const router = useRouter()
  console.log('router :>> ', router)
  const { site } = router.query
  const listHospital = props.data.listHospital
  const getInfo = find(listHospital, { partnerId: site })

  React.useEffect(() => {}, [router.pathname])

  const methods: any = {
    getInfo
  }

  const meta: NextSeoProps = {
    noindex: false,
    nofollow: false,
    robotsProps: {},
    title: 'Hình thức đặt khám',
    description: 'Hình thức đặt khám, chạy đâu k biết',
    canonical: router.asPath,
    openGraph: {
      type: 'website',
      url: router.asPath + '?t=' + time,
      title: getInfo.name,
      description: `Hình thức đặt khám \n${getInfo.name} \n${getInfo.address}`,
      images: [
        {
          url: banner(getInfo.partnerId),
          width: 800,
          height: 600,
          alt: ''
        }
      ],
      site_name: 'UMC - hình thức đặt khám'
    }
  }

  return (
    <>
      {' '}
      <SEOHead meta={meta} /> <BookingType {...methods} />
    </>
  )
}

HinhThucDatKham.Layout = DefaultLayout
export default HinhThucDatKham

export const getServerSideProps = async (ctx: any) => {
  const data = await SelectHospitalCtl(ctx)

  return { props: { data } }
}

const banner = (e: string) => {
  return `${currentEnv.API_Image}/static/images/${e}/web/banner_desktop.png?n=${time}`
}
