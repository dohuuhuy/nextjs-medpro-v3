import hospitalSagas from 'store/componentStore/hospital/saga'
import totalDataSagas from 'store/componentStore/totalData/saga'
import userSagas from 'store/componentStore/user/saga'
import { all, fork, take } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/lib/constants'

export default function* rootSaga(): Generator {
  console.log('Waiting for rehydration')
  yield take(REHYDRATE) // Wait for rehydrate to prevent sagas from running with empty store
  console.log('Rehydrated')
  yield all([fork(userSagas), fork(totalDataSagas), fork(hospitalSagas)])
}
