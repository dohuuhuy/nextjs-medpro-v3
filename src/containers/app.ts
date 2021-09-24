import { findPartnerId } from '@utils/run_local_hospitals'
import { JSON_EXP } from 'json mẫu/bvtest'
import { api } from './../config/api/index'

export const appCtrl = async (ctx: any) => {
  const host = ctx.ctx?.req?.headers.host

  const listPartners = await getListPartners()

  const partnerId = findPartnerId({ listPartners, host })

  // const newsAndEvent = await getNewsAndEvent()

  return {
    partnerId,
    info: JSON_EXP
  }
}

export const getListPartners = async () => {
  const url =
    'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
  const rs = await api(url)

  return rs
}
