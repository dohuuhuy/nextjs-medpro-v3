import { SEOHead } from '@components/SEO/SEOHead/Index'
import { BookingType } from '@componentsTest/BookingType'
import { find } from 'lodash'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucDatKham = (props: any) => {
  const router = useRouter()
  const { site } = router.query
  const listHospital = props.data.listHospital
  const getInfo = find(listHospital, { partnerId: site })

  const methods: any = {
    getInfo
  }

  const meta: NextSeoProps = {
    noindex: true,
    nofollow: true,
    robotsProps: {},
    title: 'Hình thức đặt khám',
    description: 'Hình thức đặt khám, chạy đâu k biết',
    canonical: 'https://nextjs-testing.medpro.com.vn',
    openGraph: {
      type: 'website',
      url: 'https://nextjs-testing.medpro.com.vn',
      title: getInfo.name,
      description: `Hình thức đặt khám \n${getInfo.name} \n${getInfo.address}`,
      images: [
        {
          url: banner(getInfo.partnerId),
          width: 800,
          height: 600,
          alt: 'Hình thức đặt khám'
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
  return (
    `https://resource-testing.medpro.com.vn/static/images/${e}/web/banner_desktop.png?t=` +
    new Date().getUTCSeconds()
  )
}
