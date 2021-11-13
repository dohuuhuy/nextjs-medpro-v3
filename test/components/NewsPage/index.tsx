import { Col, Pagination, Row } from 'antd'
import cx from 'classnames'
import { motion } from 'framer-motion'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../Container'
import styles from './styles.module.less'
export interface Props {
  listNewsBanner: any[]
  listNewsContent?: any[]
  totalPages?: number
}
export const API_CMS = 'https://cms.medpro.com.vn'

export const NewsPageCustom = (props: Props) => {
  const { listNewsBanner, listNewsContent, totalPages } = props

  const router = useRouter()

  const [curPage, setcurPage] = React.useState(1)

  const onChange = (pageNumber: any) => {
    setcurPage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    router.push(`?page=${pageNumber}`, undefined, { scroll: false })
  }

  return (
    <Container className={styles.ContainerNews}>
      <Row className={styles.rowHeader}>
        <Col xs={24} sm={24} md={12} xl={12} className={styles.colLeft}>
          <motion.ul
            initial='hidden'
            animate='visible'
            className={styles.listNews}
          >
            {listNewsBanner?.slice(0, 1)?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} />
            ))}
          </motion.ul>
        </Col>
        <Col xs={24} sm={24} md={12} xl={12} className={styles.colRight}>
          <motion.ul
            initial='hidden'
            animate='visible'
            className={styles.listNews}
          >
            {listNewsBanner?.slice(1, 3)?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} obsImg={true} />
            ))}
          </motion.ul>
        </Col>
      </Row>
      <Row className={styles.rowContent}>
        <Col xs={24} sm={24} xl={15} className={styles.colContent}>
          <motion.ul
            initial='hidden'
            animate='visible'
            className={styles.listNews}
          >
            {listNewsContent?.map((item: any, i: number) => (
              <CardCustom item={item} key={i} />
            ))}
          </motion.ul>
          <Pagination
            total={totalPages}
            defaultCurrent={1}
            onChange={onChange}
            pageSize={Math.ceil(Number(totalPages) / 8)}
            className={styles.Pagination}
            responsive={true}
            showSizeChanger={false}
            showQuickJumper={false}
            current={curPage}
          />
        </Col>
        <Col xs={24} sm={24} xl={9} />
      </Row>
    </Container>
  )
}

interface PropsCard {
  item: any[]
  obsImg?: boolean
}
const CardCustom = ({ item, obsImg = false }: PropsCard) => {
  const {
    image,
    slug,
    title,
    created_at: createdAt,
    description,
    author
  }: any = item
  const imgUrl = API_CMS + image?.[0].url
  return (
    <motion.li
      transition={{ stiffness: 900 }}
      className={styles.cardNews}
      key={title}
    >
      <figure className={cx(styles.cardView, obsImg ? styles.hidden : '')}>
        <Link href={`/tin-tuc/${slug}`}>
          <a>
            <Image
              src={imgUrl}
              width='600'
              height='300'
              layout='responsive'
              loading='eager'
              alt=''
            />
          </a>
        </Link>
      </figure>

      <div className={styles.cardBody}>
        <Link href={`/tin-tuc/${slug}`}>
          <a>
            <p className={styles.title}>{title}</p>
          </a>
        </Link>
        <p className={styles.time}>
          {moment(createdAt).format('DD/MM/YYYY, h:mm')}
        </p>
        {author && <p className={styles.author}>{author}</p>}
        <p className={styles.description}>{description}</p>
      </div>
    </motion.li>
  )
}

export const mUl = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const mLi = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
