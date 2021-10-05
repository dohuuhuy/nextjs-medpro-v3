import * as ac from '@actionStore/rootAction'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeCtl } from 'src/containers/home'
import { AppState } from 'store/interface'
const HomeLayout = dynamic(() => import('@templates/Home'))
const NewsAndEvent = dynamic(() => import('@components/organisms/New&Event'))

const HomePage = ({ data }: any) => {
  const dispatch = useDispatch()
  const hos = useSelector((state: AppState) => state.hospital)
  const user = useSelector((state: AppState) => state.user)
  const total = useSelector((state: AppState) => state.total)

  useEffect(() => {
    check(hos?.listFeatureByApp) &&
      dispatch(
        ac.FeatureRequest({ partnerId: total?.partnerId, typeReser: 'normal' })
      )

    check(user?.listPatient) && dispatch(ac.ListPatientRequest())
  }, [])

  return <NewsAndEvent {...data} />
}

HomePage.Layout = HomeLayout
export default HomePage

HomePage.getInitialProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)
  return { data }
}
