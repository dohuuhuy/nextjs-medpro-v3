import { getData } from '@store/api'
import { JSON_EXP } from 'json mẫu/bvtest'

export const indexContainer = async (ctx: any) => {
  const host = ctx.ctx?.req?.headers.host

  const listPartners = await getListPartners()

  const partnerId = findPartnerId({ listPartners, host })

  return {
    partnerId,
    infoHospital: JSON_EXP
  }
}

export const getListPartners = async () => {
  const url =
    'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
  const rs = await getData(url)

  return rs
}

export const findPartnerId = ({ listPartners, host }: any) => {
  const domain = host?.slice(0, host.indexOf(':'))
  const res: any = listPartners.find((i: any) => i.domain.includes(domain))
  if (!res) return 'medpro'
  return res?.partnerId
}
