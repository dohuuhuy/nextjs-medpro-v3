/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Button, Dropdown, Badge } from "antd";
import style from './styles.module.less';
import {
    MobileFilled,
    UserOutlined,
    LoginOutlined,
    BellOutlined
} from '@ant-design/icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DropdownProfile from './DropdownProfile';
import { Info } from './header.interface';
import DropdownNotification from './DropdownNotification';

interface Props {
    Authencartion: Array<Info> | any;
}

const GroupButton = ({ Authencartion }: Props) => {
    const [bell, setBell] = useState(false);
    const { isAuthen, nameUser }: any = Authencartion;
    const notification = { totalNew: 1 }

    return (
        <ul className={style.list_btn_group}>
            {isAuthen ? (
                <li>
                    <Dropdown overlay={<DropdownNotification />} trigger={['click']} placement="bottomCenter">
                        {notification.totalNew ? (
                            <Badge count={notification.totalNew} showZero size="small" className={style.bell}>
                                <a className={bell ? style.activeBell : "ant-dropdown-link"} onClick={() => setBell(!bell)}>
                                    <BellOutlined style={{ fontSize: '20px', color: '#08c' }} />
                                </a>
                            </Badge>
                            ) : (
                            <Badge showZero size="small" className={style.bell}>
                                <a className={bell ? style.activeBell : "ant-dropdown-link"} onClick={() => setBell(!bell)}>
                                    <BellOutlined style={{ fontSize: '20px', color: '#08c' }} />
                                </a>
                            </Badge>
                        )}
                    </Dropdown>
                </li>
                ) : null
            }
            <li>
                <Button href="/" 
                        className={style.downloadApp} 
                        type="default" 
                        size="large"
                        icon={<MobileFilled className={style.icons} />} >
                    Tải ứng dụng
                </Button>
            </li>
            {isAuthen ? (
                    <li>
                        <Dropdown overlay={<DropdownProfile nameUser={nameUser} />} trigger={['click']} placement="bottomRight">
                            <Button href="/" 
                                    className={style.after_login} 
                                    type="default"
                                    size="large"
                                    icon={<UserOutlined className={style.icons} />}>
                                    {nameUser}
                            </Button>
                        </Dropdown>
                    </li>
                ) : (
                    <li>
                        <Button href="/" 
                                className={style.login} 
                                type="default"
                                size="large"
                                icon={<LoginOutlined className={style.icons} />}>
                            Đăng nhập
                        </Button>
                    </li>
                )
            }
        </ul>
    )
}

export default GroupButton
