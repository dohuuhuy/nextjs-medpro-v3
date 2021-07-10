import Container from '@components/atoms/Container'
import { GET_ENV } from '@config/envs/env'
import React from 'react'

const GioiThieuDetail = () => {
  return (
    <Container>
      <p
        style={{
          color: 'red',
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        GioiThieuDetail
      </p>
      <p>Lấy api từ môi trường: {GET_ENV.API_X}</p>
    </Container>
  )
}

export default GioiThieuDetail
