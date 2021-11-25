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
  bookingByUser: [],
  noti: [],
  loginAt: '/',
  billInfo: ''
}

export default function user(
  state = init,
  action: UserActions | { type: typeof HYDRATE; payload: UserState }
) {
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

    case UserTypes.Noti.LIST_NOTICE_BY_USER_REQUEST_SUCCESS:
      return { ...state, noti: action.noti }

    case UserTypes.User.USER_RESET:
      return { ...init, userInfo: {} }

    default:
      return state
  }
}
