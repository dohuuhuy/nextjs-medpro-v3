import { Icon } from '@componentsTest/Icon'
import HomeLayout from '@templates/Home'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Icon name='thongbao' />
      <Icon name="cskh" />
      <br />
      <br />
    </>
  )
}

HomePage.Layout = HomeLayout
export default HomePage
