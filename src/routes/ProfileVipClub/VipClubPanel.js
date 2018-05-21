import { Component } from 'react'
import { translate } from 'react-i18next'

export class VipClubPanel extends Component {
  render () {
    return (
      <div className='vip-club'>
        <h2 className='vip-club__heading vip-club__heading_gold heading heading_lvl_2'>
          Вступай в VIP-клуб!
        </h2>
        <h2 className='vip-club__heading heading heading_lvl_2'>
          Получение первого уровня
        </h2>
        <ul className='vip-club__check-list form'>
          <li className='vip-club__check'>
            <p className='content__text'>
              Добавь Cases4Real.com к своему нику в Steam
            </p>
            <div className='vip-club__checkbox form__checkbox form__checkbox_checked' />
          </li>
          <li className='vip-club__check'>
            <p className='content__text'>
              Залогинься под своим Steam аккаунтом
            </p>
            <div className='vip-club__checkbox form__checkbox' />
          </li>
        </ul>
        <button
          className='btn vip-club__btn'>
          Проверить
        </button>
        <p className='vip-club__text content__text content__text_warning'>
          В случае изменения ника Steam, привилегии VIP будут отменены на 1 неделю до слудующего добавления Cases4Real.com к нику
        </p>
        <h2 className='vip-club__heading heading heading_lvl_2'>
          Привилегии VIP 1 уровень
        </h2>
        <p className='vip-club__text content__text'>
          Доступ к полке скрытых кейсов
        </p>
        <button
          className='btn vip-club__btn vip-club__btn_disabled'>
          Открыть
        </button>
        <p className='vip-club__text content__text'>
          VIP поддержка (время ответа 1 минута)
        </p>
        <button
          className='btn vip-club__btn'>
          Связаться
        </button>
      </div>
    )
  }
}
