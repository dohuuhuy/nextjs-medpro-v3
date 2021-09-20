import React from 'react'
import dynamic from 'next/dynamic'
import { Icon } from '@components/Icon/Icon'

const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return (
    <>
      <Icon name={'plus'} size='80' />

      <br />
      <br />
    </>
  )
}

HomePage.Layout = HomeLayout
export default HomePage
