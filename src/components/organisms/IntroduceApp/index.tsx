// import { IntroduceCustom } from '@medpro/booking-libs'
import { IntroduceCustom } from '@componentsTest/IntroduceCustom'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const IntroduceLayout = () => {
  const Introduce = useSelector(
    (state: AppState) => state.hospitalReducer.information.introducHospital
  )
  return <IntroduceCustom dataIntroduce={Introduce} />
}

export default IntroduceLayout
