export interface PropsProduce {
    dataProduce?: Array<Item> | any;
}

export interface Item {
    key: string;
    link: string;
    url: string;
    name: string;
    sortOrder: number;
    icon: string;
    content: Array<ItemProduce>;
}

export interface ItemProduce {
    id: string;
    stepName: string;
    name: string;
    content: string;
    sortOrder: number;
}