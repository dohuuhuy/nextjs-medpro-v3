import SelectHospitalPage from '@components/pages/SelectHospitalPage'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import * as ac from '@actionStore/rootAction'
import { AppState } from '@store/interface'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = (props: any) => {
  const dispatch = useDispatch()
  const listHospital = useSelector(
    (state: AppState) => state.hospitalReducer.listHospital
  )
  const listCity = useSelector(
    (state: AppState) => state.totalDataReducer.listCity
  )

  useEffect(() => {
    !listCity && dispatch(ac.getListCity())
    !listHospital && dispatch(ac.getListHospital())
  }, [])

  return <SelectHospitalPage {...props.data} />
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage

export const getServerSideProps = async (ctx: any) => {
  const data = await SelectHospitalCtl(ctx)

  return { props: { data } }
}
