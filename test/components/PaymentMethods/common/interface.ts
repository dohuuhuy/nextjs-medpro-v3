export interface Data {
  title: JSX.Element | string
  subtitle?: JSX.Element | string
  icon: JSX.Element
}

export interface PaymentMedthodIF {
  onSelectedPaymentFee: any
  hospital: {
    paymentFee: any
    selectedPaymentFee: any
    listPayment: any[]
  }
  onReserveBooking: any
  selectedPatient: any
  onRePayment: any
}
