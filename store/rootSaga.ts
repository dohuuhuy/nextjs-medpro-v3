import hospitalSagas from 'store/componentStore/hospital/saga'
import totalDataSagas from 'store/componentStore/totalData/saga'
import userSagas from 'store/componentStore/user/saga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([fork(totalDataSagas), fork(hospitalSagas), fork(userSagas)])
}
