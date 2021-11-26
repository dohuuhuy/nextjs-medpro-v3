import * as ac from '@actionStore/rootAction'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import BookingTree from '@components/organisms/BookingTree'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import Loading from '@componentsTest/Loading'
import DefaultLayout from '@templates/Default'
import { banner } from '@utils/func'
import { NextSeoProps } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import { AppState } from 'store/interface'

const ThongTinDatKhamPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const partnerId = router.query?.site

  const hos = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    dispatch(ac.getBookingTree(partnerId))
  }, [])

  if (!data) return null
  const listHospital = data.listHospital
  if (!hos || !data.listHospital) return null

  let listMenu = []
  if (hos.information?.header) {
    const { menu, insideLink } = hos.information?.header
    listMenu = menu ? menu.concat(insideLink) : []
  }

  if (total.loading) return <Loading component />

  return (
    <>
      <SEOHead meta={handleMeta(total.partnerId)} />
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

const handleMeta = (partnerId: string) => {
  return {
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
  } as NextSeoProps
}
