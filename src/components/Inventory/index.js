import { Component } from 'react'
import PropTypes from 'prop-types'
import { InventoryContent } from './InventoryContent'
import { InventoryContentSelected } from './InventoryContentSelected'
import { connect } from 'react-redux'
import {
  getInventory,
  linkAccount,
  sellDrops,
  setAuthToken,
  setAvatar,
  takeDrops,
  toggleUserMenu,
  updateUserSettings
} from '../../routes/ProfileSettings/actions'
import './styles/index.scss'

// @todo: сделать пагинацию
const itemsPerPage = 100
@connect(state => ({
  isAuth: !!state.profile.user.id,
  user: {
    id: state.profile.user.id
  }
}), {
  setAuthToken,
  getInventory,
  sellDrops,
  takeDrops,
  setAvatar,
  linkAccount,
  toggleUserMenu,
  updateUserSettings
}, null, {withRef: true})
export class Inventory extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    getInventory: PropTypes.func.isRequired,
    onItemSelect: PropTypes.func,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  }

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      itemsSelected: [],
      filter: {},
      total: 0,
      page: 0
    }
  }

  componentWillMount () {
    this.getInventory()
  }

  getInventory () {
    this.props.getInventory(this.props.user.id, this.state.page, itemsPerPage, this.state.filter)
      .then(res => {
        this.setState({
          items: res.items,
          total: res.total
        })
      })
      .catch(() => {
        this.setState({isLoading: false})
      })
  }

  itemToSelected = (inventoryItem) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item !== inventoryItem),
      itemsSelected: [...prevState.itemsSelected, inventoryItem]
    }))
  }

  itemToInventory = (inventoryItem) => {
    this.setState(prevState => ({
      items: [inventoryItem, ...prevState.items],
      itemsSelected: prevState.itemsSelected.filter(item => item !== inventoryItem)
    }))
  }

  unSelectAllItems = () => {
    this.setState({
      items: [...this.state.items, ...this.state.itemsSelected],
      itemsSelected: []
    })
  }

  sellItems = () => {
    const dropIds = this.state.itemsSelected.map(i => i.id)
    this.props.sellDrops(dropIds).then(res => {
      this.setState({...this.state, itemsSelected: []})
    })
  }

  takeItems = () => {
    const dropIds = this.state.itemsSelected.map(i => i.id)
    this.props.takeDrops(dropIds).then(res => {
      this.setState({...this.state, itemsSelected: []})
    })
  }

  sumSelectedItems () {
    // todo
    if (this.state.itemsSelected.length === 0) {
      return {}
    }

    const amount = this.state.itemsSelected.reduce((p, i) => {
      p += +i.loot.prices[0].amount
      return p
    }, 0)
    const currency = this.state.itemsSelected[0].loot.prices[0].currency

    return {amount, currency}
  }

  render () {
    if (!this.props.isAuth) {
      return (
        <div>
          NOT AUTHORIZED
        </div>
      )
    }

    const sumSelectedItems = this.sumSelectedItems()
    return (
      (this.state.items.length === 0 && this.state.itemsSelected.length === 0)
        ? <div>
          No items
        </div>
        : <div className='inventory'>
          <InventoryContent items={this.state.items} onSelect={this.itemToSelected} />
          <InventoryContentSelected items={this.state.itemsSelected} onSelect={this.itemToInventory} sum={sumSelectedItems} sell={this.sellItems} take={this.takeItems} unSelect={this.unSelectAllItems} />
        </div>
    )
  }
}
