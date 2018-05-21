import { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
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

export class SecretCode extends Component {
  static propTypes = {
    secretCode: PropTypes.string.isRequired
  }

  constructor () {
    super()
    this.state = {isSecretCodeVisible: false}
    this.toggleCodeVisibility = this.toggleCodeVisibility.bind(this)
  }

  toggleCodeVisibility (event) {
    this.setState({isSecretCodeVisible: !this.state.isSecretCodeVisible})
    event.preventDefault()
    return false
  }

  render () {
    return (
      <div className='content__container'>
        <div className='content__btn-container'>
          <button
            onClick={this.toggleCodeVisibility}
            className='btn'>
            {(this.state.isSecretCodeVisible
                ? this.props.secretCode
                : 'Показать')}
          </button>
        </div>
        <div className='content__text-container'>
          <p className='content__text'>
            Это твой персональный код, который известен только тебе и
            сотрудникам сайта Cases4Real.
            Если с тобой захочет связаться представитель нашей администрации, он
            обязательно назовет тебе твой
            персональный код и ты сможешь убедиться в его соответствии с
            персональным кодом на твоей странице.
          </p>
          <p className='content__text content__text_warning'>
            Сотрудники сайта Cases4Real никогда не попросят тебя назвать пять
            символов твоего персонального кода. Все
            кто так делают являются мошенниками.
          </p>
          <p className='content__text'>
            Также, мы напоминаем, что сотрудники сайта Cases4Real не выкупают у
            пользователей предметы в Steam и никогда
            не будут просить паролей от твоих аккаунтов.
          </p>
        </div>
      </div>
    )
  }
}
