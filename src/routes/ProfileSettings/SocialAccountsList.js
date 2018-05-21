import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import {
  linkUserAccount,
  sellDrops,
  setAvatar,
  takeDrops,
  toggleUserMenu,
  updateUserSettings
} from './actions'
import { Component } from 'react'
import config from 'src/lib/config'

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
  toggleUserMenu,
  updateUserSettings,
  linkUserAccount
})

export class SocialAccountsList extends Component {
  static propTypes = {
    authServices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })),
    linkedServices: PropTypes.object
  }

  isAccountLinked (serviceLink) {
    if (!this.props.linkedServices) {
      return false
    }

    console.log(this.props.linkedServices)
    return !!this.props.linkedServices[serviceLink]
  }

  render () {
    return (
      <div className='social-accounts'>
        {
          config.authServices.map(s => {
            return (
              <button
                className={'social-accounts__item social-accounts__item_net_' + s.name}
                key={s.name}
                onClick={this.props.linkUserAccount(s.link)}
                disabled={this.isAccountLinked(s.link)}
              />
            )
          })
        }
      </div>
    )
  }
}
