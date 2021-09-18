import { Icon } from '@componentsTest/Icon'
import React from 'react'
import dynamic from 'next/dynamic'

const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return (
    <>
      <Icon name='cskh' />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

HomePage.Layout = HomeLayout
export default HomePage
