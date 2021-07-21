export interface get_PartnerId {
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

export const get_PartnerId = ({
  partnerId,
  listPartners,
  local
}: get_PartnerId) => {
  if (local) {
    const is_partnerId: any = listPartners.find(
      (i: any) => i.partnerId === partnerId
    )

    // const is_partnerId: any = find(listPartners, partnerId)

    if (!is_partnerId) {
      return null
    }

    const is_domain: any = listPartners.find((i: any) =>
      i.domain.includes('localhost')
    )

    if (is_domain) {
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

export const check_list_partners = () => {
  const list_partners = window.localStorage.getItem('list_partners')

  if (list_partners !== null) {
    return JSON.parse(list_partners)
  } else {
    window.location.reload()
  }
}
