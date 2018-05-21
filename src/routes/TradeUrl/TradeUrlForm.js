import { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { setTradeUrl, linkUserAccount } from './actions'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  profile: state.profile,
  isSteamConfirmed: !!state.profile.user.services.steam,
  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {
  setTradeUrl,
  linkUserAccount
})

@translate(['common'])
export class TradeUrlForm extends Component {
  static propTypes = {
    tradeUrl: PropTypes.string.isRequired,
    setTradeUrl: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      tradeUrl: this.props.tradeUrl,
      isTradeUrlUpdated: false
    }
  }
  isTradeUrlChanged = () => {
    return this.state.tradeUrl !== this.props.tradeUrl
  }

  updateTradeUrl = () => {
    if (!this.isTradeUrlChanged()) {
      return null
    }
    this.props.setTradeUrl(this.state.tradeUrl).catch(() => {})
  }

  updateTradeUrlInputValue = (event) => {
    this.setState({
      tradeUrl: event.target.value,
      isTradeUrlUpdated: !!event.target.value
    })
  }
  render () {
    const {t} = this.props
    return (
      <div className='box-decor'>
        <p className='box-decor__text_warning'>
          {t('TRADE_URL.BOX_TOP_MESSAGE')}
        </p>
        <p className='box-decor__text_warning'>
          {t('TRADE_URL.BOX_LINK_MESSAGE')}
          <a target='_blank' href='https://steamcommunity.com/id/c4rofficial'
             className='content__link'> https://steamcommunity.com/id/c4rofficial
          </a>
        </p>
        {this.props.isSteamConfirmed ? (
          <div className='form'>
            <input
              className='form__input'
              type='url'
              value={this.state.tradeUrl}
              onChange={this.updateTradeUrlInputValue}
            />
            <button
              className='form__btn'
              onClick={this.updateTradeUrl}
              disabled={!this.state.isTradeUrlUpdated}
            >
              {t('TRADE_URL.BUTTON')}
            </button>
          </div>
        ) : (
          <div className='form'>
            <input
              className='form__input'
              disabled
              type='url'
            />
            <button
              className='form__btn_confirm'
              onClick={this.props.linkUserAccount('steam')}>
              {t('TRADE_URL.GO_TO_STEAM_BUTTON.PART1')}
              <img src={`/assets/images/steam-icon.png`} />
              {t('TRADE_URL.GO_TO_STEAM_BUTTON.PART2')}
            </button>
          </div>
        )}
        <p className='box-decor__text'>
          {t('TRADE_URL.BOX_DANGER_MESSAGE')}
        </p>
      </div>
    )
  }
}
