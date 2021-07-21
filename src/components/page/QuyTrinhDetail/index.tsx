import Produce from '@components/organisms/Produce'
import Container from '@components/test/Container'
import React from 'react'

const QuyTrinhDetail = () => {
  return (
    <Container>
      <p
        style={{
          color: 'red',
          marginTop: '2rem',
          textAlign: 'center'
        }}
      >
        <Produce />
      </p>
    </Container>
  )
}

export default QuyTrinhDetail
