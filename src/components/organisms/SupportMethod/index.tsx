// import { SupportMedthodCustom } from '@medpro/booking-libs'
import { SupportMedthodCustom } from '@componentsTest/SupportMethod'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const SupportMedthod = () => {
  const supportMethods = useSelector(
    (state: AppState) => state.hospitalReducer.information.supportMethods
  )

  return <SupportMedthodCustom dataSupportMethod={supportMethods} />
}

export default SupportMedthod
