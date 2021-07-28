import { find } from 'lodash'

export interface GetPartnerId {
  listPartners: any
  partnerId?: string
  local?: boolean
}

export const handlerDoamain = () => {
  let domain = window.location.hostname.toLowerCase()
  domain = domain.replace('-beta', '')
  domain = domain.replace('www.', '')
  return domain
}

export const findPartnerId = ({
  partnerId,
  listPartners,
  local
}: GetPartnerId) => {
  if (local) {
    const isPartnerId: any = find(listPartners, { partnerId })

    if (!isPartnerId) {
      return null
    }

    const isDomain: any = listPartners.find((i: any) =>
      i.domain.includes('localhost')
    )

    if (isDomain) {
      listPartners.pop()
    }

    const localhost = {
      domain: ['localhost', '192.168.1.85'],
      partnerId
    }
    listPartners.push(localhost)
  }

  const res: any = listPartners.find((i: any) =>
    i.domain.includes(handlerDoamain())
  )
  if (!res) return null
  return res?.partnerId
}
