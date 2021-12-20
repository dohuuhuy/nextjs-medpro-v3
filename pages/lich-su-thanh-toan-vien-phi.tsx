import * as ac from '@actionStore'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import { LichSuThanhToanVienPhiCustom } from '@componentsTest/LichSuThanhToanVienPhiCustom'
import { SEOHead } from '@src/components/SEO/SEOHead/Index'
import { AppState } from '@src/store/interface'
import { urlJson } from '@src/utils/contants'
import { fetcher } from '@utils/func'
import { Button, Result } from 'antd'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LichSuThanhToanVienPhi = ({ meta }: any) => {
  const router = useRouter()
  const findMeta = find(meta, { key: router.asPath.replace('/', '') })
  const hospital = useSelector((state: AppState) => state.hospital)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(ac.getHistoryPayment())
  }, [])

  console.log(
    'hospital.listHistoryPayment :>> ',
    hospital.listHistoryPayment.statusCode
  )

  return (
    <>
      <SEOHead meta={findMeta} />
      <BreadcumbCustom text='Lịch sử thanh toán viện phí' type='normal' />
      {hospital.listHistoryPayment.statusCode ? (
        <Result
          status='404'
          title='404'
          subTitle={hospital.listHistoryPayment.message}
          extra={
            <Button type='primary'>
              <Link href='/'>
                <a style={{ color: 'white' }}> Trang chủ</a>
              </Link>
            </Button>
          }
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
