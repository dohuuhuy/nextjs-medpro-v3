import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const LienHePage = () => {
  return null
}

LienHePage.Layout = DefaultLayout
export default LienHePage
