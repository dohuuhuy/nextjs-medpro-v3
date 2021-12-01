export interface Props {
  listPartners: any
  host: string
}

const localhost = {
  domain: [
    'localhost',
    'huyi.ddns.net',
    'huyi.tech',
    '42.116.14.170',
    'huyi.viewdns.net'
  ],
  partnerId: 'medpro'
}

export const findPartnerId = ({ listPartners = [], host }: Props) => {
  listPartners.push(localhost)
  const res: any = listPartners?.find((i: any) =>
    i.domain.includes(domain(host))
  )
  if (!res) return 'error partnerid không có trong list'
  return res?.partnerId
}

const domain = (host: string) => {
  let domain = host.toLowerCase()
  domain = domain.replace('-beta', '')
  domain = domain.replace('www.', '')
  domain = domain.replace('medpro.vn', 'medpro.com.vn')
  return domain
}
