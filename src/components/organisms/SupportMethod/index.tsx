import { SupportMedthodCustom } from '@n17dccn172/booking-libs'
import React from 'react'
import { useSelector } from 'react-redux'

const SupportMedthod = () => {
  const supportMethods = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.supportMethods
  )

  return <SupportMedthodCustom dataSupportMethod={supportMethods} />
}

export default SupportMedthod
