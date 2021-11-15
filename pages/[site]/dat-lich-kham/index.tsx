import * as ac from '@actionStore/rootAction'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import { check } from '@utils/checkValue'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/interface'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const BookingTree = dynamic(() => import('@componentsTest/BookingTree'))

const ThongTinDatKhamPage = () => {
  const router = useRouter()

  const slug = router.query?.site

  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    check(slug) && dispatch(ac.getBookingTree(slug))
    check(user.listPatient) && dispatch(ac.ListPatientRequest())
  }, [dispatch, hos?.bookingTree, user.listPatient, slug])

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
          url: banner('umc'),
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
      <SEOHead meta={meta} /> <BookingTree />
    </>
  )
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage

const banner = (e: string) => {
  return `https://resource-testing.medpro.com.vn/static/images/${e}/web/banner_desktop.png`
}
