import { Component } from 'react'
import { translate } from 'react-i18next'
import { setPaymentsState } from 'src/components/Payments/action'
import { connect } from 'react-redux'

@translate('payments')
@connect(state => ({
  payments: state.payments,
  currency: state.profile.user.currency
}), {setPaymentsState})

/**
 * Payment form used by payment popup.
 */
export default class PaymentForm extends Component {
  static defaultProps = {
    maxLength: 8
  }

  changeAmount = (event) => {
    if (event.target.value.length > this.props.maxLength) {
      event.target.value = event.target.value.slice(0, this.props.maxLength)
    }
    this.props.setPaymentsState({amount: Number(event.target.value)})
  }

  applyPreset = (event) => {
    this.props.setPaymentsState({amount: Number(event.target.innerText)})
  }

  render () {
    const {amount} = this.props.payments
    const {currency} = this.props

    const paymentWrapperClass = 'payment__pay__first'
    const viewMode = this.props.payments.coupon ? 'with-profit' : 'default'
    const paymentWrapperMods = `${paymentWrapperClass}--${viewMode} `

    return (
      <div className={`${paymentWrapperClass} ${paymentWrapperMods}`}>
        <Total label={this.props.t('WILL_GET')} amount={amount} coupon={this.props.payments.coupon} viewMode={viewMode} />
        <Input label={this.props.t('WILL_PAY')} amount={amount} currency={currency} onChange={this.changeAmount} />
        <Presets label={this.props.t('SELECT_AMOUNT')} currency={currency} onClick={this.applyPreset} />
      </div>
    )
  }
}

/**
 * Input section with text field and etc.
 * @param label
 * @param amount
 * @param currency
 * @param onChange
 * @returns {*}
 * @constructor
 */
const Input = ({label, amount, currency, onChange}) => (
  <div>
    <label htmlFor='paysum'>{label}</label>
    <CurrencyLabel currency={currency} />
    <input className='payment__pay__inp' id='paysum' type='number' max={99999} value={amount} onChange={onChange} />
  </div>
)

/**
 * Total section.
 * @param label
 * @param amount
 * @param bonus
 * @param viewMode
 * @returns {*}
 * @constructor
 */
const Total = ({label, amount, coupon, viewMode}) => {
  const total = amount + (coupon ? amount * coupon.profit / 100 : 0)
  return (
    <div className={`payment__pay__res ${viewMode}`} id='payment__pay__res'>
      <div>
        {label} <span>{coupon && <span>+{coupon.profit}%</span>}</span>
      </div>
      <div id='paymentPayResVal'>{total}</div>
    </div>
  )
}

/**
 * Currency label in amount text field.
 */
class CurrencyLabel extends Component {
  static defaultProps = {
    signs: {
      'USD': '$',
      'RUB': 'Р',
      'EUR': '€'
    }
  }

  render = () => (
    <div className='pay__pop__pay__valuta'>
      <label>{this.props.signs[this.props.currency]}</label>
    </div>
  )
}

/**
 * List of amount presets for user currency.
 * How it looks: `Select amount: 300 500 1000 3000 5000`
 */
class Presets extends Component {
  static defaultProps = {
    presets: {
      'RUB': [300, 500, 1000, 3000, 5000],
      'USD': [5, 10, 20, 50, 100],
      'EUR': [5, 10, 20, 50, 100]
    }
  }

  render = () => (
    <div className='payment__pay__fast'>
      <span>{this.props.label}</span>
      <div className='payment__pay__fast__its'>
        {
          this.props.presets[this.props.currency].map(
            (value, index) => <div key={index} onClick={this.props.onClick}>{value}</div>
          )
        }
      </div>
    </div>
  )
}
