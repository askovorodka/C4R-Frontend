import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { translate } from 'react-i18next'
import { setPaymentsState } from 'src/components/Payments/action'
import { connect } from 'react-redux'
import PaymentForm from 'src/components/Payments/PaymentForm'
import { api } from 'src/lib/api'

@translate('payments')
@withCookies
@connect(state => ({
  payments: state.payments
}), {setPaymentsState})
export default class MethodsView extends Component {
  static defaultProps = {
    methods: {
      'AC': {name: 'Банковской картой', type: 'AC', img: 'im-7.png'},
      'PC': {name: 'Яндекс.Деньги', type: 'PC', img: 'im-3.png'},
      'WM': {name: 'Webmoney', type: 'WM', img: 'im-4.png'},
      'QW': {name: 'QIWI', type: 'QW', img: 'im-1.png'},
      'SB': {name: 'Сбербанк', type: 'SB', img: 'im-99.png'},
      'AB': {name: 'Альфа-клик', type: 'AB', img: 'im-8.png'},
      'GP': {name: 'Все терминалы', type: 'GP', img: 'img-placeholder_1.png'},
      'PB': {name: 'Промсвязьбанк', type: 'PB', img: 'im-11.png'}
    }
  }

  changeTermsAccepted = (event) => {
    const checked = event.target.checked
    let expires = new Date()
    // Add one year.
    expires.setFullYear(expires.getFullYear() + 1)
    this.props.cookies.set('termsAccepted', checked, {path: '/', expires: expires})
    this.props.setPaymentsState({termsAccepted: checked})
  }

  startPayment = () => {
    api.addBalance(this.props.payments.method, this.props.payments.amount, 'RUB', null, 'yandex')
  }

  setActiveMethod = (key) => {
    this.props.setPaymentsState({method: key})
  }

  isTermsAccepted = () => {
    return this.props.cookies.get('termsAccepted') === 'true'
  }

  getErrors = () => {
    if (!this.isTermsAccepted()) {
      return this.props.t('PLEASE_CONFIRM_AGREEMENT')
    }

    return null
  }

  render = () => {
    const isTermsAccepted = this.isTermsAccepted()
    const errors = this.getErrors()

    return (
      <div>
        <div className='pay__pop__pay'>
          <PaymentForm {...this.props} />
          <div className='br' />
        </div>

        <div className='pay__pop__addFundsBl'>
          <div className='pay__pop__pay__blocks'>
            <PaymentMethods selected={this.props.payments.method} methods={this.props.methods}
              onClick={this.setActiveMethod} />
          </div>

          <div className='payment__agree'>
            <div className='payment__agree__check'>
              <input id='payment__agree__check' type='checkbox' checked={isTermsAccepted}
                onChange={this.changeTermsAccepted} />
              <label htmlFor='payment__agree__check' />
            </div>
            <div className='terms-wrapper'
              dangerouslySetInnerHTML={{__html: this.props.t('HAVE_READ_AND_ACCEPT')}} />
          </div>
          <div className='action-wrapper'>
            <button className={`btn ${isTermsAccepted ? 'btn--yellow' : ''}`} disabled={!isTermsAccepted}
              onClick={this.startPayment}>
              {this.props.t('FOLLOW_PAYMENT')}
            </button>
            {errors && <Error message={errors} />}
          </div>
        </div>
      </div>
    )
  }
}

const Error = ({message}) => (
  <span className='error'>{message}</span>
)

const PaymentMethods = ({selected, methods, onClick}) => (
  <div className='pay__pop__itsPop visible'>
    {
      Object.keys(methods).map(key =>
        <Method key={key} active={key === selected} option={methods[key]} onClick={() => onClick(key)} />
      )
    }
  </div>
)

const Method = ({active, option, onClick}) => {
  const domain = 'https://payment.cases4real.com'
  return (
    <span className={`pay__pop__it ${active ? 'pay__pop__it--active' : ''}`} style={{cursor: 'pointer'}}
      title={option.name} onClick={onClick}>
      <img src={`${domain}/img/payments/${option.img}`} />
    </span>
  )
}
