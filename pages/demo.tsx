import { DemoHuyi } from '@src/components/atoms/demo'
import { random } from 'lodash'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const Demo = (_props: Props) => {
  return (
    <>
      <h1> truyền 1</h1>
      <h2> truyền 2</h2>
      <h3> truyền 3</h3>
      <h4> truyền 4</h4>
      <h5> truyền 5</h5>
      <h6> truyền 6</h6>
      <DemoHuyi />
    </>
  )
}

Demo.layout = DefaultLayout

export default Demo

interface Props {}
