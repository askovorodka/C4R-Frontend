import { Component } from 'react'
import PropTypes from 'prop-types'
import { getSteamItemImageUrl } from 'src/lib/steam'
import { Loot } from 'src/components/Loot'
import { Price } from 'src/components/Price'
import './history-item.scss'

export const HistoryItem = props => (
  <div className={'history-item history-item_quality_' + props.loot.quality}>
    <img className='history-item__img' src={getSteamItemImageUrl(props.loot.image_url)} />
    <span className='history-item__name'>
      {props.loot.name}
    </span>
    <Price {...props.price} customClass='history-item__price' />
    <div className='history-item__status'>
      {props.status}
    </div>
  </div>
)

HistoryItem.propTypes = {
  loot: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired
}
