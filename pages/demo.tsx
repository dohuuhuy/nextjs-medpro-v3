import { random } from 'lodash'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const Demo = (_props: Props) => {
  const [num, setnum] = useState(1)

  const onclick = () => {
    setnum(random(1, 10))
  }

  const banner = (e: string) => {
    return `https://resource-testing.medpro.com.vn/static/images/${e}/web/banner_desktop.png`
  }

  return (
    <>
      <img src={banner('medpro')} alt='' />
      <button onClick={onclick}>{num}</button>
      <h1> truyền 1</h1>
      <h2> truyền 2</h2>
      <h3> truyền 3</h3>
      <h4> truyền 4</h4>
      <h5> truyền 5</h5>
      <h6> truyền 6</h6>
    </>
  )
}

Demo.layout = DefaultLayout

export default Demo

interface Props {}
