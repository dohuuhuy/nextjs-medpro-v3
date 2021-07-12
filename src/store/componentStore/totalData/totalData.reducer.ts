import { HYDRATE } from 'next-redux-wrapper'
import { demoAction } from './totalData.types/totalData.action.interface'

const DemoInitialState: any = {
  nameColor: 'primary',
}

export default function DemoReducer(
  state = DemoInitialState,
  action: demoAction | { type: typeof HYDRATE; payload: any },
) {
  switch (action.type) {
    default:
      return state
  }
}
