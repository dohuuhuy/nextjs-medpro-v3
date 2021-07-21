import { IntroduceCustom } from '@components/test/Introduce'
import React from 'react'
import { useSelector } from 'react-redux'

const IntroduceLayout = () => {
  const Introduce = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.introducHospital
  )

  return <IntroduceCustom dataIntroduce={Introduce} />
}

export default IntroduceLayout
