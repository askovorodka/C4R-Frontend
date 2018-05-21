'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import './styles/policy.scss'

@translate(['about'])
export class Policy extends Component {
  render () {
    const {t} = this.props
    return (
      <section className='policy'>
        <p className='policy__paragraph'>{t('POLICY.P0.DATE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P0.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P0.2')}</p>
        <p className='policy__title'>{t('POLICY.P1.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.3')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.4')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.5')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.6')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.7')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.8')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.9')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.10')}</p>
        <p className='policy__paragraph'>{t('POLICY.P1.11')}</p>
        <p className='policy__title'>{t('POLICY.P2.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P2.1')}</p>
        <p className='policy__title'>{t('POLICY.P3.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P3.1')}</p>
        <p className='policy__title'>{t('POLICY.P4.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P4.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P4.2')}</p>
        <p className='policy__title'>{t('POLICY.P5.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P5.1')}</p>
        <p className='policy__title'>{t('POLICY.P6.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P6.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P6.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P6.3')}</p>
        <p className='policy__title'>{t('POLICY.P7.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P7.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P7.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P7.3')}</p>
        <p className='policy__paragraph'>{t('POLICY.P7.4')}</p>
        <p className='policy__title'>{t('POLICY.P8.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P8.1')}</p>
        <p className='policy__title'>{t('POLICY.P9.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P9.1')}</p>
        <p className='policy__title'>{t('POLICY.P10.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P10.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P10.2')}</p>
        <p className='policy__title'>{t('POLICY.P11.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.3')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.4')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.5')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.6')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.7')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.8')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.9')}</p>
        <p className='policy__paragraph'>{t('POLICY.P11.10')}</p>
        <p className='policy__title'>{t('POLICY.P12.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P12.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P12.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P12.3')}</p>
        <p className='policy__paragraph'>{t('POLICY.P12.4')}</p>
        <p className='policy__paragraph'>{t('POLICY.P12.5')}</p>
        <p className='policy__paragraph'>{t('POLICY.P12.6')}</p>
        <p className='policy__title'>{t('POLICY.P13.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P13.1')}</p>
        <p className='policy__title'>{t('POLICY.P14.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P14.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P14.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P14.3')}</p>
        <p className='policy__title'>{t('POLICY.P15.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P15.1')}</p>
        <p className='policy__title'>{t('POLICY.P16.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P16.1')}</p>
        <p className='policy__title'>{t('POLICY.P17.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P17.1')}</p>
        <p className='policy__title'>{t('POLICY.P18.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P18.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P18.2')}</p>
        <p className='policy__title'>{t('POLICY.P19.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P19.1')}</p>
        <p className='policy__title'>{t('POLICY.P20.TITLE')}</p>
        <p className='policy__paragraph'>{t('POLICY.P20.1')}</p>
        <p className='policy__paragraph'>{t('POLICY.P20.2')}</p>
        <p className='policy__paragraph'>{t('POLICY.P20.3')}</p>
      </section>
    )
  }
}
