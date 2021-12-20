import newsSagas from '@componentStore/news/saga'
import hospitalSagas from '@src/store/componentStore/hospital/saga'
import totalDataSagas from '@src/store/componentStore/totalData/saga'
import userSagas from '@src/store/componentStore/user/saga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([
    fork(userSagas),
    fork(totalDataSagas),
    fork(hospitalSagas),
    fork(newsSagas)
    // fork(DemoSagas)
  ])
}
