import { IntroduceCustom } from '@componentsTest/IntroduceCustom'
import { Information } from '@src/store/interface'
import React from 'react'

const IntroduceLayout = (info: Information) => {
  return <IntroduceCustom dataIntroduce={info.introducHospital} />
}

export default IntroduceLayout
