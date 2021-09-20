import React from 'react'
import dynamic from 'next/dynamic'
import { Icon } from '@components/icon/Icon'

const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return (
    <>
      <Icon name={'plus'} />

      {/* <Icon name='cskh' /> */}
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
