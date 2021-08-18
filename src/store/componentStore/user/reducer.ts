import { HYDRATE } from 'next-redux-wrapper'
import { UserActions, UserState, UserTypes } from '@store/interface'

const init: UserState = {
  userInfo: {
    fullName: '',
    userName: '',
    email: '',
    token: '',
    isCS: false
  },
  listPatient: []
}

export default function userReducer(
  state = init,
  action: UserActions | { type: typeof HYDRATE; payload: UserState }
) {
  switch (action.type) {
    case UserTypes.User.USER_SAVE:
      return { ...state, userInfo: { ...action.userInfo } }
    case UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS:
      return { ...state, listPatient: action.listPatient }

    case UserTypes.User.USER_RESET:
      return { ...init }

    default:
      return state
  }
}
