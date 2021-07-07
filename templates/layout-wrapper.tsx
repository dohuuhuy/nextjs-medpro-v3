import React from 'react'
import DefaultLayout from './Default/default'
import HomeLayout from './Home/home'

const layouts: any = {
  default: DefaultLayout,
  home: HomeLayout,
}

const LayoutWrapper = (props: any) => {
  const Layout: any = layouts[props.children.type.layout]

  if (Layout !== null) {
    return <Layout {...props}>{props.children}</Layout>
  }

  return (
    <>
      <DefaultLayout {...props}>{props.children}</DefaultLayout>
    </>
  )
}

export default LayoutWrapper
