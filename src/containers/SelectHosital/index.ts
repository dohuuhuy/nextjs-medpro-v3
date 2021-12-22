import { client } from '@config/medproSDK'
import { urlJson } from '@src/utils/contants'
import { fetcher } from '@src/utils/func'

export const SelectHospitalCtl = async () => {
  const listHospital = await getListHospital()
  const deployHospital = await fetcher(urlJson.urldeployHospital)
  console.log('listHospital :>> ', listHospital)
  return {
    listHospital,
    deployHospital
  }
}

export async function timeout<T>(ms: any, promise: any): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'))
    }, ms)
    resolve(await promise)
  })
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
