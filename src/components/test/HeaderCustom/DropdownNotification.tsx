import React from 'react';
import { Menu } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import style from "./styles.module.less"

const DropdownNotification = () => {
    return (
        <div className={style.dropdownNotification}>
            <div className={style.header_dropdown}>
                <span><b>Danh sách thông báo</b></span>
            </div>
            <div className="mdbdropdownItem">
                <Menu>
                    <Menu.Item className={style.notification}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi ipsam culpa modi eaque, est autem libero pariatur fuga hic quis vel voluptatem ut incidunt dicta eius, vero ipsa inventore.</p>
                        <p><ClockCircleOutlined /> 1 tuần trước</p>
                    </Menu.Item>
                    <Menu.Item className={style.btnNotifi}>
                        <Link href="/">
                            Xem tất cả
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>    
        </div>
    )
}

export default DropdownNotification
