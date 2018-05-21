'use strict'
import { Component } from 'react'
import { api } from 'src/lib/api'
import { InventoryItem } from 'src/components/Profile'
import { UserCard } from 'src/components/UserCard'
import { Select } from 'src/components/Select'

export class ProfileRatingsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cases_opened_total: 0,
      cases_opened_price_total: 0,
      cases_avg_price: 0,
      cases_favorite: {
        name: '',
        image_url: '',
        prices: {
          amount: 0,
          currency: ''
        }
      },
      skins_count: 0,
      best_skin: 0,
      skins_taken: 0,
      skins_taken_price: 0,
      pvp_played: 0,
      pvp_win: 0,
      quests_daily: 0,
      quests_weekly: 0,
      quests_mountly: 0,
      vip_cases_opened_total: 0,
      vip_cases_opened_price_total: 0
    }
  }

  componentDidMount () {
    this.getAchievements()
  }

  getAchievements () {
    api.getAchievements().then(t => {
      this.setState({
        cases_opened_total: t.achievements.cases_opened_total,
        cases_avg_price: t.achievements.cases_avg_price,
        cases_favorite: JSON.parse(t.achievements.cases_favorite),
        skins_count: t.achievements.skins_count,
        skins_taken: t.achievements.skins_taken,
        skins_taken_price: JSON.parse(t.achievements.skins_taken_price),
        pvp_played: t.achievements.pvp_played,
        pvp_win: t.achievements.pvp_win,
        quests_daily: t.achievements.quests_daily,
        quests_weekly: t.achievements.quests_weekly,
        quests_mountly: t.achievements.quests_mountly,
        vip_cases_opened_total: t.achievements.vip_cases_opened_total,
        vip_cases_opened_price_total: JSON.parse(
          t.achievements.vip_cases_opened_price_total)
      })
    })
  }

  render () {
    return (
      <main className='inner-page'>
        <header className='inner-page__header'>
          <h1>
            Игровые достижения
          </h1>
          <Select
            placeholder='За период'>
            <div className='select__content select__content_type_list'>
              Вариантики
            </div>
          </Select>
        </header>
        <div className='inner-page__container'>
          <UserCard>
            <button
              link={`/settings`}
              className='profile__change-page'>
              Профиль
            </button>
          </UserCard>
          <div className='inner-page__content content'>
            <h2>
              Кейсы
            </h2>
            <div
              className='content__container content__container_type_achievement'>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Открыто всего кейсов
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__cases_all.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.cases_opened_total}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading heading heading_lvl_3'>
                  Средняя цена кейса
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__cases_mid-price.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.cases_avg_price}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Любимый кейс
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__cases_favorite.svg' />
                <div className='achievement__value achievement__value_box'>
                  <InventoryItem
                    loot={{
                      image_url: 'imageurl',
                      name: this.state.cases_favorite.name,
                      prices: [{amount: 1000, currency: 'RUB'}]
                    }}
                    id={1} />
                </div>
              </div>
            </div>
            <h2 className='heading'>
              Скины
            </h2>
            <div
              className='content__container content__container_type_achievement'>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Выиграно скинов
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__skins_won.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.skins_count}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Лучший скин
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__skins_favorite.svg' />
                <div className='achievement__value achievement__value_box'>
                  <InventoryItem
                    loot={{
                      image_url: 'https:steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRd4cJ5ntbN9J7yjRrkqUdsMmzydoaVcAZoMFnX8lDqlbzohpC06Z6bynswuiMg43yPnUHjn1gSOeB59EOh',
                      name: 'item name',
                      prices: [{amount: 1000, currency: 'RUB'}]
                    }}
                    id={1} />
                </div>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Выведено скинов
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__skins_pulled-skins.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.skins_taken}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Выведено на сумму
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__skins_pulled-money.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.skins_taken_price.amount}
                </span>
              </div>
            </div>
            <h2>
              PVP
            </h2>
            <div
              className='content__container content__container_type_achievement'>
              <div className='achievement'>
                <h3 className='achievement__heading'>
                  Сыграно кейсов
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__pvp_played-cases.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.pvp_played}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading heading heading_lvl_3'>
                  Выиграно кейсов
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__pvp_won-cases.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.pvp_win}
                </span>
              </div>
            </div>
            <h2 className='heading heading_lvl_2'>
              Квесты
            </h2>
            <div
              className='content__container content__container_type_achievement'>
              <div className='achievement'>
                <h3 className='achievement__heading heading heading_lvl_3'>
                  Выполнено ежедневных
                </h3>
                <button
                  className='achievement__btn'>
                  <img className='achievement__icon-quest'
                    src='/images/achievement__quest_day.svg' />
                </button>
                <span className='achievement__value achievement__value_text'>
                  {this.state.quests_daily}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading heading heading_lvl_3'>
                  Выполнено еженедельных
                </h3>
                <button
                  className='achievement__btn btn_type_content'>
                  <img className='achievement__icon-quest'
                    src='/images/achievement__quest_week.svg' />
                </button>
                <span className='achievement__value achievement__value_text'>
                  {this.state.quests_weekly}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading heading heading_lvl_3'>
                  Выполнено ежемесячных
                </h3>
                <button
                  className='achievement__btn btn_type_content'>
                  <img className='achievement__icon-quest'
                    src='/images/achievement__quest_vip.svg' />
                </button>
                <span className='achievement__value achievement__value_text'>
                  {this.state.quests_mountly}
                </span>
              </div>
            </div>
            <h2 className='heading heading_lvl_2'>
              Квесты
            </h2>
            <div
              className='content__container content__container_type_achievement'>
              <div className='achievement'>
                <h3 className='achievement__heading '>
                  Открыто кейсов
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__vip_all.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.vip_cases_opened_total}
                </span>
              </div>
              <div className='achievement'>
                <h3 className='achievement__heading heading heading_lvl_3'>
                  Открыто на сумму
                </h3>
                <img className='achievement__icon'
                  src='/images/achievement__vip_money.svg' />
                <span className='achievement__value achievement__value_text'>
                  {this.state.vip_cases_opened_price_total.amount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
