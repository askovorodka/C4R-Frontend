import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { api } from 'src/lib/api'
import { sellDrops, takeDrops } from './actions'
import { Component } from 'react'
import { Checkmark } from '../../components/Checkmark'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  isAuth: !!state.profile.user.id,
  profile: state.profile,

  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {sellDrops, takeDrops})

export class EmailForm extends Component {
  static propTypes = {
    email: PropTypes.string,
    isAuth: PropTypes.bool,
    setEmail: PropTypes.func
  }

  constructor (props) {
    super(props)
    const email = props.profile.user.email

    this.state = {
      email: email || '',
      confirmationCode: '',
      canEdit: !email,
      isEmailFormSubmitted: false,
      isConfirmationCodeRequested: false,
      isConfirmationCodeInvalid: false
    }
  }

  async requestConfirmCode (event) {
    event.preventDefault()

    this.setState({
      isEmailFormSubmitted: true
    })

    if (!this.state.canEdit) {
      return
    }

    if (!this.isEmailValid()) {
      // todo
      return false
    }

    const res = await api.requestEmailConfirmationCode(this.state.email)

    if (res.code < 400) {
      this.setState({
        isConfirmationCodeRequested: true
      })
      toastr.success('', res.message)
    }
  }

  async setEmail (event) {
    event.preventDefault()

    if (!this.state.canEdit) {
      return
    }

    if (!this.isConfirmationCodeValid()) {
      return false
    }

    const res = await api.setEmail(this.state.email, this.state.confirmationCode)

    if (res.code < 400) {
      toastr.success('', res.message)
      this.setState({canEdit: false})
    } else {
      this.setState({
        isConfirmationCodeInvalid: true
      })
    }
  }

  isEmailValid () {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(this.state.email)
  }

  enableEditing (event) {
    event.preventDefault()
    this.setState({canEdit: true})
  }

  render () {
    return (
      <form className='form form_type_confirm-data'>
        <fieldset className='form__fieldset'>
          <label className='form__label'>
            <span className='form__label-text'>
              E-mail:
            </span>
            <input
              className={'form__input' + (this.state.isEmailFormSubmitted && this.state.canEdit ? ' ' + (this.isEmailValid() ? 'valid' : 'invalid') : '')}
              type='email'
              placeholder='example@mail.com'
              value={this.state.email}
              onChange={this.updateEmailInputValue.bind(this)}
              disabled={!this.state.canEdit}
            />
          </label>
          {(this.state.canEdit
              ? <button
                onClick={this.requestConfirmCode.bind(this)}
                className='form__submit'>
                Отправить письмо
              </button>
              : null // : <span>
            //   <Checkmark/>
            //   <button
            //     className='form__submit'
            //     onClick={this.enableEditing.bind(this)}>
            //     Изменить
            //   </button>
            // </span>

          )}
        </fieldset>
        {(this.state.canEdit
            ? <fieldset className='form__fieldset'>
              <input
                className={'form__input' + (this.state.isConfirmationCodeRequested && this.state.isConfirmationCodeInvalid ? ' invalid' : '')}
                type='text'
                placeholder='Код подтверждения'
                onChange={this.updateConfirmationCodeInputValue.bind(this)}
                value={this.state.confirmationCode}
              />
              <button
                className='form__submit'
                onClick={this.setEmail.bind(this)}
                disabled={!this.state.isConfirmationCodeRequested}
              >
                Подтвердить
              </button>
            </fieldset>
            : null
        )}
      </form>
    )
  }

  isEmailChanged () {
    return this.state.email !== this.props.email
  }

  updateConfirmationCodeInputValue (event) {
    this.setState({
      confirmationCode: event.target.value
    })
  }

  updateEmailInputValue (event) {
    this.setState({
      email: event.target.value
    })
  }
}
