import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { applyCoupon, setPopupState } from 'src/components/Payments/action'
import { connect } from 'react-redux'

@translate('payments')
@connect(state => ({
  popup: state.payments.popup
}), {setPopupState, applyCoupon})
export default class CouponView extends Component {
  constructor (props) {
    super(props)
    this.state = {message: null}
  }

  handleBackClick = () => {
    this.props.setPopupState({viewMode: 'default', title: this.props.t('ADD_FUNDS')})
  }

  handleApplyClick = () => {
    if (this.codeInput.value !== '') {
      this.props.applyCoupon(this.codeInput.value)
    }
  }

  render = () => (
    <div className='pay__pop__coupon'>
      <div className='pay__pop__coupon__message'>{this.props.popup.message}</div>

      <input className='pay__pop__pay__inp' type='text' id='payPopPayCoupon'
        placeholder={this.props.t('ENTER_COUPON_CODE')}
        ref={(input) => { this.codeInput = input }} />
      <button className='btn btn--gray pay__pop__coupon__backBtn' onClick={this.handleBackClick}>
        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.4 16.5'>
          <polygon points='17.4,7.4 3.8,7.4 9.8,1.4 8.4,0 0,8.4 8.1,16.5 9.5,15.1 3.8,9.4 17.4,9.4 ' />
        </svg>
      </button>
      <button className='btn btn--yellow' onClick={this.handleApplyClick}>{this.props.t('APPLY')}</button>
    </div>
  )
}
