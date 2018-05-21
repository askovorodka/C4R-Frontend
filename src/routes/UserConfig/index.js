'use strict'
import { Component } from 'react'
import { UserConfigForm } from 'src/components/Profile'
import { UserCard } from 'src/components/UserCard'

export class UserConfigPage extends Component {
  render () {
    return (
      <main className='inner-page'>
        <header className='inner-page__header'>
          <h1 className='heading heading_lvl_1'>
            Настройки
            <svg className='inner-page__icon'>
              <path className='inner-page__icon-elem'
                d='M22.3,8.1a4.87,4.87,0,0,1,1.2.1.75.75,0,0,1,.7.5c.3.7.5,1.3.8,1.9a.78.78,0,0,1-.1.8,2.18,2.18,0,0,1-.4.5c-.3.4-.7.7-1,1.1a.37.37,0,0,0-.1.3v1.5a.37.37,0,0,0,.1.3c.3.4.7.7,1,1.1a2.18,2.18,0,0,1,.4.5.76.76,0,0,1,.1.9c-.3.6-.5,1.2-.8,1.9a.76.76,0,0,1-.8.6H21.6a.71.71,0,0,0-.6.3,6,6,0,0,1-.8.8.52.52,0,0,0-.2.4,13.4,13.4,0,0,1-.1,2c0,.4-.2.6-.6.8a10.84,10.84,0,0,0-1.9.8.59.59,0,0,1-.7-.1c-.2-.1-.3-.3-.5-.4l-1.1-1.1a.37.37,0,0,0-.3-.1H13.4a.37.37,0,0,0-.3.1c-.4.3-.7.7-1.1,1a2.18,2.18,0,0,1-.5.4.76.76,0,0,1-.9.1c-.6-.3-1.2-.5-1.9-.8-.4-.1-.5-.4-.6-.8a10.82,10.82,0,0,1,0-1.8.6.6,0,0,0-.3-.6l-.9-.9c-.1-.2-.2-.2-.3-.2-.7,0-1.4-.1-2.1-.1a.66.66,0,0,1-.7-.6A15.39,15.39,0,0,0,3,17.4a.75.75,0,0,1,.1-.8c.1-.2.3-.3.4-.5L4.6,15a.37.37,0,0,0,.1-.3V13.3a.37.37,0,0,0-.1-.3c-.3-.4-.7-.7-1-1.1a2.18,2.18,0,0,1-.4-.5.76.76,0,0,1-.1-.9c.3-.6.5-1.2.8-1.9a.67.67,0,0,1,.7-.5H6.4c.3-.1.5-.1.7-.3L7.9,7A.76.76,0,0,0,8,6.6c0-.7.1-1.4.1-2.1a.75.75,0,0,1,.5-.7,11.92,11.92,0,0,0,2-.8.59.59,0,0,1,.7.1,2.18,2.18,0,0,1,.5.4l1.1,1.1a.37.37,0,0,0,.3.1h1.4a.37.37,0,0,0,.3-.1c.4-.3.7-.7,1.1-1,.2-.1.3-.3.5-.4a.94.94,0,0,1,.9-.1c.6.3,1.2.5,1.9.8.4.2.6.4.6.8V6.5a.71.71,0,0,0,.3.6l.9.9h.3a2.77,2.77,0,0,0,.9.1ZM14,18.9A4.9,4.9,0,1,0,9.1,14,4.91,4.91,0,0,0,14,18.9Z' />
            </svg>
          </h1>
        </header>
        <div className='inner-page__container'>
          <UserCard />
          <div className='inner-page__content content box-decor'>
            <UserConfigForm />
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