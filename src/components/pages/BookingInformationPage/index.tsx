import { ThongTinDatKham } from '@componentsTest/ThongTinDatKham'
import { AppState } from 'store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BookingInformationPage = () => {
  const router = useRouter()
  const { partnerId } = router.query

  const { listHospital, bookingTree } = useSelector(
    (state: AppState) => state.hospitalReducer
  )

  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const findHospital = find(listHospital, { partnerId })

  const methods = {
    listPatient,
    bookingTree,
    info: findHospital
  }

  return <ThongTinDatKham {...methods} />
}

export default BookingInformationPage
