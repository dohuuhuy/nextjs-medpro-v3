import { LoadingOutlined } from '@ant-design/icons'
import { DetailNewsCustom } from '@componentsTest/DetailNews'
import { check } from '@utils/checkValue'
import { Spin } from 'antd'
import dynamic from 'next/dynamic'
import React from 'react'
import { ChiTietBaiViet } from 'src/containers/News/newsDetails'

const DefaultLayout = dynamic(() => import('@templates/Default'))
const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin={true} />

const DetailsPostPage = ({ data }: any) => {
  React.useEffect(() => {
    window.localStorage.removeItem('postTitle')
    window.localStorage.setItem('postTitle', data.detailNews[0].title)
  })

  if (check(data)) {
    return <Spin indicator={antIcon} />
  }

  return <DetailNewsCustom {...data} />
}

DetailsPostPage.Layout = DefaultLayout
export default DetailsPostPage

DetailsPostPage.getInitialProps = async (ctx: any) => {
  const data = await ChiTietBaiViet(ctx)

  return { data }
}

// export const getStaticProps = async (ctx: any) => {
//   const data = await ChiTietBaiViet(ctx)
//   return {
//     props: { data },
//     revalidate: 1
//   }
// }
// export const getStaticPaths = async () => {
//   const data = await getDetail()

//   const paths = data.map((v: any) => ({
//     params: { DetailsPost: v.slug }
//   }))

//   return {
//     paths: paths,
//     fallback: true
//   }
// }
