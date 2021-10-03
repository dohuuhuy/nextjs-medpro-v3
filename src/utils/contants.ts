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
