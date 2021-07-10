import { all } from 'redux-saga/effects'
import DemoSagas from './componentStore/demo/demo.saga'

export default function* rootSaga(): Generator {
  console.log(`5`, 5)
  yield all([DemoSagas()])
}
