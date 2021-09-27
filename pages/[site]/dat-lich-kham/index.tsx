import * as ac from '@actionStore/rootAction'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/interface'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const BookingTree = dynamic(() => import('@componentsTest/BookingTree'))

const ThongTinDatKhamPage = () => {
  const router = useRouter()

  const slug = router.query?.site

  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    !slug && dispatch(ac.getBookingTree(slug))
    !user.listPatient && dispatch(ac.ListPatientRequest())
  }, [dispatch, hos?.bookingTree, user.listPatient, slug])

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
