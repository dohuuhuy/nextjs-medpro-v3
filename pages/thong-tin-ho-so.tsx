import { ThongTinHoSoCustom } from '@componentsTest/ThongTinHoSoCustom'
import * as ac from '@actionStore/rootAction'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinHoSo = () => {
  const user = useSelector((state: AppState) => state.userReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    check(user?.listPatient) && dispatch(ac.ListPatientRequest())
    check(user?.bookingByUser) && dispatch(ac.GetBookingByUser())
  }, [])

  return <ThongTinHoSoCustom />
}

ThongTinHoSo.Layout = DefaultLayout
export default ThongTinHoSo
