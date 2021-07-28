// import { DeloyHospitalCustom } from '@n17dccn172/booking-libs'

import { DeloyHospitalCustom } from '@componentsTest/SliderHospital'
import { AppState } from '@store/interface'
import React from 'react'
import { useSelector } from 'react-redux'

const DeployHospital = () => {
  const deployHospital = useSelector(
    (state: AppState) => state.hospitalReducer.information.deployHospital
  )

  return <DeloyHospitalCustom dataDeloyHospital={deployHospital} />
}

export default DeployHospital
