'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import './styles/contacts.scss'

@translate(['about'])
export class Contacts extends Component {
  render () {
    const {t} = this.props
    return (
      <section className='contacts'>
        <p className='contacts__name'>
          {t('CONTACTS.NAME')}
        </p>
        <p className='contacts__line'>
          {t('CONTACTS.LINE_1')}
        </p>
        <p className='contacts__line'>
          {t('CONTACTS.LINE_2')}
          <a href='mailto:support@cases4real.com' className='contacts__mail'>support@cases4real.com</a>
        </p>
        <p className='contacts__line'>
          {t('CONTACTS.LINE_3')}
          <a href='mailto:advertising@cases4real.com' className='contacts__mail'>advertising@cases4real.com</a>
        </p>
        <p className='contacts__line'>
          {t('CONTACTS.LINE_4')}
          <a href='mailto:chief.support@cases4real.com' className='contacts__mail'>chief.support@cases4real.com</a>
        </p>
      </section>
    )
  }
}
