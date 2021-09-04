import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ThacMacPage = () => {
  return null
}

ThacMacPage.Layout = DefaultLayout
export default ThacMacPage
