import dynamic from 'next/dynamic'
import { HomeCtl } from 'src/containers/home'
import * as ac from 'store/actionStore/rootAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppState } from 'store/interface'
const HomeLayout = dynamic(() => import('@templates/Home'))
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))

const HomePage = (props: any) => {
  const dispatch = useDispatch()
  const listFeature = useSelector(
    (state: AppState) => state.hospitalReducer.listFeature
  )

  useEffect(() => {
    !listFeature && dispatch(ac.FeatureByPartnerRequest(props.partnerId))
  }, [])
  return <NewsAndEvent {...props.data} />
}

HomePage.Layout = HomeLayout
export default HomePage

export const getServerSideProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)

  return { props: { data } }
}
