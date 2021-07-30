import Container from '@componentsTest/Container'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const authorized = () => {
  return 'helo'
}

authorized.Layout = DefaultLayout
export default authorized
