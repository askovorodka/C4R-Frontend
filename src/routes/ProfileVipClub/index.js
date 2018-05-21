'use strict'
import { Component } from 'react'
import { VipClubPanel } from 'src/components/Profile'
import { UserCard } from 'src/components/UserCard'

export class ProfileVipClubPage extends Component {
  render () {
    return (
      <main className='inner-page'>
        <header className='inner-page__header'>
          <h1 className='heading heading_lvl_1'>
            VIP-Club
            <svg className='inner-page__icon'>
              <path className='inner-page__icon-elem'
                d='M6,22.5S3,14.7,1.5,11.3c1.6.5,4.3,1,5.9,1.5-.4.9-.8,2.1.1,2.9a3.36,3.36,0,0,0,1.4.5,2.62,2.62,0,0,0,1.7-.5,4.13,4.13,0,0,0,.7-1.1c.4-1.3-.3-1.9-.9-2.9,1.2-2,2.4-4,3.7-6.1,1.3,2.1,2.5,4.1,3.7,6.2-.7.8-1.4,1.6-1,2.8A2.4,2.4,0,0,0,20.2,16c1.3-.6,1.1-2,.5-3.1l5.8-1.5L22.1,22.6H6Z' />
            </svg>
          </h1>
        </header>
        <div className='inner-page__container'>
          <UserCard />
          <div className='inner-page__content content box-decor'>
            <VipClubPanel />
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
