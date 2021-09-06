import * as ac from '@actionStore/rootAction'
import { ThongTinDatKham } from '@componentsTest/ThongTinDatKham'
import { check } from '@utils/checkValue'
import { find } from 'lodash'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/interface'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinDatKhamPage = () => {
  const router = useRouter()

  const { listHospital, bookingTree } = useSelector(
    (state: AppState) => state.hospitalReducer
  )
  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const dispatch = useDispatch()
  useEffect(() => {
    check(bookingTree) && dispatch(ac.getBookingTree(router.query?.partnerId))
    check(listPatient) && dispatch(ac.ListPatientRequest())
  }, [])

  const { partnerId } = router.query

  const findHospital = find(listHospital, { partnerId })

  const methods = {
    listPatient,
    bookingTree,
    info: findHospital
  }

  return <ThongTinDatKham {...methods} />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
