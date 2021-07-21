import React from 'react';
import { Layout } from 'antd';
import style from "./styles.module.less";
import { PropsContent } from './content.interface';

const {Content} = Layout;

const CustomContent = ({ dataContent }: PropsContent) => {
    
    const { key, content }: any = dataContent;

    return (
        <Content className={style.viewContent}>
            <div className={style.formContent}>
                <div key={key} className={style.viewItemContent} dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Content>
    )
}

export default CustomContent
