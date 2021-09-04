import SelectHospitalPage from '@components/pages/SelectHospitalPage'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SelectHospitalCtl } from 'src/containers/SelectHosital'
import * as ac from '@actionStore/rootAction'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = (props: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ac.getListCity())
    dispatch(ac.getListHospital())
  }, [])

  return <SelectHospitalPage {...props.data} />
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage

export const getServerSideProps = async (ctx: any) => {
  const data = await SelectHospitalCtl(ctx)

  return { props: { data } }
}
