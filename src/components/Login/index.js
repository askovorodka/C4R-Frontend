import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { Nav } from 'src/components/Nav'
import { Price } from 'src/components/Price'
import { UserImage } from 'src/components/UserCard/UserImage'
import { connect } from 'react-redux'
import { login, logout, showUserMenu, hideUserMenu } from 'src/routes/ProfileSettings/actions'
import { LoginButtons } from 'src/components/LoginButtons'
import { Button } from 'src/components/Button'
import OpenPopupButton from 'src/components/Payments/Buttons/OpenPopupButton'
import './index.scss'

@translate(['common'])
@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  isAuth: !!state.profile.user.id,
  profile: state.profile,
  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {login, logout, showUserMenu, hideUserMenu})

export class Login extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    isAuth: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    isMenuCollapsed: PropTypes.bool.isRequired,
    showUserMenu: PropTypes.func.isRequired,
    hideUserMenu: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.toggleMenuDropdown = this.toggleMenuDropdown.bind(this)

    this.state = {
      navItems: [
        {
          name: 'NAV.PROFILE',
          icon:
            <svg className='nav__icon'>
              <path
                className='nav__icon-elem'
                d='M23.6,20.8a9,9,0,0,0-4.7-3.9,2.26,2.26,0,0,0-1.8.1,5.79,5.79,0,0,1-6.2,0,1.92,1.92,0,0,0-1.8-.1,5.36,5.36,0,0,0-1.1.5,9,9,0,0,0-3.9,3.8,1.66,1.66,0,0,0,.2,1.9,2.3,2.3,0,0,0,1.9.9H22.1a2,2,0,0,0,1.8-1.5A2,2,0,0,0,23.6,20.8Zm-6.1-6.5A6.13,6.13,0,0,0,19,10a6.28,6.28,0,0,0-1.4-4.2A4.36,4.36,0,0,0,14.1,4a4.79,4.79,0,0,0-3.5,1.6A6.47,6.47,0,0,0,9,9.6a6.09,6.09,0,0,0,1.4,4.5A4.4,4.4,0,0,0,17.5,14.3Z' />
            </svg>,
          link: '/profile/settings'
        },
        {
          name: 'NAV.INVENTORY',
          icon:
            <svg className='nav__icon'>
              <path
                className='nav__icon-elem'
                d='M4.4,13H13V4.4H4.4ZM15,4.4V13h8.6V4.4ZM4.4,23.6H13V15H4.4Zm10.6,0h8.6V15H15Z' />
            </svg>,
          link: '/profile/inventory'
        },
        {
          name: 'NAV.VIP_CLUB',
          icon:
            <svg className='nav__icon'>
              <path
                className='nav__icon-elem'
                d='M6,22.5S3,14.7,1.5,11.3c1.6.5,4.3,1,5.9,1.5-.4.9-.8,2.1.1,2.9a3.36,3.36,0,0,0,1.4.5,2.62,2.62,0,0,0,1.7-.5,4.13,4.13,0,0,0,.7-1.1c.4-1.3-.3-1.9-.9-2.9,1.2-2,2.4-4,3.7-6.1,1.3,2.1,2.5,4.1,3.7,6.2-.7.8-1.4,1.6-1,2.8A2.4,2.4,0,0,0,20.2,16c1.3-.6,1.1-2,.5-3.1l5.8-1.5L22.1,22.6H6Z' />
            </svg>,
          link: '/profile/vip-club'
        },
        {
          name: 'NAV.TRADE_URL',
          icon:
            <div className='nav__icon nav__icon_text'>
              .URL
            </div>,
          link: '/profile/tradeurl'
        },
        {
          name: 'NAV.REFERRAL',
          link: '/profile/referral',
          icon: <svg className='nav__icon'>
            <path className='nav__icon-elem'
                  d='M22.4,19.6c-1.1-1.9-2.7-3.1-4.7-3.9c-0.6-0.2-1.2-0.2-1.8,0.1c-2.1,1.2-4.1,1.2-6.2,0c-0.6-0.3-1.2-0.4-1.8-0.1
				c-0.4,0.1-0.7,0.3-1.1,0.5c-1.7,0.9-3,2.1-3.9,3.8c-0.3,0.7-0.3,1.3,0.2,1.9c0.5,0.6,1.1,0.8,1.8,0.8c2.6,0,5.2,0,7.8,0
				c2.4,0,4.7,0,7.1,0c0.3,0,0.7,0,1,0c0.8,0,1.6-0.7,1.8-1.5C22.9,20.6,22.7,20.1,22.4,19.6z M16.2,13c1.1-1.2,1.5-2.7,1.5-4.3
				c0-1.6-0.4-3-1.4-4.2c-0.9-1.1-2-1.8-3.5-1.8c-1.4,0-2.5,0.6-3.5,1.6c-1,1.1-1.5,2.5-1.6,4c-0.1,1.7,0.3,3.2,1.4,4.5
				C11.1,15.3,14.2,15.4,16.2,13z' />
            <circle className='nav__icon-elem' cx='18.2' cy='18.3' r='7' />
            <line className='nav__icon-elem' x1='13.2' y1='18.3' x2='23.2' y2='18.3' />
            <line className='nav__icon-elem' x1='18.2' y1='23.3' x2='18.2' y2='13.3' />
          </svg>
        },
        {
          name: 'NAV.LOGOUT',
          icon:
            <svg className='nav__icon'>
              <path
                className='nav__icon-elem'
                d='M24.2,13.4,17,6.2a.76.76,0,0,0-.4-.2c-.6-.2-1.1.2-1.1.9v3.8H9.6a.8.8,0,0,0-.9.9v4.9a.9.9,0,0,0,1,1h5.9v3.8a.79.79,0,0,0,.5.8c.4.1.7.1.9-.2l7.2-7.2A.85.85,0,0,0,24.2,13.4Z' />
              <path
                className='nav__icon-elem'
                d='M11.6,22.5H7.3a3.71,3.71,0,0,1-3.7-3.8V9.2A3.8,3.8,0,0,1,7.4,5.4h4.2' />
            </svg>,
          link: './',
          onClick: () => this.props.logout()
        }
      ]
    }
  }

  componentWillMount () {
    document.addEventListener('click', this.hideMenuDropdown, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.hideMenuDropdown, false)
  }

  hideMenuDropdown = (event) => {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      this.props.hideUserMenu()
    }
  }

  toggleMenuDropdown (event) {
    if (!this.props.isMenuCollapsed) {
      this.props.showUserMenu()
    } else {
      this.props.hideUserMenu()
    }
  }

  render () {
    return (
      this.props.isAuth ? (
        <div className='header-layout__login-form login-form'>
          <OpenPopupButton />
          <Price
            {...this.props.profile.user.balance}
            customClass='login-form__price' />
          <Button
            onClick={this.toggleMenuDropdown}
            className={'login-form__profile' +
            (this.props.isMenuCollapsed ? ' login-form__profile_opened' : '')}>
            <UserImage image={this.props.profile.user.avatar}
                       className='login-form__user-image' />
            <svg className='login-form__menu-icon'>
              <circle cx='10' cy='10' r='9' fill='#09090c' />
              <path
                d='M16,7a9,9,0,1,1-9,9,9,9,0,0,1,9-9m0-1A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z'
                transform='translate(-6 -6)' fill='#eeb644' />
              <circle cx='10' cy='10' r='7' fill='#f0af00' />
              <path d='M11.8,14.88l4.2,4.2,4.2-4.2Z'
                    transform='translate(-6 -6)' fill='#08080b' />
            </svg>
          </Button>
          <Nav className='login-form__profile-menu'
               navItems={this.state.navItems} />
        </div>
      ) : (
        <div className='header-layout__login-form login-form'>
          <LoginButtons />
        </div>
      )
    )
  }
}
