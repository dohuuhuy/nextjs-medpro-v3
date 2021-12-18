import * as ac from '@actionStore'
import { BookingBill } from '@componentsTest/BookingBill'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import Loading from '@componentsTest/Loading'
import { AppState } from '@store/interface'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state: AppState) => state.user)
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    const { transactionId, mpTransaction } = router.query
    transactionId && dispatch(ac.getBillInfo(transactionId))
    mpTransaction && dispatch(ac.getPaymentInfo(mpTransaction))
  }, [router.query.transactionId])

  if (total.loading) {
    return (
      <Loading component={true} text='Đang cập nhật thông tin phiếu khám ...' />
    )
  }

  return (
    <>
      <BreadcumbCustom
        type='bills'
        appId={total.appId}
        partner={user.billInfo?.bookingInfo?.partner}
      />
      <BookingBill bill={user.billInfo} />
    </>
  )
}

DetailBookingPage.layout = DefaultLayout

export default DetailBookingPage
