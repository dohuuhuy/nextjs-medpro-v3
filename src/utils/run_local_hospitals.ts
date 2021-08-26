export const handlerDoamain = () => {
  let domain = window.location.hostname.toLowerCase()
  domain = domain.replace('-beta', '')
  domain = domain.replace('www.', '')
  return domain
}

export const findPartnerId = ({ listPartners }: any) => {
  const res: any = listPartners.find((i: any) =>
    i.domain.includes(handlerDoamain())
  )
  if (!res) {
    return 'medpro'
  }
  return res?.partnerId
}
