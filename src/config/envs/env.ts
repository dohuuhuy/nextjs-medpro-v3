import includeEnvs from './includeEnvs'

export const NODE_ENV = process.env.NODE_ENV || 'testing'
export const ENV: ENV = process.env.ENV || 'testing'
export const currentEnv = includeEnvs[ENV]

export const _TESTING = ENV === 'testing'
export const _DEVELOPMENT = ENV === 'development'
export const _PRODUCTION = ENV === 'production'

type ENV = 'development' | 'testing' | 'production'
