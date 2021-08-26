import { UserLogout } from '@actionStore/rootAction'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const DangXuatPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(UserLogout())
    router.push('/')
  }, [])

  return null
}

export default DangXuatPage
