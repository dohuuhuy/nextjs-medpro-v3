export interface PropsContent {
    dataContent: Array<ItemContent> | any;
}

export interface ItemContent {
    id: string;
    key: string;
    content: string;
}