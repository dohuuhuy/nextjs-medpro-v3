import api from 'store/api'

export const ChiTietBaiViet = async (ctx: any) => {
  const DetailsPost = ctx.query.DetailsPost

  const detailNews = await getDetailNews(DetailsPost)
  const sameNews = await getSameNews()
  const listNewsBanner = await getListNewsBanner()

  return {
    detailNews,
    sameNews,
    listNewsBanner
  }
}

export const getDetail = async () => {
  try {
    const url = `https://cms.medpro.com.vn/posts`
    const rs = await api(url)
    return rs.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const getDetailNews = async (slug: any) => {
  try {
    const url = `https://cms.medpro.com.vn/posts?slug=${slug}`
    const rs = await api(url)
    return rs.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const getSameNews = async () => {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&categories.slug=tin-tuc&_limit=5`
    const rs = await api(url)
    return rs.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const getListNewsBanner = async () => {
  try {
    const url = `https://cms.medpro.com.vn/posts?_sort=updated_at:DESC&_limit=3`
    const rs = await api(url)
    return rs.data
  } catch (error) {
    console.error(error)
    return null
  }
}
