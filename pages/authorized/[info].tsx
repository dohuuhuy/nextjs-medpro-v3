import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// const querystring = require('querystring')
const DefaultLayout = dynamic(() => import('@templates/Default'))

export interface Props {
  path?: string
  token?: string
}

const Author = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  })

  return null
}

Author.Layout = DefaultLayout
export default Author
