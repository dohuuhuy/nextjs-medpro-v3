import { demoAction, demoActionTypes, DemoState } from '@store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const DemoInitialState: DemoState = {
  nameColor: 'primary',
}

export default function DemoReducer(
  state = DemoInitialState,
  action: demoAction | { type: typeof HYDRATE; payload: DemoState },
) {
  switch (action.type) {
    case demoActionTypes.DEMO_SUCCESS:
      return { ...state, nameColor: action.nameColor }

    case demoActionTypes.DELETE_COLOR:
      if (state.nameColor === 'primary') {
        alert('đã xóa rồi')
      }
      return { ...DemoInitialState }

    default:
      return state
  }
}
