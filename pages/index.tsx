import Demo from '@components/demo'
import '@tntran496/ts-ant-demo/libs/index.css'
import { ExampleComponent } from '@tntran496/ts-ant-demo'
import React from 'react'
import HomeLayout from 'templates/home'

const HomePage = () => {
  return (
    <>
      <ExampleComponent text="@tntran496/ts-ant-demo" />
      <Demo />
    </>
  )
}

HomePage.Layout = HomeLayout
export default HomePage
