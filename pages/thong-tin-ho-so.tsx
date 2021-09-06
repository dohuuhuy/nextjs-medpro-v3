import { ThongTinHoSoCustom } from '@componentsTest/ThongTinHoSoCustom'
import * as ac from '@actionStore/rootAction'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinHoSo = () => {
  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const dispatch = useDispatch()
  useEffect(() => {
    check(listPatient) && dispatch(ac.ListPatientRequest())
    dispatch(ac.GetBookingByUser())
  }, [])

  return <ThongTinHoSoCustom />
}

ThongTinHoSo.Layout = DefaultLayout
export default ThongTinHoSo
