import { Component } from 'react'
import { translate } from 'react-i18next'
import { login } from 'src/routes/ProfileSettings/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import config from 'src/lib/config'
import './index.scss'
import { Button } from 'src/components/Button'

@connect(null, { login })
@translate(['common'])
export class LoginButtons extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }
  render () {
    const {t} = this.props

    return (
      <div className='login-buttons'>
        {config.authServices.map(authSettings =>
          <LoginButton key={authSettings.name} {...authSettings}
            title={t('LOGIN')} loginAction={this.props.login(authSettings.link)} />
        )}
        <span className='login-buttons__title'>{t('LOGIN')} :</span>
      </div>
    )
  }
}

const LoginButton = ({name, link, title, loginAction}) => {
  const iconsPath = '/assets/images/icons'
  return (
    <Button className={'login-buttons__item login-buttons__item_' + name}
      onClick={loginAction}>

      <img className='login-buttons__icon' alt='Social media'
        src={iconsPath + '/login/login__' + name + '-icon.png'} />
    </Button>
  )
}
