'use strict'
import { Component } from 'react'
import {
  EmailForm,
  PhoneForm,
  SecretCode,
  SocialAccountsList
} from 'src/components/Profile'
import { UserCard } from 'src/components/UserCard'

export class ProfileSettingsPage extends Component {
  render () {
    return (
      <main className='inner-page'>
        <header className='inner-page__header'>
          <h1 className='heading heading_lvl_1'>
            Профиль
          </h1>
        </header>
        <div className='inner-page__container'>
          <UserCard>
            {/*
            <button
              className='btn profile__change-page'>
              Игровые достижения
            </button>
*/}
          </UserCard>
          <div className='inner-page__content content box-decor'>
            <svg className='content__decor'>
              <line className='box-decor__line'
                x1='0' y1='100%'
                x2='100%' y2='0%' />
            </svg>
            <div className='content__secret-code'>
              <h2 className='heading heading_lvl_2'>
                Секретный код
              </h2>
              <SecretCode />
            </div>
            <div className='content__connect-account'>
              <h2 className='heading heading_lvl_2'>
                Привязать аккаунт
              </h2>
              <SocialAccountsList />
            </div>
            <div className='content__personal-info'>
              <h2 className='heading heading_lvl_2'>
                Личные даннные
              </h2>
              <PhoneForm />
              <EmailForm />
            </div>
          </div>
        </div>
      </main>

    )
  }
}
