import { BookingBill } from '@componentsTest/BookingBill'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import * as ac from '@actionStore/rootAction'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@store/interface'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state: AppState) => state.user)
  useEffect(() => {
    const { transactionId } = router.query
    dispatch(ac.getBillInfo(transactionId))
  }, [router.query.transactionId])

  console.log('user.billInfo :>> ', user.billInfo)
  return (
    <>
      <BreadcumbCustom type='booking' />
      <BookingBill bill={user.billInfo} />
    </>
  )
}

DetailBookingPage.Layout = DefaultLayout
export default DetailBookingPage
