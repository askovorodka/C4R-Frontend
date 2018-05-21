import { Component } from 'react'
import PropTypes from 'prop-types'
import { InventoryItem } from 'src/components/Inventory/InventoryItem'
import { InventoryList } from 'src/components/Inventory/InventoryList'
import Link from 'src/components/Link'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { Button } from 'src/components/Button'
import './styles/inventory-content.scss'

@connect(state => ({
  userId: state.profile.user.id
}))
@translate(['common'])
export class InventoryContent extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
  }

  render () {
    const {t} = this.props
    return (
      <div className='inventory-content'>
        <header className='inventory-content__header'>
          <nav className='inventory-content__nav'>
            <div className='inventory-content__link inventory-content__link_active'>
              {t('PROFILE.NAV.INVENTORY')}
            </div>
            <Link className='inventory-content__link' to={'/user/' + this.props.userId}>
              {t('PROFILE.NAV.HISTORY')}
            </Link>
          </nav>
        </header>
        <InventoryList onSelect={this.props.onSelect} items={this.props.items} />
      </div>
    )
  }
}
