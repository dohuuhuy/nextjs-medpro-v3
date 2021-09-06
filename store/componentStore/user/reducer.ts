import { HYDRATE } from 'next-redux-wrapper'
import { UserActions, UserState, UserTypes } from 'store/interface'

const init: UserState = {
  userInfo: {
    fullName: '',
    userName: '',
    email: '',
    token: '',
    isCS: false
  },
  listPatient: [],
  bookingByUser: []
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

    case UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST_SUCCESS:
      return { ...state, bookingByUser: action.bookingByUser }

    case UserTypes.User.USER_RESET:
      return { ...init }

    default:
      return state
  }
}
