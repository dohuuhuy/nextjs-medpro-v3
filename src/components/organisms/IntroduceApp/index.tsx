// import { IntroduceCustom } from '@n17dccn172/booking-libs'

import { IntroduceCustom } from '@componentsTest/Introduce'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const IntroduceLayout = () => {
  const Introduce = useSelector(
    (state: AppState) => state.hospital_Reducer.information.introducHospital
  )
  return <IntroduceCustom dataIntroduce={Introduce} />
}

export default IntroduceLayout
