import dynamic from 'next/dynamic'
import React from 'react'
const ContactLayout = dynamic(() => import('./Contact'))
const DefaultLayout = dynamic(() => import('@templates/Default'))
const HomeLayout = dynamic(() => import('@templates/Home'))

const layouts: any = {
  default: DefaultLayout,
  home: HomeLayout,
  contact: ContactLayout
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
