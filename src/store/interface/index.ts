import { DemoState } from '@componentStore/demo/demo.types/demo.interface'

export * from '@componentStore/demo/demo.types/demo.action.interface'

export * from '@componentStore/totalData/totalData.types/totalData.action'

export type AppState = {
  DemoReducer: DemoState
}
