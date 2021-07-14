import { list_partners, list_partners_item } from '@store/interface'

export interface run_local_hospital {
  partnerId: string
  listPartners: list_partners
}

export const handlerDoamain = () => {
  let domain = window.location.hostname.toLowerCase()
  domain = domain.replace('-beta', '')
  domain = domain.replace('www.', '')
  return domain
}

export const run_local_hospital = ({
  partnerId,
  listPartners,
}: run_local_hospital) => {
  const localhost = {
    domain: ['localhost', '192.168.1.10'],
    partnerId,
  }

  listPartners.push(localhost)

  const res: list_partners_item | undefined = listPartners.find((i) =>
    i.domain.includes(handlerDoamain()),
  )

  return res?.partnerId
}
