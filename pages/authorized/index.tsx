import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const DefaultLayout = dynamic(() => import('@templates/Default'))

interface Props {
  path: string
  token: string
}

const Author = ({ token }: Props) => {
  const router = useRouter()

  console.log('router :>> ', router)

  useEffect(() => {
    window.localStorage.setItem('jwt', token)
    // router.push(path)
  }, [])

  return 'helo'
}

Author.Layout = DefaultLayout
export default Author
