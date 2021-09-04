import dynamic from 'next/dynamic'
import { HomeCtl } from 'src/containers/home'
import * as ac from '@actionStore/rootAction'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
const HomeLayout = dynamic(() => import('@templates/Home'))
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))

const HomePage = (props: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.FeatureByPartnerRequest(props.partnerId))
  }, [])
  return <NewsAndEvent {...props.data} />
}

HomePage.Layout = HomeLayout
export default HomePage

export const getServerSideProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)

  return { props: { data } }
}
