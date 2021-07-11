import { DemoState } from '@componentStore/demo/demo.types/demo.interface'

export * from '@componentStore/demo/demo.types/demo.action.interface'

export type AppState = {
  DemoReducer: DemoState
}
