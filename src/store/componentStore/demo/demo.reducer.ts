import { demoAction } from './demo.types/demo.action.interface'
import { HYDRATE } from 'next-redux-wrapper'
import { DemoState } from './demo.types/demo.interface'
import { demoActionTypes } from './demo.types/demo.action.types'

const DemoInitialState: DemoState = {
  nameColor: '',
}

export default function DemoReducer(
  state = DemoInitialState,
  action: demoAction | { type: typeof HYDRATE; payload: DemoState },
) {
  switch (action.type) {
    case demoActionTypes.DEMO_SUCCESS:
      return { ...state, nameColor: action.nameColor }

    default:
      return state
  }
}
