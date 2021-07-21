import React from 'react';
import style from "./styles.module.less";
import { Layout } from "antd";
import { PropsBanner } from './banner.interface';


const {Content} = Layout;

const Banner = ({ dataBanner } : PropsBanner) => {

    const { title, subTitle, imageBackground }: any = dataBanner;

    return (
        <Content className={style.viewBanner} 
                 style={{
                     minHeight: title ? 250 : undefined,
                     backgroundImage: imageBackground ? 'url("'+ imageBackground +'")' : undefined
        }}>
            {title ? (
                <h1 className={style.title}>
                    <span className={style.textTitle}> 
                        {title} 
                    </span>
                </h1>
            ) : undefined
            }
            {subTitle ? (
                <b className={style.subTitle} dangerouslySetInnerHTML={{ __html: subTitle }} />
            ) : undefined}
        </Content>
    )
}

export default Banner
