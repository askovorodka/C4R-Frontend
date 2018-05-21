import { Component } from 'react'
import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'src/components/Link'
import './index.scss'

@translate(['navigation'])
export class Nav extends Component {
  static propTypes = {
    className: PropTypes.string,
    navItems: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.object,
      link: PropTypes.string.isRequired,
      onClick: PropTypes.func
    }))
  }

  render () {
    const {t} = this.props

    return (
      <nav className={'nav ' + this.props.className}>
        <ul className='nav__list'>
          {this.props.navItems.map((i, index) => (
            i.external === 'true' ? (
                <li key={index}>
                  <a className='nav__item link link_block' href={i.link}
                        target='_blank'>
                    <span className='nav__text'>{t(i.name)}</span>
                  </a>
                </li>
              ):
              (
                <li key={index}>
                  <Link className='nav__item link link_block' to={i.link}
                    onClick={i.onClick}>
                    {i.icon}
                    <span className='nav__text'>{t(i.name)}</span>
                  </Link>
                </li>
              )
            )
          )}
        </ul>
      </nav>
    )
  }
}
