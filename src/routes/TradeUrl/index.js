'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import { TradeUrlForm } from 'src/components/Profile'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './index.scss'

@connect(state => ({
  isAuth: !!state.profile.user.id
}))

@translate(['common'])
export class TradeUrlPage extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired
  }

  render () {
    const {t} = this.props

    return (
      this.props.isAuth ? (
        <main className='trade-url'>
          <div className='trade-url__header'>
            <h1 className='trade-url__header_text'>
              {t('TRADE_URL.HEADER_MESSAGE')}
            </h1>
            <TradeUrlForm />
          </div>
          <TradeUrlInstructionComponent />
        </main>
      ) : (
        <div className='unauthorized'>
          {this.props.t('authNeeded')}
        </div>
      )
    )
  }
}

// @todo перевод для image
const meSteamUrl = 'http://steamcommunity.com/id/me'

@translate(['common'])
class TradeUrlInstructionComponent extends Component {
  render () {
    const {t} = this.props

    return (
      <div className='trade-url__content'>
        <div className='trade-url__content__head'>{t('TRADE_URL.HOW_TO_FIND.HEADER')}</div>
        <div className='paragraph'>
          <div className='paragraph__text'>{t('TRADE_URL.HOW_TO_FIND.STEAM')}</div>
          <img className='paragraph_image'
               src={`/assets/images/trade-url/tradeurl__instruction.png`}
          />
        </div>
        <div className='paragraph'>
          <div className='paragraph__head'>{t('TRADE_URL.HOW_TO_FIND.BROWSER')}</div>
          <div className='paragraph'>
            <div className='paragraph_text'>
              {t('TRADE_URL.HOW_TO_FIND.STEP1')}
              <a target='_blank' href='https://steamcommunity.com/login' className='content__link'>
                https://steamcommunity.com/login
              </a>
            </div>
            <div className='paragraph_text'>
              {t('TRADE_URL.HOW_TO_FIND.STEP2')}
              <a target='_blank' href={`${meSteamUrl}/tradeoffers/privacy#trade_offer_access_url`}
                 className='content__link'>
                {`${meSteamUrl}/tradeoffers/privacy#trade_offer_access_url`}
              </a>
            </div>
            <div className='paragraph_text'>
              {t('TRADE_URL.HOW_TO_FIND.STEP3')}
              <a target='_blank' href={`${meSteamUrl}/edit/settings/#inventoryPrivacySetting_public`}
                 className='content__link'>
                {`${meSteamUrl}/edit/settings/#inventoryPrivacySetting_public`}
              </a>
            </div>
          </div>
          <div className='paragraph'>
            <div className='paragraph_text'>{t('TRADE_URL.HOW_TO_FIND.STEP4')}</div>
            <div className='paragraph_text'>{t('TRADE_URL.HOW_TO_FIND.STEP5')}</div>
          </div>
          <div className='paragraph'>{t('TRADE_URL.HOW_TO_FIND.STEP6')}</div>
          <div className='paragraph'>{t('TRADE_URL.HOW_TO_FIND.STEP7')}</div>
        </div>
      </div>
    )
  }
}
