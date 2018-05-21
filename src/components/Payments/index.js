import React, { Component } from 'react'
import {DefaultView, CouponView, MethodsView} from './Views'
import './styles/styles.scss'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { setPaymentsState, setPopupState } from 'src/components/Payments/action'

@translate('payments')
@connect(state => ({
  popup: state.payments.popup
}), {setPayments: setPaymentsState, setPopupState})
export default class PaymentPopup extends Component {
  close = () => {
    this.props.setPopupState({visible: false, message: null})
  }

  handleKeyDown = (event) => {
    const ESCAPE_KEY = 27
    if (event.keyCode === ESCAPE_KEY) {
      this.props.setPopupState({visible: false, message: null})
    }
  }

  render = () => {
    if (!this.props.popup.visible) {
      return null
    }

    return (
      <div className='pay__pop'>
        <TopBar title={this.props.t('ADD_FUNDS')} closeCallback={this.close} />
        <Content viewMode={this.props.popup.viewMode} />
      </div>
    )
  }
}

/**
 * PaymentPopup content component with different view modes.
 */
class Content extends Component {
  resolveContent = (viewMode) => {
    switch (viewMode) {
      case 'default':
        return <DefaultView />
      case 'coupon':
        return <CouponView />
      case 'methods':
        return <MethodsView />
      default:
        return <DefaultView />
    }
  }

  render = () => (
    <div className='pay__pop__all'>
      {this.resolveContent(this.props.viewMode)}
    </div>
  )
}

/**
 * Popup top bar with close button and title.
 * @param title
 * @param closeCallback
 * @returns {*}
 * @constructor
 */
const TopBar = ({title, closeCallback}) => (
  <div className='pay__pop__zag'>
    <div className='pay__pop__zag__name'>{title}</div>
    <div className='pay__pop__zag__close' onClick={closeCallback}>×</div>
  </div>
)
