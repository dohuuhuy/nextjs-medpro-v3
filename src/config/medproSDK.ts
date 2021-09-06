import { Client } from 'medpro-sdk'
import { currentEnv } from './envs/env'

export const client = new Client({
  apiRoot: currentEnv.RESTFULL_API_URL,
  platform: 'pc'
})
