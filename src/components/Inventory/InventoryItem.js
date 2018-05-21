'use strict'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { getSteamItemImageUrl } from 'src/lib/steam'
import { Price } from 'src/components/Price'
import { translate } from 'react-i18next'
import './styles/inventory-item.scss'

@translate(['common'])
export class InventoryItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,

  }

  constructor () {
    super()
    this.maxNameLength = 22
  }

  onSelect = () => {
    this.props.onSelect(this.props.item)
  }

  switchErrorText = (status) => {
    switch (status) {
      case 1:
        return 'ITEM_ERROR.DECISION'
      case 2:
        return 'ITEM_ERROR.SENDING'
      case 3:
        return 'ITEM_ERROR.DELIVERED'
      case 4:
        return 'ITEM_ERROR.SOLD'
      case 5:
        return 'ITEM_ERROR.BOT_ERROR'
      case 6:
        return 'ITEM_ERROR.OUT_OF_STOCK'
      case 7:
        return 'ITEM_ERROR.EXPIRED'
      case 8:
        return 'ITEM_ERROR.INVENTORY_CLOSED'
      case 9:
        return 'ITEM_ERROR.TRADE_BAN'
      case 10:
        return 'ITEM_ERROR.SENT'
      case 11:
        return 'ITEM_ERROR.CANNOT_TRADE'
      case 12:
        return 'ITEM_ERROR.CONFIRMATION'
      case 13:
        return 'ITEM_ERROR.INVALID_TRADE_URL'
      case 14:
        return 'ITEM_ERROR.BLACK_LISTED'
      case 15:
        return 'ITEM_ERROR.BLOCKED'
    }
  }

  render () {
    const {t} = this.props
    const loot = this.props.item.loot
    return (
      <div className={`inventory-item inventory-item_quality_${loot.quality} ${this.props.view !== 'any_profile' && this.props.item.grouped_status}`} onClick={this.onSelect}>
        <Price prices={loot.prices} customClass='inventory-item__price' />
        <img className='inventory-item__img' src={getSteamItemImageUrl(loot.image_url)} />
        <span className='inventory-item__name'>
          {loot.name.slice(0, this.maxNameLength)}
        </span>
        {this.props.view !== 'any_profile' && (
          <div className='error-block'>
            {t(this.switchErrorText(this.props.item.status))}
          </div>
        )}
      </div>
    )
  }
}
