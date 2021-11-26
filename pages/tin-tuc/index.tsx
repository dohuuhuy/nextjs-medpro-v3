import Loading from '@componentsTest/Loading'
import { NewsPageCustom } from '@componentsTest/NewsPage'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { TinTucCtrl } from 'src/containers/News/news'
const DefaultLayout = dynamic(() => import('@templates/Default'))

const TinTucPage = ({ data }: any) => {
  const router = useRouter()
  const [loading, setloading] = React.useState(true)

  React.useEffect(() => {
    setloading(true)

    setTimeout(() => {
      setloading(false)
    }, 1000)

    !loading &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  }, [router])

  if (loading) return <Loading component />

  if (!data) return null
  return (
    <DefaultLayout>
      <NewsPageCustom {...data} />
    </DefaultLayout>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const data = await TinTucCtrl(ctx)

  return { props: { data } }
}

export default TinTucPage
