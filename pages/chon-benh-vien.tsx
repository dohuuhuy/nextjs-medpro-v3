import SelectHospitalPage from '@components/pages/SelectHospitalPage'
import dynamic from 'next/dynamic'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const ChonBenhVienPage = () => {
  return <SelectHospitalPage />
}

ChonBenhVienPage.Layout = DefaultLayout
export default ChonBenhVienPage
