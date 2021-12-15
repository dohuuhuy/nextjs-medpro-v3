import * as ac from '@actionStore'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import { BookingType } from '@componentsTest/BookingType'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import Loading from '@componentsTest/Loading'
import { check } from '@src/utils/checkValue'
import { AppState } from '@store/interface'
import { banner } from '@utils/func'
import { find } from 'lodash'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HinhThucDatKham = ({ data }: any) => {
  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)

  const router = useRouter()
  const { site } = router.query

  useEffect(() => {
    dispatch(ac.setLoading())
    dispatch(ac.setParnerIdHospital(site))

    setTimeout(() => {
      dispatch(ac.setLoading(false))
    }, 1000)
  }, [router])

  if (!hos) return null

  let listMenu = []
  if (hos.information?.header) {
    const { menu, insideLink } = hos.information?.header
    listMenu = menu ? menu.concat(insideLink) : []
  }

  if (total.loading) return <Loading component />
  // if (!data.listHospsital) return

  const listHospital = data.listHospital
  const getInfo = find(listHospital, { partnerId: site })

  return (
    <>
      {getInfo > 0 && <SEOHead meta={handerMeta(getInfo, router)} />}

      <BreadcumbCustom
        type='booking'
        listHos={listHospital}
        listMenu={listMenu}
      />

      {check(data.listHospital) ? (
        <Loading component />
      ) : (
        <BookingType getInfo={getInfo} />
      )}
    </>
  )
}

HinhThucDatKham.layout = DefaultLayout

export default HinhThucDatKham

export const getServerSideProps = async () => {
  const data = await SelectHospitalCtl()

  return { props: { data } }
}

const handerMeta = (getInfo: any, router: any) => {
  return {
    noindex: false,
    nofollow: false,
    robotsProps: {},
    title: 'Hình thức đặt khám',
    description: 'Hình thức đặt khám, chạy đâu k biết',
    canonical: router.asPath,
    openGraph: {
      type: 'website',
      url: router.asPath,
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
  } as NextSeoProps
}
