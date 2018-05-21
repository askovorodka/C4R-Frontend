import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { InventoryItem } from './InventoryItem'
import { InventoryList } from './InventoryList'
import { Price } from 'src/components/Price'
import { Button } from 'src/components/Button'
import Link from 'src/components/Link'
import './styles/inventory-content.scss'

@translate(['common'])
@connect(state => ({
  tradeUrl: state.profile.user.trade_url
}))
export class InventoryContentSelected extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    sum: PropTypes.object.isRequired,
    sell: PropTypes.func.isRequired,
    take: PropTypes.func.isRequired,
    unSelect: PropTypes.func.isRequired,
    tradeUrl: PropTypes.string.isRequired
  }

  render () {
    const {t} = this.props
    let buttonWarning = ''
    let warningMessage = <div />
    if (!this.props.tradeUrl) {
      buttonWarning = ' inventory-content__button_warning'
      warningMessage = <WarningMessage
        text={t('PROFILE.WARNINGS.TRADE_URL')}
        link={t('PROFILE.WARNINGS.TRADE_URL_LINK')}
      />
    }

    const buttons = this.props.items.length > 0 && <div className='inventory-content__buttons'>
      <Button className='inventory-content__button inventory-content__button_sell' onClick={this.props.sell}>
        {t('PROFILE.BUTTONS.SELL')}
        <Price {...this.props.sum} customClass='inventory__price' />
      </Button>
      <Button className={'inventory-content__button' + buttonWarning} onClick={this.props.take}>
        {t('PROFILE.BUTTONS.TAKE')}
      </Button>
      {warningMessage}
    </div>
    return (
      <div className='inventory-content inventory-content_selected'>
        <header className='inventory-content__header'>
          <h1 className='inventory-content__heading'>
            {t('PROFILE.LINES.CHOSEN')}
          </h1>
          <Button className='inventory-content__action' onClick={this.props.unSelect}>
            {t('PROFILE.ACTIONS.TO_INVENTORY')}
            <svg className='inventory-content__icon'>
              <path
                className='inventory-content__icon-elem'
                d='M1.4,5.2,5.7,9.4a.38.38,0,0,0,.6,0,.38.38,0,0,0,0-.6L2.7,5.3l6.4.1a7.88,7.88,0,0,1,8,6.4A8,8,0,0,1,11,21.2a8.12,8.12,0,0,1-9.7-5.8,6.45,6.45,0,0,1-.3-2A.43.43,0,0,0,.6,13h0a.43.43,0,0,0-.4.4,7.8,7.8,0,0,0,.3,2.2,9,9,0,0,0,16.2,2.6A8.45,8.45,0,0,0,18,11.7a8.75,8.75,0,0,0-3.1-5.2,9.27,9.27,0,0,0-5.8-2L2.8,4.3,6.1,1a.38.38,0,0,0,0-.6.45.45,0,0,0-.6,0L1.4,4.6a.5.5,0,0,0,0,.6Z' />
            </svg>
          </Button>
        </header>
        <InventoryList onSelect={this.props.onSelect} items={this.props.items} />
        {buttons}
      </div>
    )
  }
}

const WarningMessage = props => (
  <div className='warning-message'>
    <p className='warning-message__text'>
      {props.text}
    </p>
    <Link className='warning-message__link' to='/profile/tradeurl'>
      {props.link}
    </Link>
  </div>
)

WarningMessage.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
