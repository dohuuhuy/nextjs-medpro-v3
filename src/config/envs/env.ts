import includeEnvs from './includeEnvs'

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const ENV = process.env.ENV || 'development'
export const GET_ENV = includeEnvs[ENV]
