import { BookingBill } from '@componentsTest/BookingBill'
import { BreadcumbCustom } from '@componentsTest/BreadcumbCustom'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import * as ac from '@actionStore/rootAction'
import { useDispatch } from 'react-redux'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const DetailBookingPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    const { transactionId } = router.query
    dispatch(ac.getBillInfo(transactionId))
  }, [router.query])
  return (
    <>
      <BreadcumbCustom type='booking' />
      <BookingBill />
    </>
  )
}

DetailBookingPage.Layout = DefaultLayout
export default DetailBookingPage
