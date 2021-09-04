import { client } from '@config/medproSDK'

export const SelectHospitalCtl = async (_ctx: any) => {
  const listHospital = await getListHospital()

  return {
    listHospital
  }
}

const getListHospital = async () => {
  try {
    const res: any = await client.getHospitalListByAppId({
      appid: 'medpro'
    })
    return res.data
  } catch (error) {
    console.error(error)
    return null
  }
}
