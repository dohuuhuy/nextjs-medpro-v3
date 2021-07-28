import { getNewsAndEvent } from '@actionStore/rootAction'
import { AppState } from '@store/interface'
import { check } from '@utils/checkValue'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  const dispatch = useDispatch()

  const newsAndEvent = useSelector(
    (state: AppState) => state.newsReducer.newsAndEvent
  )

  useEffect(() => {
    if (check(newsAndEvent)) {
      dispatch(getNewsAndEvent())
    }
  })

  return null
}

// HomePage.getInitialProps = async ({ store }: any) => {
//   console.log('store :>> ', store)
//   return {}
// }

HomePage.Layout = HomeLayout

export default HomePage
