import { Client } from 'medpro-sdk'
import { currentEnv } from './envs/env'

export const client = new Client({
  apiRoot: currentEnv.API_BE,
  platform: 'pc'
})
