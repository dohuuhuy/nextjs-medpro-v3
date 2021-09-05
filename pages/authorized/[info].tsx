import * as ac from '@actionStore/rootAction'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  const token = useSelector(
    (state: AppState) => state.userReducer.userInfo.token
  )

  useEffect(() => {
    if (check(token)) {
      dispatch(ac.UserLogin(query))
      window.localStorage.setItem('jwt', JSON.stringify(query))
      router.push('/')
    }
  })

  return null
}

Author.Layout = DefaultLayout
export default Author

// chổ nào cần phải xử lý lại, tại sao lại save rồi mà persist chưa lưu lại
// cách phía trên là tạm thời
