import XYZ from '@components/atoms/DemoDetail'
import DefaultLayout from '@templates/Default'
import React from 'react'

const Demo = (props: any) => {
  const [bantay, setbantay] = React.useState(4)

  const medthods = {
    bantay,
    setbantay
  }

  return (
    <DefaultLayout>
      <p>cha {bantay}</p>
      <XYZ {...medthods} />
      <h1> truyền cháu</h1>
    </DefaultLayout>
  )
}

export default Demo
