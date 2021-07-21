import React from 'react';
import style from "./styles.module.less";
import { Layout } from "antd";
import { PropsBannerContact } from './bannercontact.interface';
import CardContact from './CardContact';


const {Content} = Layout;

const BannerContact = ({ dataBannerContact } : PropsBannerContact) => {

    const { title, subTitle, imageBackground, cardContact }: any = dataBannerContact;

    return (
        <Content className={style.viewBanner} 
                 style={{ backgroundImage: imageBackground ? 'url("'+ imageBackground +'")' : undefined }}>
            {title ? (
                <h1 className={style.title}>
                    <span className={style.textTitle}> 
                        {title} 
                    </span>
                </h1>
            ) : null
            }

            {subTitle ? (
                <b className={style.subTitle} dangerouslySetInnerHTML={{ __html: subTitle }} />
            ) : null
            }
            
            {cardContact ? (
                <div className={style.viewOptions}>
                    <CardContact cardContact={cardContact} />
                </div>
            ) : null}
        </Content>
    )
}

export default BannerContact
