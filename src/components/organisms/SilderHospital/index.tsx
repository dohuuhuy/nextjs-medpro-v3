import { DeloyHospitalCustom } from '@componentsTest/SliderHospital'
import { Information } from '@src/store/interface'
import React from 'react'

const DeployHospital = (info: Information) => {
  return <DeloyHospitalCustom dataDeloyHospital={info.deployHospital} />
}

export default DeployHospital
