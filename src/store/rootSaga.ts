import hospitalSagas from '@componentStore/hospital/saga'
import totalDataSagas from '@componentStore/totalData/saga'
import userSagas from '@componentStore/user/saga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([fork(totalDataSagas), fork(hospitalSagas), fork(userSagas)])
}
