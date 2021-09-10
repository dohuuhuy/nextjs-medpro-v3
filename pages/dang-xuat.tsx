import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as ac from 'store/actionStore/rootAction'

const Logout = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    router.push('/')
    dispatch(ac.UserLogout())
  }, [])

  return null
}

export default Logout
