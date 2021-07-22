export interface PropsBannerContact {
    dataBannerContact: Array<ItemBanner> | any;
}

export interface ItemBanner {
    title?: string;
    subTitle?: string;
    imageBackground?: string;
    cardContact: Array<ItemCard>;
}

export interface ItemCard {
    id?:string;
    key:string;
    title?: string;
    subtiltle?: string;
    img?: Array<images>;
    link?: string;
    textBottom: string;
    icon?: boolean;
}

export interface images{
    url: string
}