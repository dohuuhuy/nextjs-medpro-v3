import * as ac from '@actionStore/rootAction'
import Loading from '@components/atoms/Loading'
import { client } from '@config/medproSDK'
import { AppState } from '@store/interface'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const queryString = require('querystring')
export interface Props {
  path?: string
  token?: string
}

const Author = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { info } = router.query

  const user = useSelector((state: AppState) => state.user)
  const query: any = queryString.parse(info as string)

  useEffect(() => {
    !user.userInfo.token && dispatch(ac.UserLogin(query))

    client.setToken(query.token)
  }, [router.query.info])

  if (user.userInfo.token) router.push('/')

  return <Loading />
}

export default Author
