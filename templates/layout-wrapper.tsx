import React from 'react'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default/default'))
const HomeLayout = dynamic(() => import('@templates/Home/home'))

const layouts: any = {
  default: DefaultLayout,
  home: HomeLayout,
}

const LayoutWrapper = (props: any) => {
  const Layout: any = layouts[props.children.type.layout]

  const favicon: any = document.getElementById('favicon')
  favicon.href = `./favicon/${'115'}.png`

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
