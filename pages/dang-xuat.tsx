import Loading from '@componentsTest/Loading'
import { AppState } from '@store/interface'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ac from '@src/store/actionStore'

const Logout = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state: AppState) => state.user)

  useEffect(() => {
    dispatch(ac.userLogout())

    router.push(user.loginAt)
  }, [dispatch, router])

  return (
    <>
      <Loading text={'Tiến trình đang được thực hiện ...'} />
    </>
  )
}

export default Logout
