import dynamic from 'next/dynamic'
import { HomeCtl } from 'src/containers/home'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppState } from 'store/interface'
import * as ac from '@actionStore/rootAction'
import { check } from '@utils/checkValue'
const HomeLayout = dynamic(() => import('@templates/Home'))
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))

const HomePage = ({ data }: any) => {
  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospitalReducer)
  const user = useSelector((state: AppState) => state.userReducer)
  const total = useSelector((state: AppState) => state.totalDataReducer)

  useEffect(() => {
    check(hos?.listFeatureByApp) &&
      dispatch(
        ac.FeatureRequest({ partnerId: total?.partnerId, typeReser: 'normal' })
      )

    user.userInfo.token &&
      check(user?.listPatient) &&
      dispatch(ac.ListPatientRequest())
  }, [])
  return <NewsAndEvent {...data} />
}

HomePage.Layout = HomeLayout
export default HomePage

export const getServerSideProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)

  return { props: { data } }
}
