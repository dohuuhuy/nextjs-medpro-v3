import { client } from '@config/medproSDK'
import { urlJson } from '@src/utils/contants'
import { fetcher } from '@src/utils/func'

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
    const res: any = await client.getHospitalListByAppId()
    return res.data
  } catch (error) {
    console.error(error)
    return null
  }
}
