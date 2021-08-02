/* eslint-disable no-console */
import { saveInfoUserLogin } from '@actionStore/rootAction'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import queryString from 'querystring'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import nookies from 'nookies'
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
    dispatch(saveInfoUserLogin(query))
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

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     const { params } = ctx
//     const query = queryString.parse(params?.info as string)
//     await store.dispatch(saveInfoUserLogin(query))

//     store.dispatch(END)
//     await (store as SagaStore).sagaTask?.toPromise()

//     const user = store.getState().userReducer

//     const cookies = nookies.get(ctx)
//     return {
//       props: {
//         path: cookies.path ? cookies.path : '/'
//       }
//     }
//   }
// )
