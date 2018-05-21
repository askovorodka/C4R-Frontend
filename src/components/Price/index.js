import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {  getPreferredLanguageCurrency } from '/lib/i18n'
import { CurrencySymbol } from '../CurrencySymbol'
import './index.scss'

@connect(state => ({
  currentCurrency: state.profile.user.currency,
  currentLanguage: state.i18n.currentLanguage
}), {})
export class Price extends Component {
  static propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
    customClass: PropTypes.string,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        currency: PropTypes.string.isRequired,
        undiscounted_amount: PropTypes.number
      })
    )
  }

  shouldComponentUpdate () {
    return true
  }

  render () {
    let amount, currency
    const { prices } = this.props
    const currentCurrency = this.props.currentCurrency || getPreferredLanguageCurrency(this.props.currentLanguage)
    if (prices) {
      // price array
      prices.forEach(item => item.currency === currentCurrency ? { amount, currency } = item : null)
    } else {
      // price object
      amount = this.props.amount
      currency = this.props.currency
    }

    return (
      <div className={this.props.customClass + ' price'}>
        <span className='price__number'>{amount}</span>
        {currency && <CurrencySymbol currency={currency} />}
      </div>
    )
  }
}
