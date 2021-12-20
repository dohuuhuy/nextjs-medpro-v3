import { demoAction, demoActionTypes, DemoState } from '@src/store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const DemoInitialState: DemoState = {
  bookingCurrent: 'primary'
}

export default function DemoReducer(
  state = DemoInitialState,
  action: demoAction | { type: typeof HYDRATE; payload: DemoState }
) {
  switch (action.type) {
    case demoActionTypes.DEMO_SUCCESS:
      return { ...state, bookingCurrent: action.bookingCurrent }

    case demoActionTypes.DELETE_COLOR:
      if (state.bookingCurrent === 'primary') {
        alert('đã xóa rồi')
      }
      return { ...DemoInitialState }

    default:
      return state
  }
}
