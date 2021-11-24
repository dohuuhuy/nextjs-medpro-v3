import Loading from '@componentsTest/Loading'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as ac from 'store/actionStore/rootAction'

const Logout = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    router.push('/')
    dispatch(ac.UserLogout())
  }, [dispatch, router])

  return (
    <>
      <Loading text={'Tiến trình đang được thực hiện ...'} />
    </>
  )
}

export default Logout
