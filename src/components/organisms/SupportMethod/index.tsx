import { SupportMedthodCustom } from '@componentsTest/SupportMethod'
import { Information } from '@store/interface'
import React from 'react'

const SupportMedthod = (info: Information) => {
  return <SupportMedthodCustom dataSupportMethod={info.supportMethods} />
}

export default SupportMedthod
