// Kiểm soát tham số trong hàm thực hiện hành động ---------------------------------------------------------------
export namespace demoParams {
  export interface GetDemoParams {
    bookingCurrent: string
  }

  export interface DeleteDemoParams {
    id: string
  }
}
