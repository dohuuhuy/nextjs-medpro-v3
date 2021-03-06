import * as ac from '@actionStore'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { LichSuThanhToanVienPhiCustom } from '@componentsTest/LichSuThanhToanVienPhiCustom'
import Loading from '@componentsTest/Loading'
import { SEOHead } from '@src/components/SEO/SEOHead/Index'
import { AppState } from '@src/store/interface'
import { urlJson } from '@src/utils/contants'
import { fetcher } from '@utils/func'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LichSuThanhToanVienPhi = ({ meta }: any) => {
  const router = useRouter()
  const partnerId: any = router.query?.site
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })
  const hospital = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(ac.setParnerIdHospital(partnerId))
    dispatch(ac.getHistoryPayment())
  }, [])

  return (
    <>
      <SEOHead meta={findMeta} />
      <BreadcumbCustom text='Lịch sử thanh toán viện phí' type='normal' />
      {total.loading ? (
        <Loading
          component
          typing={false}
          text='Đang cập nhật danh sách viện phí ...'
        />
      ) : (
        <LichSuThanhToanVienPhiCustom data={hospital.listHistoryPayment} />
      )}
    </>
  )
}
LichSuThanhToanVienPhi.layout = DefaultLayout

export default LichSuThanhToanVienPhi

export const getServerSideProps = async (_ctx: any) => {
  const meta = await fetcher(urlJson.urlSEOPage)

  return { props: { meta } }
}
