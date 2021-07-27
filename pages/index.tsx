import { getNewsAndEvent } from '@actionStore/rootAction'
import { AppState } from '@store/interface'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const HomeLayout = dynamic(() => import('@templates/Home'))

const HomePage = () => {
  const dispatch = useDispatch()

  const newsAndEvent = useSelector(
    (state: AppState) => state.news_Reducer.newsAndEvent
  )

  useEffect(() => {
    if (newsAndEvent.length < 1) {
      dispatch(getNewsAndEvent())
    }
  })

  return null
}

HomePage.Layout = HomeLayout
export default HomePage
