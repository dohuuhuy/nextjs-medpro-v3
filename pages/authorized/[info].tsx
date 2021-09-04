import * as ac from 'store/actionStore/rootAction'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const DefaultLayout = dynamic(() => import('@templates/Default'))
const queryString = require('querystring')
export interface Props {
  path?: string
  token?: string
}

const Author = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { info } = router.query
  const query: any = queryString.parse(info as string)

  useEffect(() => {
    dispatch(ac.UserLogin(query))
    window.localStorage.setItem('jwt', query?.token)
    nookies.set(query, 'user', JSON.stringify(query), { path: '/' })
    const cookies = nookies.get(query)
    console.log('cookies.path :>> ', cookies.path)
    router.push('/')
  })

  return null
}

Author.Layout = DefaultLayout
export default Author
