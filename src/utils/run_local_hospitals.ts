export interface run_local_hospital {
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

export const run_local_hospital = ({
  partnerId,
  listPartners,
  local,
}: run_local_hospital) => {
  if (local) {
    const localhost = {
      domain: ['localhost', '192.168.1.10'],
      partnerId,
    }
    listPartners.push(localhost)
  }

  const res: any = listPartners.find((i: any) =>
    i.domain.includes(handlerDoamain()),
  )

  return res?.partnerId
}

export const check_list_partners = () => {
  const list_partners = window.localStorage.getItem('list_partners')

  if (list_partners !== null) {
    return JSON.parse(list_partners)
  } else {
    window.location.reload()
  }
}
