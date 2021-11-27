import { uniqueId } from 'lodash'
import React from 'react'

const XYZ = ({ bantay, setbantay, children }: any) => {
  console.log('bantay :>> ', bantay)

  const [state, setstate] = React.useState({
    name: '',
    bantaycoppy: bantay
  })

  const handleName = (id: string) => () => {
    // setstate({
    //   name: `huyi ${uniqueId()}  ${id} `
    // })

    setbantay(uniqueId())
  }

  console.log('state :>> ', state)
  return (
    <>
      <p>hello {state.name}</p>
      <p>ban tay prop xyx {bantay} </p>

      <button onClick={handleName('2')}>thây đổi tên</button>

      {children}
    </>
  )
}

export default XYZ
