import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { setPopupState } from 'src/components/Payments/action'
import { connect } from 'react-redux'

@translate('payments')
@connect(state => ({
  popup: state.payments.popup
}), {setPopupState})
export default class CouponButton extends Component {
  handleCouponClick = () => {
    this.props.setPopupState({viewMode: 'coupon', title: this.props.t('COUPON_ACTIVATION')})
  }

  render = () => (
    <button className='btn btn--gray btn--coupon' onClick={this.handleCouponClick}>
      {this.props.t('USE_CODE')}
    </button>
  )
}
