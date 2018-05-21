import {Component} from 'react'
import PropTypes from 'prop-types'
import {translate} from 'react-i18next'
import {api} from 'src/lib/api'
import {toastr} from 'react-redux-toastr'
import {connect} from 'react-redux'
import {Checkmark} from '../../components/Checkmark'
import {
  linkAccount,
  sellDrops,
  setAvatar,
  takeDrops,
  toggleUserMenu,
  updateUserSettings
} from './actions'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  isAuth: !!state.profile.user.id,
  profile: state.profile,

  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {
  sellDrops,
  takeDrops,
  setAvatar,
  linkAccount,
  toggleUserMenu,
  updateUserSettings
})

export class PhoneForm extends Component {
  static propTypes = {
    setPhoneNumber: PropTypes.func
  }

  componentWillMount () {
    const phoneNumber = this.props.profile.user.phone
    this.state = {
      phoneNumber: phoneNumber || '',
      confirmationCode: '',
      canEdit: !phoneNumber,
      isPhoneNumberFormSubmitted: false,
      isConfirmationCodeRequested: false
    }
  }

  async requestConfirmationCode (event) {
    event.preventDefault()

    this.setState({
      isPhoneNumberFormSubmitted: true
    })

    if (!this.state.canEdit) {
      return
    }

    if (!this.isPhoneNumberValid()) {
      return false
    }

    const res = await api.requestSmsCode(this.state.phoneNumber)

    if (res.code < 400) {
      this.setState({
        isConfirmationCodeRequested: true
      })
      toastr.success('', res.message)
    }
  }

  async setPhoneNumber (event) {
    event.preventDefault()

    if (!this.state.canEdit) {
      return
    }

    if (!this.isConfirmationCodeValid()) {
      return false
    }

    const res = await api.setPhoneNumber(this.state.phoneNumber, this.state.confirmationCode)

    if (res.code < 400) {
      toastr.success('', res.message)
      this.setState({canEdit: false})
    }
  }

  isPhoneNumberValid () {
    return this.state.phoneNumber && /^\d{11}$/g.test(this.state.phoneNumber.replace(/\D/g, ''))
  }

  isConfirmationCodeValid () {
    return this.state.confirmationCode && /^\d{4}$/g.test(this.state.confirmationCode)
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
              Телефон:
            </span>
            <input
              className={'form__input' + (this.state.isPhoneNumberFormSubmitted && this.state.canEdit ? ' ' + (this.isPhoneNumberValid() ? 'valid' : 'invalid') : '')}
              type='tel'
              placeholder='+7-999-123-45-67'
              onChange={this.updatePhoneNumberInputValue.bind(this)}
              disabled={!this.state.canEdit}
              value={this.state.phoneNumber}
            />
          </label>
          {(this.state.canEdit
              ? <button
                className='form__submit'
                onClick={this.requestConfirmationCode.bind(this)}>
                Отправить код
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
                className='form__input'
                type='text'
                placeholder='Код подтверждения'
                onChange={this.updateConfirmationCodeInputValue.bind(this)}
                value={this.state.confirmationCode}
              />
              <button
                className='form__submit'
                onClick={this.setPhoneNumber.bind(this)}
                disabled={!this.state.isConfirmationCodeRequested || !this.isConfirmationCodeValid()}
              >
                Подтвердить
              </button>
            </fieldset>
            : null
        )}
      </form>
    )
  }

  isPhoneNumberChanged () {
    return this.state.phoneNumber !== this.props.phoneNumber
  }

  updateConfirmationCodeInputValue (event) {
    this.setState({
      confirmationCode: event.target.value
    })
  }

  updatePhoneNumberInputValue (event) {
    this.setState({
      phoneNumber: event.target.value
    })
  }
}
