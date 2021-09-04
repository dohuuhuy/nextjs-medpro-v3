import dynamic from 'next/dynamic'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  return null
}

HomePage.getInitialProps = async () => {
  return {}
}

HomePage.Layout = HomeLayout
export default HomePage
