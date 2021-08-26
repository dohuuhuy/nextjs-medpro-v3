import hospitalSagas from '@componentStore/hospital/saga'
import newsSagas from '@componentStore/news/saga'
import totalDataSagas from '@componentStore/totalData/saga'
import userSagas from '@componentStore/user/saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([totalDataSagas(), hospitalSagas(), newsSagas(), userSagas()])
}
