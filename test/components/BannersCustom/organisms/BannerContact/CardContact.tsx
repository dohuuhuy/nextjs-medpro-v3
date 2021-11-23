/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'
import { ItemBanner, ItemCard } from './bannercontact.interface'
import styles from './styles.module.less'

export const CardContact = ({ cardContact }: ItemBanner) => {
  return (
    <motion.ul
      variants={mUl}
      initial='hidden'
      animate='visible'
      className={styles.listContact}
    >
      {cardContact.map(
        ({ key, title, subTitle, link, img, textBottom }: ItemCard) => {
          return (
            <motion.li key={key} variants={mLi}>
              <div className={styles.card}>
                <h2>{title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: subTitle
                  }}
                />

                <figure>
                  {img?.map(({ url }) => {
                    const imgError = require('./../../images/error.svg')
                    const urlImage = url || imgError

                    const onError = (e: any) => {
                      e.target.src = imgError
                    }
                    return (
                      <img
                        key={url}
                        src={urlImage}
                        alt={'icon'}
                        onError={onError}
                      />
                    )
                  })}
                </figure>
                <a
                  href={link}
                  dangerouslySetInnerHTML={{ __html: textBottom }}
                />
              </div>
            </motion.li>
          )
        }
      )}
    </motion.ul>
  )
}

export const mUl = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
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
