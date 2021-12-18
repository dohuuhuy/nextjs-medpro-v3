import * as ac from '@actionStore'
import { ThongTinHoSoCustom } from '@componentsTest/ThongTinHoSoCustom'
import { AppState } from '@store/interface'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinHoSo = () => {
  const user = useSelector((state: AppState) => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.listPatientRequest())
    dispatch(ac.getBookingByUser())
    /* check(user.userInfo.token) && dispatch(ac.getNoti()) */
  }, [])
  const medthod: any = {
    listUser: user?.listPatient,
    listBooking: user?.bookingByUser,
    listNotice: user?.noti
  }
  return <ThongTinHoSoCustom {...medthod} />
}

ThongTinHoSo.Layout = DefaultLayout
export default ThongTinHoSo
