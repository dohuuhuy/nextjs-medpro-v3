export interface PropsHeader{
    dataHeader: Array<Item> | any;
    Authencartion: Array<Info> | any;
}

export interface Info {
    isAuthen: boolean,
    nameUser?: string
}

export interface Item {
    logoHeader: string;
    logoMobile: string;
    menu: Array<ItemMenu>;
    menuMobile: Array<ItemMenuMobile>;
    listSupport: Array<ItemDrawer>;
    support: Array<ItemSupport>;
}

export interface ItemMenu {
    id?: string;
    key: string;
    link: string;
    url?: string;
    name: string;
    content: string;
    sortOrder: number;
    icon: string;
    active: boolean;
}

export interface ItemMenuMobile {
    id?: string;
    key: string;
    link: string;
    url?: string;
    label: string;
    group?: string;
    sortOrder: number;
    icon: string;
}

export interface ItemSupport {
    textSuport: string;
    icon: string;
    phone: string;
}

export interface ItemDrawer {
    funcGroup: Array<ItemButton>;
    guideGroup: Array<ItemButton>;
    supportGroup: Array<ItemButton>;
}

export interface ItemButton{
    icon: string;
    label: string;
    link: string;
}