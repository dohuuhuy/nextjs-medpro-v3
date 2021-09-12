import { Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import Container from '../../../Container'
import { FooterSign } from '../../molecules/FooterSign'
import styles from './styles.module.less'
import cx from 'classnames'
import Image from 'next/image'
export interface CardIntro {
  dataCardIntro: CardIntroItem[]
}
export interface CardIntroItem {
  title: string
  subTitle: string
  imgCard: string
  link: string
  button: any
}

export const CardIntro = ({ dataCardIntro }: CardIntro) => {
  return (
    <Container className={cx(styles.containerGroudCard)}>
      <Row>
        <ul className={styles.groudCard}>
          {dataCardIntro?.map(
            ({ title, subTitle, imgCard, link }: CardIntroItem) => {
              return (
                <li key={title}>
                  <div className={styles.card}>
                    <figure className={styles.view}>
                      <Image
                        src={imgCard}
                        alt={title}
                        width={340}
                        height={225}
                        objectFit='cover'
                        layout='responsive'
                      />
                    </figure>
                    <div className={styles.cardBody}>
                      <h4 className={styles.title}>
                        <Link href={link || '#'}>
                          <a>{title} </a>
                        </Link>
                      </h4>
                      <p className={styles.subTitle}>{subTitle}</p>
                    </div>
                  </div>
                </li>
              )
            }
          )}
        </ul>
      </Row>
      <FooterSign />
    </Container>
  )
}
