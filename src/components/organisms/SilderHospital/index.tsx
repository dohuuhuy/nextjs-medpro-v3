import { DeloyHospitalCustom } from '@n17dccn172/booking-libs'
import React from 'react'
import { useSelector } from 'react-redux'

const DeployHospital = () => {
  const deployHospital = useSelector(
    (state: any) => state.hospital_Reducer.information.deployHospital
  )

  return <DeloyHospitalCustom dataDeloyHospital={deployHospital} />
}

export default DeployHospital
