export interface Data {
  title: JSX.Element | string
  subtitle?: JSX.Element | string
  icon: JSX.Element
}

export interface PaymentMedthodIF {
  dispatch: any
  onSelectedPaymentFee?: any
  hospital: {
    paymentFee: any
    selectedPaymentFee: any
    listPayment: any[]
  }
}
