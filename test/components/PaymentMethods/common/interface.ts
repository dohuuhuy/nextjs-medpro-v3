export interface Data {
  title: JSX.Element | string
  subtitle?: JSX.Element | string
  icon: JSX.Element
}

export interface PaymentMedthodIF {
  listPayment: any[]
  dispatch: any
  onSelectedPaymentFee?: any
  paymentFee: any
  selectedPaymentFee: any
}
