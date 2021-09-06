import * as ac from '@actionStore/rootAction'
import { Reserver, ThongTinDatKham } from '@componentsTest/ThongTinDatKham'
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

  const hospital = useSelector((state: AppState) => state.hospitalReducer)
  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const dispatch = useDispatch()
  useEffect(() => {
    check(hospital?.bookingTree) &&
      dispatch(ac.getBookingTree(router.query?.site))
    check(listPatient) && dispatch(ac.ListPatientRequest())
  }, [])

  const { partnerId } = router.query

  const findHospital = find(hospital?.listHospital, { partnerId })

  const methods: Reserver = {
    listPatient,
    bookingTree: hospital?.bookingTree,
    info: findHospital
  }

  return <ThongTinDatKham {...methods} />
}

ThongTinDatKhamPage.Layout = DefaultLayout
export default ThongTinDatKhamPage
