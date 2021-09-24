import * as ac from '@actionStore/rootAction'
import { BookingTree } from '@componentsTest/BookingTree'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/interface'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThongTinDatKhamPage = () => {
  const router = useRouter()

  const hospital = useSelector((state: AppState) => state.hospital)
  const listPatient = useSelector((state: AppState) => state.user.listPatient)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.getBookingTree(router.query?.site))
    dispatch(ac.ListPatientRequest())
  }, [dispatch, hospital?.bookingTree, listPatient, router.query?.site])

  // const { partnerId } = router.query

  // const findHospital = find(hospital?.listHospital, { partnerId })

  // const methods = {
  //   listPatient,
  //   bookingTree: hospital?.bookingTree,
  //   info: findHospital
  // }

  return <BookingTree />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
