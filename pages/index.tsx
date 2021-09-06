import dynamic from 'next/dynamic'
import { HomeCtl } from 'src/containers/home'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppState } from 'store/interface'
import * as ac from '@actionStore/rootAction'
import { check } from '@utils/checkValue'
const HomeLayout = dynamic(() => import('@templates/Home'))
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))

const HomePage = (props: any) => {
  const dispatch = useDispatch()
  const listFeature = useSelector(
    (state: AppState) => state.hospitalReducer.listFeature
  )
  const listPatient = useSelector(
    (state: AppState) => state.userReducer.listPatient
  )

  const partnerId = useSelector(
    (state: AppState) => state.totalDataReducer.partnerId
  )

  useEffect(() => {
    check(listFeature) && dispatch(ac.FeatureByPartnerRequest(partnerId))
    check(listPatient) && dispatch(ac.ListPatientRequest())
  }, [])
  return <NewsAndEvent {...props.data} />
}

HomePage.Layout = HomeLayout
export default HomePage

export const getServerSideProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)

  return { props: { data } }
}
