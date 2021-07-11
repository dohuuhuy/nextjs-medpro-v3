import DemoSagas from '@componentStore/demo/demo.saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
  yield all([DemoSagas()])
}
