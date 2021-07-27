// import { IntroduceCustom } from '@n17dccn172/booking-libs'
import { IntroduceCustom } from '@components/test/Introduce'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const IntroduceLayout = () => {
  const Introduce = useSelector(
    (state: AppState) => state.hospital_Reducer.information.introducHospital
  )

  return null
  return <IntroduceCustom dataIntroduce={Introduce} />
}

export default IntroduceLayout
