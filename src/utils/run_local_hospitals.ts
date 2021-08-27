export const findPartnerId = ({ listPartners, host }: any) => {
  const domain = host.slice(0, host.indexOf(':'))
  const res: any = listPartners.find((i: any) => i.domain.includes(domain))

  if (!res) return 'medpro'
  return res?.partnerId
}
