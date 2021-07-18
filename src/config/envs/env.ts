import includeEnvs from './includeEnvs'

export const ENV = process.env.ENV || 'development'
export const GET_ENV = includeEnvs[ENV]
