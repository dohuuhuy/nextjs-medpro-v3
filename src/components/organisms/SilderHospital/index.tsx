import { DeloyHospitalCustom } from '@components/test/SliderHospital'
import React from 'react'
import { useSelector } from 'react-redux'

const DeployHospital = () => {
  const deployHospital = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.deployHospital
  )

  return <DeloyHospitalCustom dataDeloyHospital={deployHospital} />
}

export default DeployHospital