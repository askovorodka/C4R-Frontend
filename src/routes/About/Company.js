'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import './styles/company.scss'

@translate(['about'])
export class Company extends Component {
  render () {
    const {t} = this.props
    return (
      <section className='company'>
        <p className='company__paragraph'>
          {t('COMPANY.PARAGRAPH_1')}
          <a href='http://store.steampowered.com/app/730/CounterStrike_Global_Offensive/' className='company__game-link'> Counter Strike: Global Offensive</a>.
        </p>
        <p className='company__paragraph'>
          {t('COMPANY.PARAGRAPH_2')}
        </p>
        <p className='company__paragraph'>
          {t('COMPANY.PARAGRAPH_3')}
        </p>
      </section>
    )
  }
}
