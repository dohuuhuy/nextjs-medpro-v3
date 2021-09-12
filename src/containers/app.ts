import { findPartnerId } from '@utils/run_local_hospitals'
import { JSON_EXP } from 'json mẫu/bvtest'

export const appCtrl = async (ctx: any) => {
  const host = ctx.ctx?.req?.headers.host

  const listPartners = await getListPartners()

  const partnerId = findPartnerId({ listPartners, host })

  return {
    partnerId,
    introducHospital: JSON_EXP
  }
}

export const getListPartners = async () => {
  const url =
    'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
  const rs = await fetch(url)

  return await rs.json()
}
