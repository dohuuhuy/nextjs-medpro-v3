import { BookingInformation } from '@componentsTest/BookingInformation'
import { AppState } from '@store/interface'
import { find } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const BookingInformationPage = () => {
  const router = useRouter()
  const { partnerId } = router.query
  const listHospital = useSelector(
    (state: AppState) => state.hospitalReducer.listHospital
  )

  const findHospital = find(listHospital, { partnerId })

  return <BookingInformation info={findHospital} />
}

export default BookingInformationPage
