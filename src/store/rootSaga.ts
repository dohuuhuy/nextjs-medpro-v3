import { all } from 'redux-saga/effects'
import { watchDemo } from './componentStore/demo/demo.saga'

export default function* rootSaga(): Generator {
  yield all([watchDemo])
}
