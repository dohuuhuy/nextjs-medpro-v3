import React from 'react'
import { ItemBanner, ItemCard } from './bannercontact.interface'
import styles from './styles.module.less'

const CardContact = ({ cardContact }: ItemBanner) => {
  return (
    <ul className={styles.listContact}>
      {cardContact.map(
        ({ key, title, subTitle, link, img, textBottom }: ItemCard) => {
          return (
            <li key={key}>
              <div className={styles.card}>
                <h2>{title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: subTitle
                  }}
                />

                <figure>
                  {img?.map(({ url }) => {
                    const imageErrorSrc = '/images/error.svg'
                    const urlImage = url || imageErrorSrc

                    const onError = (e: any) => {
                      e.target.src = imageErrorSrc
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
            </li>
          )
        }
      )}
    </ul>
  )
}

export default CardContact
