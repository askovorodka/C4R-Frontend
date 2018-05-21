'use strict'

import { Component } from 'react'
import { ProfileMessages } from 'src/components/Profile'
import { UserCard } from 'src/components/UserCard'
import { api } from 'src/lib/api'

export class ProfileMessagesPage extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    this.getNotifications()
  }

  getNotifications () {
    api.getUserNotifications().then(res => {
      this.setState({notifications: res})
    })
  }

  render () {
    if (!this.state.notifications) {
      return null
    }

    return (
      <main className='inner-page'>
        <header className='inner-page__header'>
          <h1 className='heading heading_lvl_1'>
            Сообщения
            <svg className='inner-page__icon'>
              <rect className='inner-page__icon-elem' x='2px' y='4px' width='22' height='15' />
              <polyline className='inner-page__icon-elem' points='3 5 13 14 24 5' />
              <line className='inner-page__icon-elem' x1='22' y1='17' x2='17' y2='11' />
              <line className='inner-page__icon-elem' x1='10' y1='11' x2='5' y2='17' />
            </svg>
          </h1>
          <div className='inner-page__filters'>
            <span className='inner-page__filters-item'>
              Новые
            </span>
            <span className='inner-page__filters-item inner-page__filters-item_active'>
              Все
            </span>
          </div>
        </header>
        <div className='inner-page__container'>
          <UserCard />
          <div className='inner-page__content content box-decor'>
            <ProfileMessages messages={this.state.notifications} />
            <svg className='content__decor'>
              <line className='box-decor__line'
                x1='0' y1='100%'
                x2='100%' y2='0%' />
            </svg>
          </div>
        </div>
      </main>
    )
  }
}
