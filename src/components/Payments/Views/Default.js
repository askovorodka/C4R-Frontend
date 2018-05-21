import React, { Component } from 'react'
import { translate } from 'react-i18next'
import PaymentForm from 'src/components/Payments/PaymentForm'
import { CouponButton, PayButton, PaySkinsButton } from 'src/components/Payments/Buttons/index'
import { connect } from 'react-redux'
import { setPaymentsState } from 'src/components/Payments/action'

@translate('payments')
@connect(state => ({
  payments: state.payments,
  currency: state.profile.user.currency
}), {setPaymentsState})
export default class DefaultView extends Component {
  render () {
    const {coupon} = this.props.payments
    const {viewMode} = this.props.payments.popup
    const {currency} = this.props
    const {t} = this.props
    return (
      <div className='pay__pop__pay'>
        <PaymentForm {...this.props} />

        {coupon && <CouponInfo label={t('USED_COUPON')} coupon={coupon} />}

        <div className='br' />

        {viewMode === 'default' && <Buttons {...this.props} />}
        {viewMode === 'default' && currency === 'USD' && <G2AWarning />}
        {viewMode === 'default' && currency === 'RUB' && <PaymentImages label={t('METHODS_LIST')} />}
      </div>
    )
  }
}

const Buttons = (props) => (
  <div className='pay__pop__pay__btns'>
    <PayButton {...props} />
    <PaySkinsButton />
    {!props.payments.coupon && <CouponButton multistep />}
  </div>
)

const G2AWarning = () => (
  <div className='pay__pop__desc'>
    <div>
      <p>Payments made through G2A may be held for review or declined by their automated security system. There may be a delay of a few hours before your Cases4Real account is credited.</p>
      <p>Declined payments may take 7 or more business days before the funds are returned to you. Cases4Real has no control over this.</p>
    </div>
  </div>
)

const PaymentImages = ({label}) => (
  <div>
    <div className='pay__pop__label'>{label}</div>
    <div className='pay__pop__sys' />
  </div>
)

const CouponInfo = ({label, coupon}) => (
  <div className='pay__pop__pay__couponInfo'>
    {label} <span>{coupon.code}</span> (<span>+{coupon.profit}%</span>)
  </div>
)
