import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import { BannerHomeIF } from './common/interface'
import styles from './styles.module.less'

export const BannerHome = (props: BannerHomeIF) => {
  const { getBanner, listFeature, partnerId } = props
  const router = useRouter()

  const [state, setstate] = React.useState({
    list: listFeature,
    activeTab: 1,
    isMobile: false,
    toggleShow: true
  })

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const widthMobile = width < 768

      let missItem = 0
      const limitShow = 5
      const numListFeature = listFeature?.length
      const showFeature = state?.toggleShow ? limitShow : numListFeature

      const compareNum = numListFeature > showFeature
      const endArr = widthMobile ? showFeature : numListFeature
      const listSlice = listFeature?.slice(0, endArr)

      const btnXemThem: any = [
        {
          btn: true,
          name: state.toggleShow ? 'Xem thêm' : 'Thu gọn',
          image: require('./common/images/xemthem.svg'),
          toggle: state.toggleShow
        }
      ]

      let list: any = []
      if (widthMobile) {
        if (compareNum) {
          list = listSlice.concat(btnXemThem)
        } else {
          list = listSlice.concat(btnXemThem)
        }
      } else {
        list = listSlice
      }

      const numColumn = widthMobile ? 3 : 4

      for (let i = 0; i <= 3; i++) {
        if ((list?.length + i) % numColumn === 0) {
          missItem = i
          break
        }
      }

      const arrMiss: any = [...Array(missItem).keys()]

      setstate((prev: any) => ({
        ...prev,
        list: list.concat(arrMiss),
        isMobile: compareNum && widthMobile
      }))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [state.toggleShow, props.listFeature])

  if (!getBanner) {
    return null
  }

  const SelectFeature = (item: any) => () => {
    if (item.btn) {
      setstate((prev) => ({
        ...prev,
        toggleShow: !prev.toggleShow
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
