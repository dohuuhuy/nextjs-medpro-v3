import { Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import Container from './../../../Container'
import { FooterSign } from '../../molecules/FooterSign'
import styles from './styles.module.less'

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
    <Container className={styles.containerGroudCard}>
      <Row>
        <ul className={styles.groudCard}>
          {dataCardIntro?.map(
            ({ title, subTitle, imgCard, link }: CardIntroItem) => (
              <li key={title}>
                <div className={styles.card}>
                  <figure className={styles.view}>
                    <img src={imgCard} alt={title} />
                  </figure>
                  <div className={styles.cardBody}>
                    <h4 className={styles.title}>
                      <Link href={link}>
                        <a>{title} </a>
                      </Link>
                    </h4>
                    <p className={styles.subTitle}>{subTitle}</p>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </Row>
      <FooterSign />
    </Container>
  )
}
