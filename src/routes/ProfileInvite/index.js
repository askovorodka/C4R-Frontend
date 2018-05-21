'use strict'
import { Component } from 'react'
import { InviteForm } from 'src/components/Profile'
import { UserCard } from 'src/components/UserCard'

export class ProfileInvitePage extends Component {
  render () {
    return (
      <main className='inner-page'>
        <header className='inner-page__header'>
          <h1 className='heading heading_lvl_1'>
            Пригласи друга
          </h1>
        </header>
        <div className='inner-page__container'>
          <UserCard />

          <div className='inner-page__content content box-decor'>
            <InviteForm />
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
