import * as ac from '@actionStore/rootAction'
import { LoadingOutlined } from '@ant-design/icons'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import { Spin } from 'antd'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.less'

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
  const user = useSelector((state: AppState) => state.userReducer)

  useEffect(() => {
    if (check(user?.userInfo?.token)) {
      dispatch(ac.UserLogin(query))
      // window.localStorage.setItem('jwt', JSON.stringify(query))
      router.push('/')
    }
  })

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin={true} />

  return (
    <div className={styles.login}>
      <Spin indicator={antIcon} />
    </div>
  )
}

Author.Layout = DefaultLayout
export default Author

// chổ nào cần phải xử lý lại, tại sao lại save rồi mà persist chưa lưu lại
// cách phía trên là tạm thời
