import DemoSagas from '@componentStore/demo/demo.saga'
import hospitalSagas from '@componentStore/hospital/hospital.saga'
import newsSagas from '@componentStore/news/news.saga'
import totalDataSagas from '@componentStore/totalData/totalData.saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([DemoSagas(), totalDataSagas(), hospitalSagas(), newsSagas()])
}
