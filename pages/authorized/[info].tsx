// import * as ac from '@actionStore/rootAction'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

const DefaultLayout = dynamic(() => import('@templates/Default'))
const queryString = require('querystring')
export interface Props {
  path?: string
  token?: string
}

const Author = () => {
  const router = useRouter()
  // const dispatch = useDispatch()

  const { info } = router.query
  const query: any = queryString.parse(info as string)

  useEffect(() => {
    window.localStorage.setItem('jwt', JSON.stringify(query))
    nookies.set(query, 'user', JSON.stringify(query), { path: '/' })
    const cookies = nookies.get(query)
    console.log('cookies.path :>> ', cookies.path)
    router.push('/')
    // dispatch(ac.UserLogin(query))
  })

  return null
}

Author.Layout = DefaultLayout
export default Author

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     const { params } = ctx
//     const query = queryString.parse(params?.info as string)
//     await store.dispatch(ac.UserLogin(query))

//     store.dispatch(END)
//     await (store as SagaStore).sagaTask?.toPromise()

//     return {
//       props: {}
//     }
//   }
// )
