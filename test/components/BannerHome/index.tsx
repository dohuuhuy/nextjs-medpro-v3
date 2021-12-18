import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import { BannerHomeIF } from './common/interface'
import styles from './styles.module.less'

export const BannerHome = ({
  getBanner,
  listFeature,
  partnerId
}: BannerHomeIF) => {
  const router = useRouter()

  const [state, setstate] = React.useState({
    list: listFeature,
    activeTab: 1,
    isMobile: false,
    limitfeature: true
  })

  React.useEffect(() => {
    const handleResize = () => {
      let missItem = 0
      const limitfeature = state?.limitfeature ? 5 : -1

      const width = window.innerWidth
      const widthMobile = width < 768
      const numColumn = Number(width < 768 ? 3 : 4)
      const compareNum = listFeature?.length > limitfeature

      const listSlice = compareNum
        ? listFeature?.slice(0, widthMobile ? limitfeature : -1)
        : listFeature
      const lengthItem = Number(listSlice?.length)

      const numXemthem = compareNum && widthMobile ? 1 : 0

      compareNum &&
        widthMobile &&
        listSlice.push({
          btn: true,
          name: state.limitfeature ? 'Xem thêm' : 'Thu gọn',
          image: require('./common/images/xemthem.svg'),
          toggle: state.limitfeature
        } as any)

      for (let i = 1; i <= 3; i++) {
        if ((lengthItem + i) % numColumn === 0) {
          missItem = i - numXemthem
        }
      }

      const missItemArr: any = [...Array(missItem).keys()]

      const y = listSlice?.concat(missItemArr)

      setstate((prev: any) => ({
        ...prev,
        list: y,
        isMobile: compareNum && widthMobile
      }))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [state.limitfeature])

  if (!getBanner) {
    return null
  }

  const SelectFeature = (item: any) => () => {
    if (item.btn) {
      setstate((prev) => ({
        ...prev,
        limitfeature: !prev.limitfeature
      }))
    }

    if (partnerId === 'medpro' && item.type === 'booking.date') {
      router.push('/benh-vien')
    }
  }

  return (
    <section className={styles.BannerHome}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: getBanner && `url(${getBanner})`
        }}
      />
      <Container className={styles.contentBannerHome}>
        <Row className={styles.rowboxService}>
          <Col span={24} className={styles.colTitle}>
            <h1 className={styles.title}>CHỌN DỊCH VỤ</h1>
          </Col>
          <Col span={24} className={styles.colBoxService}>
            <ul className={styles.listBoxService}>
              {state.list?.map((item, i) => {
                const imgError = require('./common/images/error.svg')

                const size = 45
                const propsImg = {
                  src: item.image || imgError,
                  width: size,
                  height: size,
                  onError: (e: any) => (e.target.src = imgError)
                }

                const checkItem =
                  Object.keys(item).length < 1 ? styles.nonHover : ''
                const onClick = SelectFeature(item)

                return (
                  <li key={i} onClick={onClick} className={checkItem}>
                    <div className={styles.card}>
                      {item.image && (
                        <figure>
                          <img {...propsImg} alt='' />
                        </figure>
                      )}
                      <p className={styles.name}>{item?.name}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
