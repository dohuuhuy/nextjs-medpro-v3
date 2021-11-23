import * as ac from '@actionStore/rootAction'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import BookingTree from '@componentsTest/BookingTree'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import DefaultLayout from '@templates/Default'
import { banner } from '@utils/func'
import { NextSeoProps } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import { AppState } from 'store/interface'

const ThongTinDatKhamPage = (props: any) => {
  const router = useRouter()
  const partnerId = router.query?.site

  const hos = useSelector((state: AppState) => state.hospital)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ac.getBookingTree(partnerId))
  }, [])

  const meta: NextSeoProps = {
    noindex: true,
    nofollow: true,
    robotsProps: {},
    title: 'Hình thức đặt khám',
    description: 'Hình thức đặt khám',
    canonical: 'https://nextjs-testing.medpro.com.vn',
    openGraph: {
      type: 'website',
      url: 'https://nextjs-testing.medpro.com.vn',
      title: 'Hình thức đặt khám',
      description: 'Hình thức đặt khám',
      images: [
        {
          url: banner(partnerId),
          width: 800,
          height: 600,
          alt: 'Hình thức đặt khám'
        }
      ],
      site_name: 'UMC - hình thức đặt khám'
    }
  }

  const listHospital = props.data.listHospital

  if (!hos) return null

  let listMenu = []
  if (hos.information?.header) {
    const { menu, insideLink } = hos.information?.header
    listMenu = menu ? menu.concat(insideLink) : []
  }

  return (
    <>
      <SEOHead meta={meta} />
      <BreadcumbCustom
        type='booking'
        listHos={listHospital}
        listMenu={listMenu}
      />
      <BookingTree bookingTree={hos.bookingTree} />
    </>
  )
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()

  return { props: { data } }
}
