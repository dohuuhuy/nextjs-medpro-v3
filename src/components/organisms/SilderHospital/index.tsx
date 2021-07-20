import { SupportMedthodCustom } from '@components/test/SupportMethod'
import React from 'react'
import { useSelector } from 'react-redux'

const DeployHospital = () => {
  const deployHospital = useSelector(
    (state: any) => state.hospital_Reducer.hospital_details.deployHospital
  )

  return <SupportMedthodCustom dataSupportMethod={deployHospital} />
}

export default DeployHospital
