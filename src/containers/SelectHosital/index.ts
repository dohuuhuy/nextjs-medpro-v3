import { client } from '@config/medproSDK'
import { urlJson } from '@src/utils/contants'
import { fetcher, timeout } from '@src/utils/func'

export const SelectHospitalCtl = async () => {
  const listHospital = await getListHospital()
  const deployHospital = await fetcher(urlJson.urldeployHospital)
  return {
    listHospital,
    deployHospital
  }
}

const getListHospital = async () => {
  try {
    const res: any = await timeout(3000, client.getHospitalListByAppId())
    return res.data
  } catch (error: any) {
    console.log('error getListHospital :>> ', error)
    const objErr = {
      error: true,
      status: error?.response?.status || '',
      statusText: error?.response?.statusText || ''
    }
    console.log('objErr :>> ', objErr)
    return objErr
  }
}
