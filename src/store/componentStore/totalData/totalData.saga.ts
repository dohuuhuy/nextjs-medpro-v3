import {
  Hospital_Details_Action_Types,
  ListPartners_Action_Types,
  list_partners_item,
  partnerId_Local_Action_Types,
  totalData_Params,
  totalData_State,
} from '@store/interface'
import { openToast } from '@utils/Notification'
import { get_PartnerId, handlerDoamain } from '@utils/run_local_hospitals'
import axios, { AxiosResponse } from 'axios'
import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects'

const getData = async (url: any) => {
  const res = await axios.get(url)
  const { data } = res
  return data
}

const is_localhost = (listPartners: any) => {
  const res: any = listPartners.find((i: any) =>
    i.domain.includes(handlerDoamain()),
  )
  if (!res) return true
  if (res.domain === 'localhost' || res.domain.includes('testing')) {
    return true
  }
  return false
}

function* set_partnerId_local({ partnerId }: totalData_Params.partnerLocal) {
  const totalData_Reducer: totalData_State = yield select(
    (state) => state.totalData_Reducer,
  )

  const { list_partners } = totalData_Reducer

  const runObject: get_PartnerId = {
    listPartners: list_partners,
    partnerId,
    local: true,
  }

  const getPartnerId = get_PartnerId(runObject)

  if (getPartnerId) {
    yield put({ type: Hospital_Details_Action_Types.Hospital_CLEAR_DETAILS })

    yield put({
      type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS,
      partnerId: getPartnerId,
    })
  } else {
    openToast({
      message: 'Không tìm thấy partnerId của bệnh viên, vui lòng thử lại !',
      type: 'error',
      duration: 3,
    })
  }
}

function* watch_partnerId_local() {
  yield takeLatest(
    partnerId_Local_Action_Types.partnerId_Local_REQUEST as any,
    set_partnerId_local,
  )
}

function* get_list_partners() {
  try {
    // const url_list_partner =
    //   'https://medpro-api-v3-testing.medpro.com.vn/st/listPartner.json'
    const url =
      'https://resource-testing.medpro.com.vn/static/list-partner/listPartner.json'
    const listPartners: AxiosResponse<Array<list_partners_item>> = yield call(
      getData,
      url,
    )

    yield put({
      type: ListPartners_Action_Types.ListPartners_REQUEST_SUCCESS,
      list_partners: listPartners,
    })

    if (is_localhost(listPartners)) {
      yield put({
        type: ListPartners_Action_Types.CHECK_LOCALHOST,
      })
    } else {
      const getPartnerId = get_PartnerId({ listPartners })
      if (getPartnerId) {
        yield put({
          type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS,
          partnerId: getPartnerId,
        })
      } else {
        yield put({
          type: ListPartners_Action_Types.ListPartners_ERROR,
        })

        openToast({
          message:
            'Không tìm thấy partnerId của bệnh viên, vui lòng thông báo cho chúng tôi khi thấy sự cố này !',
          type: 'error',
          duration: 1000,
        })

        yield put({
          type: Hospital_Details_Action_Types.Hospital_CLEAR_DETAILS,
        })
      }
    }
  } catch (error) {
    // yield put({
    //   type: ListPartners_Action_Types.ListPartners_ERROR,
    // })
  }
}

function* watch_list_partners() {
  yield takeLatest(
    ListPartners_Action_Types.ListPartners_REQUEST as any,
    get_list_partners,
  )
}

const totalData_Sagas = function* root() {
  yield all([fork(watch_list_partners), fork(watch_partnerId_local)])
}
export default totalData_Sagas
