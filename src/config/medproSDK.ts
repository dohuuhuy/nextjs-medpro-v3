import { Client } from 'medpro-sdk'
import { currentEnv } from './envs'

export const client = new Client({
  apiRoot: currentEnv.API_BE,
  platform: 'pc',
  appid: 'medpro'
})
