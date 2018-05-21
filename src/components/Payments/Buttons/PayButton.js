import React, { Component } from 'react'
import { translate } from 'react-i18next'
import '../styles/_btns.scss'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { setPaymentsState, setPopupState } from 'components/Payments/action'
import {api} from 'src/lib/api'

@translate('payments')
@connect(state => ({
  currency: state.profile.user.currency,
  viewMode: state.payments.popup.viewMode,
  visible: state.payments.popup.visible
}), {setPaymentsState, setPopupState})

export default class PayButton extends Component {
  static propTypes = {
    currency: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    viewMode: 'default',
    visible: false
  }

  selectMethods = () => {
    this.props.setPopupState({viewMode: 'methods', visible: true})
  }

  startG2APayment = () => {
    api.addBalance(null, this.props.amount, this.props.currency, null, 'g2a')
  }

  resolveAction = () => {
    switch (this.props.currency) {
      case 'RUB':
        return this.selectMethods()

      default:
        return this.startG2APayment()
    }
  }

  render = () => (
    <button className='btn btn--yellow' onClick={this.resolveAction}>
      {this.props.t('ADD_FUNDS')}
    </button>
  )
}
