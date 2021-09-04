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
  const rs = await apiGet(url)

  return rs
}

export const findPartnerId = ({ listPartners, host }: any) => {
  const domain = host?.slice(0, host.indexOf(':'))
  const res: any = listPartners?.find((i: any) => i.domain.includes(domain))
  if (!res) return 'medpro'
  return res?.partnerId
}

export const apiGet = async (url: any) => {
  const option: any = {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0
    }
  }
  return await fetch(url, option)
    .then((rs) => {
      return rs ? rs.json() : null
    })
    .catch(() => {
      return null
    })
}
