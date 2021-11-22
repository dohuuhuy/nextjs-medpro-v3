import { currentEnv } from '@config/envs/env'

export const LIMIT_PAGE_NEWS = 8

export const URL_ADDRESS = currentEnv.API_BE + '/city-mongo/get-all-by-partner'

export const urlAddress = (type: any, id: any) => {
  let url

  switch (type) {
    case 'city':
      url = URL_ADDRESS + '?country_code=' + id
      break

    case 'district':
      url = URL_ADDRESS + '?city_id=' + id
      break

    case 'ward':
      url = URL_ADDRESS + '?district_id=' + id
      break
  }

  return url
}

export const urlHeader = 'https://api.npoint.io/b87961f233a5c5dd146d'

export const urlFooter = 'https://api.npoint.io/77d2f064ddeb78de6961'

export const urlContent = 'https://api.npoint.io/5faf3ddf0d50e90896f8'

export const urlBanners = 'https://api.npoint.io/f437f4eb6cceccf1c59a'

export const urlListPartners = 'https://api.npoint.io/e4a272b45693136cded7'
