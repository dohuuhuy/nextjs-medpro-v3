import { HYDRATE } from 'next-redux-wrapper'
import { UserActions, UserState, UserTypes } from '@src/store/interface'

const init: UserState = {
  userInfo: {
    fullName: '',
    userName: '',
    email: '',
    token: '',
    isCS: false
  },
  listPatient: [],
  selectedPatient: {},
  bookingByUser: [],
  noti: [],
  loginAt: '/',
  billInfo: ''
}

export default function user(
  state = init,
  action: UserActions | { type: typeof HYDRATE; payload: UserState }
): UserState {
  switch (action.type) {
    case UserTypes.Bill.BILL_INFO_REQUEST_SUCCESS: {
      return { ...state, billInfo: action.billInfo }
    }
    case UserTypes.Login.login_At: {
      return { ...state, loginAt: action.loginAt }
    }
    case UserTypes.User.USER_SAVE:
      return { ...state, userInfo: { ...action.userInfo } }

    case UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS:
      return { ...state, listPatient: action.listPatient }

    case UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST_SUCCESS:
      return { ...state, bookingByUser: action.bookingByUser }

    case UserTypes.Noti.LIST_NOTI_REQUEST_SUCCESS:
      return { ...state, noti: action.noti }

    case UserTypes.User.USER_RESET:
      return { ...init, userInfo: {} }

    case UserTypes.Patient.SELECTED_PATIENT:
      return { ...init, selectedPatient: action.selectedPatient}

    default:
      return state
  }
}
