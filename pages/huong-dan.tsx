import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const HuongDanPage = () => {
  return null
}

HuongDanPage.Layout = DefaultLayout
export default HuongDanPage
