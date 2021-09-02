import hospitalSagas from '@componentStore/hospital/saga'
import newsSagas from '@componentStore/news/saga'
import totalDataSagas from '@componentStore/totalData/saga'
import userSagas from '@componentStore/user/saga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([
    fork(totalDataSagas),
    fork(hospitalSagas),
    fork(newsSagas),
    fork(userSagas)
  ])
}
