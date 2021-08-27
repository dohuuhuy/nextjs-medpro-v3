import * as ac from '@actionStore/rootAction'
import { UserLogin } from '@actionStore/rootAction'
import { SagaStore, wrapper } from '@store/rootStore'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import queryString from 'querystring'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
const DefaultLayout = dynamic(() => import('@templates/Default'))

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
    dispatch(UserLogin(query))
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { params } = ctx

    const host = ctx?.req?.headers.host
    await store.dispatch(ac.getHospitalDetails(host))
    const query = queryString.parse(params?.info as string)
    await store.dispatch(UserLogin(query))

    store.dispatch(END)
    await (store as SagaStore).sagaTask?.toPromise()

    // const user = store.getState().userReducer

    const cookies = nookies.get(ctx)
    return {
      props: {
        path: cookies.path ? cookies.path : '/'
      }
    }
  }
)
