import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { LoginButtons } from '../LoginButtons/index'
import { setLoginState } from './actions'
import './index.scss'

@translate('common')
@connect(state => ({
  popup: state.login.popup
}), {setLoginState})
export class LoginForm extends Component {
  close = () => {
    this.props.setLoginState({visible: false})
  }

  render = () => {
    if (!this.props.popup.visible) {
      return null
    }
    return (
      <div className='login__pop'>
        <div className='login__pop__head'>
          <div className='login__pop__head__title'>{this.props.t('LOGIN_FOR_CONTINUE')}</div>
          <div className='login__pop__head__close' onClick={this.close}>×</div>
        </div>
        <div className='login__pop__btns'>
          <LoginButtons />
        </div>
      </div>
    )
  }
}
