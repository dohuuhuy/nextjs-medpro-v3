import * as ac from '@actionStore/rootAction'
import { SagaStore } from '@store/rootStore'

interface Pts {
  store: SagaStore
  ctx: any
}

export const indexContainer = async ({ store, ctx }: Pts) => {
  const host = ctx?.req?.headers.host

  await store.dispatch(ac.getHospitalDetails(host))

  const x = await store.getState()
  console.log('x :>> ', x)
}
