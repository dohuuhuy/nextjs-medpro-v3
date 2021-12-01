import dynamic from 'next/dynamic'
import React from 'react'

const DefaultLayout = dynamic(() => import('@templates/Default'))

const Demo = (_props: any) => {
  return (
    <DefaultLayout>
      <h1> truyền cháu</h1>
    </DefaultLayout>
  )
}

export default Demo
