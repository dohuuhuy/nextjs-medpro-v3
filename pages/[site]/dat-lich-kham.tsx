import * as ac from '@actionStore'
import BookingTree from '@components/organisms/BookingTree'
import { SEOHead } from '@components/SEO/SEOHead/Index'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import Loading from '@componentsTest/Loading'
import { AppState } from '@src/store/interface'
import { check } from '@src/utils/checkValue'
import { banner } from '@utils/func'
import { NextSeoProps } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinDatKhamPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const partnerId: any = router.query?.site

  const hospital = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    // 1. xóa tiền bạc đi
    dispatch(ac.paymentReset())
    // 2. làm mới step lại
    dispatch(ac.resetSchedule())
    // 3. set lại partnerid
    dispatch(ac.setParnerIdHospital(partnerId))
    // 4. get booking về
    dispatch(ac.getBookingTree(partnerId))
    // 5. xóa chọn hồ sơ trước đó
    dispatch(ac.selectedPatient(null))
    // 6. xóa thông tin phiếu đã xem trước đó
    dispatch(ac.getBillInfoSuccess(null))

    check(hospital.listHospital) && dispatch(ac.getListHospital())
  }, [router.query?.site])

  if (!data) return null
  const listHospital = data.listHospital

  return (
    <>
      <SEOHead meta={handleMeta(total?.partnerId)} />
      <BreadcumbCustom
        type='booking'
        listHos={listHospital}
        header={hospital.information.header}
      />
      {check(hospital?.bookingTree) ? (
        <Loading component />
      ) : (
        <BookingTree bookingTree={hospital?.bookingTree} />
      )}
    </>
  )
}

ThongTinDatKhamPage.layout = DefaultLayout
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
    title: 'Đặt lịch khám',
    description: 'Đặt lịch khám',
    canonical: 'https://nextjs-testing.medpro.com.vn',
    openGraph: {
      type: 'website',
      url: 'https://nextjs-testing.medpro.com.vn',
      title: 'Đặt lịch khám',
      description: 'Đặt lịch khám',
      images: [
        {
          url: banner(partnerId),
          width: 800,
          height: 600,
          alt: 'Đặt lịch khám'
        }
      ],
      site_name: 'UMC - hình thức đặt khám'
    }
  } as NextSeoProps
}
