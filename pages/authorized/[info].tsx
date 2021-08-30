import * as ac from '@actionStore/rootAction'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect } from 'react'
import { END } from 'redux-saga'

const querystring = require('querystring')
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { params } = ctx

    const query = querystring.parse(params?.info as string)
    await store.dispatch(ac.UserLogin(query))

    store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()

    const cookies = nookies.get(ctx)
    return {
      props: {
        path: cookies.path ? cookies.path : '/'
      }
    }
  }
)
