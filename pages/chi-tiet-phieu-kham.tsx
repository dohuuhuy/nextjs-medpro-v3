import { BookingBill } from '@componentsTest/BookingBill'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import * as ac from '@actionStore/rootAction'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@store/interface'
import Loading from '@componentsTest/Loading'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state: AppState) => state.user)
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    const { transactionId } = router.query
    // khi nào có transactionId thì chạy
    transactionId && dispatch(ac.getBillInfo(transactionId))
  }, [router.query.transactionId])

  if (total.loading)
    return <Loading component text='Đang cập nhật thông tin phiếu khám ...' />

  return (
    <DefaultLayout>
      <BreadcumbCustom
        type='bills'
        appId={total.appId}
        partner={user.billInfo?.bookingInfo?.partner}
      />
      <BookingBill bill={user.billInfo} />
    </DefaultLayout>
  )
}

export default DetailBookingPage
