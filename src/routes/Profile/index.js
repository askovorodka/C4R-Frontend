import { Component } from 'react'
import {api} from 'src/lib/api'
import { UserCard } from 'src/components/UserCard'
import { DropHistory } from 'src/routes/User/DropHistory'
import { InventoryList } from 'src/components/Inventory/InventoryList'

export class Profile extends Component {

  constructor () {
    super()
    this.state = {
      anotherUser: {
        user: {},
        inventory: {
          items: [

          ]
        }
      }
    }
  }

  componentWillMount () {
    this.getAnotherUser(this.props.params.id)
  }

  getAnotherUser (userId) {
    api.getAnyProfile(userId).then(res => {this.setState({anotherUser: res}, () => console.log(this.state.anotherUser))})
  }

  render () {
    console.log('items ',this.state.anotherUser.inventory.items)
    return (
      <section className='profile-page'>
        <UserCard anotherUser={this.state.anotherUser.user}/>
        <InventoryList items={this.state.anotherUser.inventory.items} view='any_profile' />
      </section>
    )
  }
}
