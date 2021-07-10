import { demoAction } from './demo.types'
import { demoActionTypes } from '@store/interface'

import { HYDRATE } from 'next-redux-wrapper'
import { DemoState } from './demo.interface'

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
