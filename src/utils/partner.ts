export interface Props {
  listPartners: any
  host: string
}

const localhost = {
  domain: ['localhost', 'huyi.ddns.net', '192.168.1.10', 'news.medpro.com.vn'],
  partnerId: 'medpro'
}

export const findPartnerId = ({ listPartners = [], host }: Props) => {
  listPartners.push(localhost)
  const _domain = domain(host)
  const res: any = listPartners?.find((i: any) => i.domain.includes(_domain))

  if (Object.keys(res).length < 1) return 'medpro'
  if (!res) return 'medpro'
  return res?.partnerId
}

const domain = (host: string) => {
  let domain = host.toLowerCase()
  domain = domain.replace('-beta', '')
  domain = domain.replace('www.', '')
  domain = domain.replace('medpro.vn', 'medpro.com.vn')
  return domain
}
