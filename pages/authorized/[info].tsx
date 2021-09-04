import * as ac from '@actionStore/rootAction'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
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
    router.push('/')
  })

  return null
}

Author.Layout = DefaultLayout
export default Author
