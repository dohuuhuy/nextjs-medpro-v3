import { currentEnv } from '@src/config/envs'

export const news = {
  LIMIT_PAGE: 8
}

const api = 'https://api.npoint.io/'

export const urlJson = {
  urlHeader: `${api}b87961f233a5c5dd146d`,
  urlFooter: `${api}77d2f064ddeb78de6961`,
  urlContent: `${api}5faf3ddf0d50e90896f8` + 'bugi',
  urlBanners: `${api}f437f4eb6cceccf1c59a`,
  urlListPartners: `${api}e4a272b45693136cded7`,
  urlSEOPage: `${api}245979853aae833092e1`
}

export const urlApi = {
  urlGuide: `${currentEnv.BO_API}/quy-trinh/get-by-partner`,
  urlAddress: `${currentEnv.API_BE}/city-mongo/get-all-by-partner`
}
