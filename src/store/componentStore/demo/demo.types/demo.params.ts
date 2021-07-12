// Kiểm soát tham số trong hàm thực hiện hành động ---------------------------------------------------------------
export type demoParams = getDemo_Params | deleteDemo_Params

export interface getDemo_Params {
  nameColor: string
}

export interface deleteDemo_Params {
  id: string
}
