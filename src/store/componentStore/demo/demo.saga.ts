import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { demoActionTypes, getDemo_Params } from './demo.types'

export function* demoSaga({ nameColor }: getDemo_Params) {
  try {
    console.log(`nameColor`, nameColor)
    yield put({
      type: demoActionTypes.DEMO_SUCCESS,
      nameColor,
    })
  } catch (error) {}
}

export function* watchDemo() {
  yield takeEvery(demoActionTypes.GET_DEMO, demoSaga)
}

export default function* root() {
  yield all([fork(watchDemo)])
}
