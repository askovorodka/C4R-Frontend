'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import './styles/sidemenu.scss'

@translate(['about'])
export class SideMenu extends Component {
  render () {
    const {t} = this.props
    return (
      <aside className='side-menu-wrap'>
        <nav>
          <ul className='side-menu'>
            <li className='side-menu__item'><a className='side-menu__link' onClick={this.props.onClick} name='Boxes'>{t('NAV.CASES')}</a></li>
            <li className='side-menu__item'>
              <a className='side-menu__link' onClick={this.props.onClick} name='Mechanics'>{t('NAV.MECHANICS')}</a>
              <ul className='sub-menu'>
                <li className='sub-menu__item'><a className='sub-menu__link' onClick={this.props.onClick} name='Mechanics'>{t('NAV.SECRET')}</a></li>
                <li className='sub-menu__item'><a className='sub-menu__link' onClick={this.props.onClick} name='Monster'>{t('NAV.MONSTER')}</a></li>
                <li className='sub-menu__item'><a className='sub-menu__link' onClick={this.props.onClick} name='Experience'>{t('NAV.EXP')}</a></li>
                <li className='sub-menu__item'><a className='sub-menu__link' onClick={this.props.onClick} name='Power'>{t('NAV.POWER')}</a></li>
              </ul>
            </li>
            <li className='side-menu__item'><a className='side-menu__link' onClick={this.props.onClick} name='Company'>{t('NAV.COMPANY')}</a></li>
            <li className='side-menu__item'><a className='side-menu__link' onClick={this.props.onClick} name='Contacts'>{t('NAV.CONTACTS')}</a></li>
            <li className='side-menu__item'><a className='side-menu__link' onClick={this.props.onClick} name='Policy'>{t('NAV.POLICY')}</a></li>
            <li className='side-menu__item'><a className='side-menu__link' onClick={this.props.onClick} name='Agreement'>{t('NAV.AGREEMENT')}</a></li>
          </ul>
        </nav>
      </aside>
    )
  }
}
