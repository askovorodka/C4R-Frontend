import { Component } from 'react'
import { translate } from 'react-i18next'
import { Price } from 'src/components/Price'
import { UserName } from 'src/components/UserCard/UserName'
import { UserImage } from 'src/components/UserCard/UserImage'

export class InviteForm extends Component {
  render () {
    return (
      <div className='invite'>
        <div className='invite__container'>
          <h2 className='invite__heading heading heading_lvl_2'>
            Реферальная ссылка
          </h2>
          <div className='invite__link form'>
            <input className='form__input invite__input' type='link' />
            <span className='invite__copy'>
              Скопировать
            </span>
          </div>
          <p className='content__text'>
            Делитесь ссылкой на форумах, в блогах, в мессанджерах, через СМС
          </p>
        </div>
        <div className='invite__container'>
          <h2 className='invite__heading heading heading_lvl_2'>
            Поделиться ссылкой в соц. сетях
          </h2>
          <div className='social-accounts social-accounts_page_invite'>
            <button
              className='btn social-accounts__item social-accounts__item_net_vk' />
            <button
              className='btn social-accounts__item social-accounts__item_net_fb' />
          </div>
        </div>
        <div className='invite__container'>
          <div className='invite__table'>
            <h2 className='invite__heading heading_lvl_2'>
              Приглашённые
            </h2>
            <div className='invite__row invite__row_new'>
              <UserImage
                customClass='invite__user-image'
                image={'http://stage-ng-api.cases4real.com/images/avatars/598c98ff95ac3722219193.png'} />
              <UserName
                customClass='invite__user-name'
                name={'user'} />
              <Price customClass='invite__price invite__price_position_table' amount='10000' currency='RUB' />
            </div>
            <div className='invite__row'>
              <UserImage
                customClass='invite__user-image'
                image={'http://stage-ng-api.cases4real.com/images/avatars/598c98ff95ac3722219193.png'} />
              <UserName
                customClass='invite__user-name'
                name={'user'} />
              <Price customClass='invite__price invite__price_position_table' amount='10000' currency='RUB' />
            </div>
            <div className='invite__row'>
              <UserImage
                customClass='invite__user-image'
                image={'http://stage-ng-api.cases4real.com/images/avatars/598c98ff95ac3722219193.png'} />
              <UserName
                customClass='invite__user-name'
                name={'user'} />
              <Price customClass='invite__price invite__price_position_table' amount='10000' currency='RUB' />
            </div>
          </div>
        </div>
        <div className='invite__container'>
          <div className='invite__table'>
            <h2 className='invite__heading heading_lvl_2'>
              % от платежей
            </h2>
            <div className='invite__row invite__row_new'>
              <UserImage
                customClass='invite__user-image'
                image={'http://stage-ng-api.cases4real.com/images/avatars/598c98ff95ac3722219193.png'} />
              <UserName
                customClass='invite__user-name'
                name={'user'} />
              <Price customClass='invite__price invite__price_position_table' amount='10000' currency='RUB' />
            </div>
            <div className='invite__row'>
              <UserImage
                customClass='invite__user-image'
                image={'http://stage-ng-api.cases4real.com/images/avatars/598c98ff95ac3722219193.png'} />
              <UserName
                customClass='invite__user-name'
                name={'user'} />
              <Price customClass='invite__price invite__price_position_table' amount='10000' currency='RUB' />
            </div>
            <div className='invite__row'>
              <UserImage
                customClass='invite__user-image'
                image={'http://stage-ng-api.cases4real.com/images/avatars/598c98ff95ac3722219193.png'} />
              <UserName
                customClass='invite__user-name'
                name={'user'} />
              <Price
                customClass='invite__price invite__price_position_table'
                amount='10000'
                currency='RUB' />
            </div>
          </div>
        </div>
        <button
          className='invite__btn btn'>
          Забрать все -
          <Price
            customClass='invite__price invite__price_position_btn'
            amount='79900'
            currency='RUB' />
        </button>
      </div>
    )
  }
}
