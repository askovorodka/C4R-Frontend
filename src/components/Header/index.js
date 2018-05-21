import { Component } from 'react'
import { Login } from 'src/components/Profile'
import { Nav } from 'src/components/Nav'
import { LanguageSwitcher } from 'src/components/Language/LanguageSwitcher'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Link from 'src/components/Link'
import './index.scss'

@connect(state => ({
  isAuth: !!state.profile.user.id,
  currentLanguage: state.i18n.currentLanguage
}))
export class Header extends Component {
  static propTypes = {
    isAuth: PropTypes.bool
  }

  static defaultProps = {
    navItemsAuth: [
      {
        name: 'NAV.ABOUT',
        link: 'about',
        external: 'false'
      },
      {
        name: 'NAV.COMMUNITY',
        link: 'community',
        external: 'true'
      },
      {
        name: 'NAV.VIP_CLUB',
        link: 'vip-club',
        external: 'false'
      },
      {
        name: 'NAV.INVENTORY',
        link: '/profile/inventory',
        external: 'false'
      },
      {
        name: 'NAV.HELP',
        link: 'help',
        external: 'false'
      }
    ],
    navItems: [
      {
        name: 'NAV.ABOUT',
        link: 'about',
        external: 'false'
      },
      {
        name: 'NAV.COMMUNITY',
        link: 'community',
        external: 'true'
      },
      {
        name: 'NAV.VIP_CLUB',
        link: 'vip-club',
        external: 'false'
      },
      {
        name: 'NAV.HELP',
        link: 'help',
        external: 'false'
      }
    ]
  }

  render () {
    this.props.navItemsAuth[1].link = `https://community-${this.props.currentLanguage}.cases4real.com`
    this.props.navItems[1].link = `https://community-${this.props.currentLanguage}.cases4real.com`
    return (
      <header className='header'>
        <div className='header__logo-container'>
          <Link className='link link_block' to='/'>
            <img src='/assets/images/logo.svg' className='header__logo'
              alt='Logo' />
          </Link>
          <LanguageSwitcher />
        </div>
        {this.props.isAuth
          ? <Nav navItems={this.props.navItemsAuth} className='header__navAuth' />
          : <Nav navItems={this.props.navItems} className='header__nav' />}
        <Login />
      </header>
    )
  }
}
