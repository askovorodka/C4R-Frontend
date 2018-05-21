/* global FormData, location */
import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { api } from '../../../lib/api'
import { setPaymentsState, setPopupState } from 'components/Payments/action'
import { connect } from 'react-redux'

@translate('payments')
@connect(state => ({
  currency: state.profile.user.currency
}), {setPayments: setPaymentsState, setPopupState})
export default class PaySkinsButton extends Component {
  startPayment = () => {
    api.addBalance(null, 0, this.props.currency, null, 'skins4real')
  }

  render = () => (
    <button className='btn btn--pink' onClick={this.startPayment}>
      {this.props.t('PAY_WITH_SKINS')}
    </button>
  )
}
