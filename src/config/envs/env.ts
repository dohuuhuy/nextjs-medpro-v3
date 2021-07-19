import includeEnvs from './includeEnvs'

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const ENV = process.env.ENV || 'development'
export const GET_ENV = includeEnvs[ENV]

export const _TESTING = ENV === 'testing'
export const _DEVELOPMENT = ENV === 'development'
export const _PRODUCTION = ENV === 'production'
