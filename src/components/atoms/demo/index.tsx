/* eslint-disable react-hooks/rules-of-hooks */
import { random } from 'lodash'
import React, { useState } from 'react'

export const DemoHuyi = () => {
  const [num, setnum] = useState(1)

  const onclick = () => {
    setnum(random(1, 10))
  }

  return (
    <div>
      <button onClick={onclick}>{num}</button>
      <img src={banner('medpro')} alt='' />
    </div>
  )
}

const banner = (e: string) => {
  return `https://resource-testing.medpro.com.vn/static/images/${e}/web/banner_desktop.png`
}
