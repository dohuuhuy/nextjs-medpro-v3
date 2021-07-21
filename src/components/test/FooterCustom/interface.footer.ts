
export interface PropsFooter {
  dataFooter: Array<ItemFooter> | any;
}

export interface ItemFooter {
  logoFooter: string | undefined | null;
  infoContact: Array<ItemContact>;
  linkSupport: Array<ItemSupport>;
  logoChecked: Array<ItemChecked>;
}

export interface ItemContact {
  id?: string;
  label?: string;
  key: string;
  value: string;
}

export interface ItemSupport {
  id?: string
  label: string
  link: string
}

export interface ItemChecked {
  id?: string
  imgLogo: string
  link: string
}
