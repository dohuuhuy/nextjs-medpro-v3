import { BannerHome } from '@componentsTest/BannerHome'
// import Loading from '@componentsTest/Loading'
import { NewsEventCustom } from '@componentsTest/News&Events'
import { AppState } from '@store/interface'
import HomeLayout from '@templates/Home'
import { banner } from '@utils/func'
import React from 'react'
import { useSelector } from 'react-redux'
import { HomeCtl } from 'src/containers/home'

const HomePage = ({ data }: any) => {
  const hos = useSelector((state: AppState) => state.hospital)
  const total = useSelector((state: AppState) => state.total)

  // if (total.loading) return <Loading />

  return (
    <>
      {/* banner lấy từ client */}
      <BannerHome
        getBanner={banner(total?.partnerId)}
        listFeature={hos?.listFeatureByApp}
        partnerId={total?.partnerId}
      />
      {/* tin tức lấy từ server */}
      {data?.newsAndEvent && (
        <NewsEventCustom dataNewsAndEvent={data?.newsAndEvent} />
      )}
    </>
  )
}

HomePage.layout = HomeLayout

export default HomePage

export const getServerSideProps = async (ctx: any) => {
  const data = await HomeCtl(ctx)
  return { props: { data } }
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     await store.dispatch(getNewsAndEvent())

//     store.dispatch(END)

//     await (store as SagaStore)?.sagaTask?.toPromise()

//     const state = store.getState()

//     console.log('state :>> ', state)

//     return { props: { custom: 'custom' } }
//   }
// )
