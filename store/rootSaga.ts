import { all, fork } from 'redux-saga/effects'
import hospitalSagas from 'store/componentStore/hospital/saga'
import totalDataSagas from 'store/componentStore/totalData/saga'
import userSagas from 'store/componentStore/user/saga'

export default function* rootSaga(): Generator {
  yield all([fork(userSagas), fork(totalDataSagas), fork(hospitalSagas)])
}
