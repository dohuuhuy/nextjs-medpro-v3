import React, { useState } from 'react';
import style from './styles.module.less';
import Link from 'next/link';
import { ItemMenu } from './header.interface';

interface Props{
    Menu: Array<ItemMenu>;
}

const MenuHeader = ({ Menu }: Props) => {
    const [itemMenu, setItemMenu] = useState(Menu);

    function setOnClickMenu(order:number){
        let arr = itemMenu.map((item) => {
            if (order === item.sortOrder) {
                item.active = true;
            }
            else{
                item.active = false;
            }
            return {...item};
        })
        setItemMenu(arr);
    }

    return (
        <ul className={style.navbar_nav}>
            {itemMenu.map((item) => (
                <li className={item.active ? style.active : style.nav_item} key={item.key} onClick={() =>  setOnClickMenu(item.sortOrder)}>
                    <Link href={item.link} >
                            {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MenuHeader
