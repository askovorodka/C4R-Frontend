'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import { QuestItem } from './QuestItem'
import { Link } from 'react-dom'

export class ProfileQuestsPage extends Component {
  render () {
    return (
      <main className='inner-page'>
        <h1 className='visibility-hidden'>Quests</h1>
        <div className='quests'>
          <div className='quests__category'>
            <div className='quests__theme'>
              <h2 className='quests__heading heading heading_lvl_2'>
                Ежедневные
                <svg className='quests__info-icon info-icon'>
                  <path className='info-icon__elem' d='M7.9,17.8a5.85,5.85,0,0,1-1.3.2.7.7,0,0,1-.7-.9,4.18,4.18,0,0,1,.4-1c.4-.8.8-1.7,1.2-2.5a7.42,7.42,0,0,0,.7-2.1A3.43,3.43,0,0,0,5.7,7.7,6.52,6.52,0,0,0,.3,8.8c-.3.3-.4.6-.2.9s.4.4.9.3a6.75,6.75,0,0,1,1.4-.2.68.68,0,0,1,.7.7c-.1.4-.2.7-.3,1-.4.9-.9,1.8-1.3,2.6a5.55,5.55,0,0,0-.6,2.2,3.3,3.3,0,0,0,2.5,3.6,5.84,5.84,0,0,0,5.3-1.1.86.86,0,0,0,.3-.9A1.33,1.33,0,0,0,7.9,17.8ZM7.1,0A3.16,3.16,0,0,0,3.9,3.2,3.16,3.16,0,0,0,7.1,6.4a3.16,3.16,0,0,0,3.2-3.2A3.16,3.16,0,0,0,7.1,0Z' />
                  Info
                </svg>
              </h2>
              <svg className='quests__theme-img'>
                <path
                  className='quests__theme-img-elem'
                  d='M24.8,4.8a5.8,5.8,0,0,0-1.2-2.9,2.46,2.46,0,0,0-3.5-.7,7,7,0,0,0-1.6,1.4,13,13,0,0,0-2.8,8.3,19.58,19.58,0,0,0,.3,2c0,.1.1.3.2.3,1.7.5,3.3,1,5,1.5a.37.37,0,0,0,.3-.1,13.88,13.88,0,0,0,2.4-3.4A10.94,10.94,0,0,0,24.8,4.8ZM12.1,19.1c.1-.7.2-1.5.3-2.2a13.62,13.62,0,0,0-2.1-7A7.47,7.47,0,0,0,7.8,7.4,2.45,2.45,0,0,0,4.6,8a4.19,4.19,0,0,0-.9,1.4,10.77,10.77,0,0,0,0,7.3,12.88,12.88,0,0,0,2.8,4.2.6.6,0,0,0,.4.1c1.6-.5,3.2-.9,4.8-1.4C12,19.5,12.1,19.4,12.1,19.1ZM8.4,22.6c-.3.1-.7.1-.8.3s0,.6,0,.9a4.9,4.9,0,0,0,1,2.6,2.55,2.55,0,0,0,2.6.9,2.35,2.35,0,0,0,2-1.8,6.32,6.32,0,0,0-.8-4C11.1,21.8,9.7,22.2,8.4,22.6Zm6.3-4.2a2.46,2.46,0,0,0,1.9,2.4,2.62,2.62,0,0,0,3-1.2,3.13,3.13,0,0,0,.5-1,5.7,5.7,0,0,0,.4-2.2c-1.6-.5-3.3-.9-4.9-1.4A6,6,0,0,0,14.7,18.4Z' />
              </svg>
              <span className='quests__theme-name quests__theme-name_pos_top'>
              Квесты
            </span>
              <div className='quests__stat'>
                <button
                  className='btm quests__btn'>
                  <img className='quests__btn-img'
                    src='/images/achievement__quest_day.svg'
                    alt='Статистика достижений' />
                </button>
                <span className='content__text'>
                Статистика достижений
              </span>
              </div>
            </div>
            <div className='quests__container'>
              <QuestItem customClass='quests__quest-item' isFinished />
              <QuestItem customClass='quests__quest-item' isFinished={false} />
              <QuestItem customClass='quests__quest-item' isFinished />
            </div>
          </div>
          <div className='quests__category'>
            <div className='quests__theme'>
              <h2 className='quests__heading heading heading_lvl_2'>
                Еженедельные
                <svg className='quests__info-icon info-icon'>
                  <path className='info-icon__elem' d='M7.9,17.8a5.85,5.85,0,0,1-1.3.2.7.7,0,0,1-.7-.9,4.18,4.18,0,0,1,.4-1c.4-.8.8-1.7,1.2-2.5a7.42,7.42,0,0,0,.7-2.1A3.43,3.43,0,0,0,5.7,7.7,6.52,6.52,0,0,0,.3,8.8c-.3.3-.4.6-.2.9s.4.4.9.3a6.75,6.75,0,0,1,1.4-.2.68.68,0,0,1,.7.7c-.1.4-.2.7-.3,1-.4.9-.9,1.8-1.3,2.6a5.55,5.55,0,0,0-.6,2.2,3.3,3.3,0,0,0,2.5,3.6,5.84,5.84,0,0,0,5.3-1.1.86.86,0,0,0,.3-.9A1.33,1.33,0,0,0,7.9,17.8ZM7.1,0A3.16,3.16,0,0,0,3.9,3.2,3.16,3.16,0,0,0,7.1,6.4a3.16,3.16,0,0,0,3.2-3.2A3.16,3.16,0,0,0,7.1,0Z' />
                  Info
                </svg>
              </h2>
              <svg className='quests__theme-img'>
                <path
                  className='quests__theme-img-elem'
                  d='M24.8,4.8a5.8,5.8,0,0,0-1.2-2.9,2.46,2.46,0,0,0-3.5-.7,7,7,0,0,0-1.6,1.4,13,13,0,0,0-2.8,8.3,19.58,19.58,0,0,0,.3,2c0,.1.1.3.2.3,1.7.5,3.3,1,5,1.5a.37.37,0,0,0,.3-.1,13.88,13.88,0,0,0,2.4-3.4A10.94,10.94,0,0,0,24.8,4.8ZM12.1,19.1c.1-.7.2-1.5.3-2.2a13.62,13.62,0,0,0-2.1-7A7.47,7.47,0,0,0,7.8,7.4,2.45,2.45,0,0,0,4.6,8a4.19,4.19,0,0,0-.9,1.4,10.77,10.77,0,0,0,0,7.3,12.88,12.88,0,0,0,2.8,4.2.6.6,0,0,0,.4.1c1.6-.5,3.2-.9,4.8-1.4C12,19.5,12.1,19.4,12.1,19.1ZM8.4,22.6c-.3.1-.7.1-.8.3s0,.6,0,.9a4.9,4.9,0,0,0,1,2.6,2.55,2.55,0,0,0,2.6.9,2.35,2.35,0,0,0,2-1.8,6.32,6.32,0,0,0-.8-4C11.1,21.8,9.7,22.2,8.4,22.6Zm6.3-4.2a2.46,2.46,0,0,0,1.9,2.4,2.62,2.62,0,0,0,3-1.2,3.13,3.13,0,0,0,.5-1,5.7,5.7,0,0,0,.4-2.2c-1.6-.5-3.3-.9-4.9-1.4A6,6,0,0,0,14.7,18.4Z' />
              </svg>
              <span className='quests__theme-name quests__theme-name_pos_bottom'>
              Квесты
            </span>
              <div className='quests__stat'>
                <button
                  className='quests__btn btn'>
                  <img className='quests__btn-img'
                    src='/images/achievement__quest_week.svg'
                    alt='Статистика достижений' />
                </button>
                <span className='content__text'>
                Статистика достижений
              </span>
              </div>
            </div>
            <QuestItem customClass='quests__quest-item' isFinished={false} />
            <QuestItem customClass='quests__quest-item' isFinished />
            <QuestItem customClass='quests__quest-item' isFinished />
          </div>
          <div className='quests__category'>
            <div className='quests__theme'>
              <h2 className='quests__heading heading heading_lvl_2'>
                VIP
                <svg className='quests__info-icon info-icon'>
                  <path className='info-icon__elem' d='M7.9,17.8a5.85,5.85,0,0,1-1.3.2.7.7,0,0,1-.7-.9,4.18,4.18,0,0,1,.4-1c.4-.8.8-1.7,1.2-2.5a7.42,7.42,0,0,0,.7-2.1A3.43,3.43,0,0,0,5.7,7.7,6.52,6.52,0,0,0,.3,8.8c-.3.3-.4.6-.2.9s.4.4.9.3a6.75,6.75,0,0,1,1.4-.2.68.68,0,0,1,.7.7c-.1.4-.2.7-.3,1-.4.9-.9,1.8-1.3,2.6a5.55,5.55,0,0,0-.6,2.2,3.3,3.3,0,0,0,2.5,3.6,5.84,5.84,0,0,0,5.3-1.1.86.86,0,0,0,.3-.9A1.33,1.33,0,0,0,7.9,17.8ZM7.1,0A3.16,3.16,0,0,0,3.9,3.2,3.16,3.16,0,0,0,7.1,6.4a3.16,3.16,0,0,0,3.2-3.2A3.16,3.16,0,0,0,7.1,0Z' />
                  Info
                </svg>
              </h2>
              <span className='quests__progress'>
                <span className='quests__progress-text'>
                Прогресс
              </span>
                <span className='quests__progress-text'>
                  <span className='quests__progress-done'>
                  1
                </span>
                  /
                <span className='quests__progress-done'>
                  3
                </span>
                </span>
                <span className='quests__progress-text'>
                (33%)
              </span>
              </span>
              <svg className='quests__theme-img'>
                <path
                  className='quests__theme-img-elem'
                  d='M24.8,4.8a5.8,5.8,0,0,0-1.2-2.9,2.46,2.46,0,0,0-3.5-.7,7,7,0,0,0-1.6,1.4,13,13,0,0,0-2.8,8.3,19.58,19.58,0,0,0,.3,2c0,.1.1.3.2.3,1.7.5,3.3,1,5,1.5a.37.37,0,0,0,.3-.1,13.88,13.88,0,0,0,2.4-3.4A10.94,10.94,0,0,0,24.8,4.8ZM12.1,19.1c.1-.7.2-1.5.3-2.2a13.62,13.62,0,0,0-2.1-7A7.47,7.47,0,0,0,7.8,7.4,2.45,2.45,0,0,0,4.6,8a4.19,4.19,0,0,0-.9,1.4,10.77,10.77,0,0,0,0,7.3,12.88,12.88,0,0,0,2.8,4.2.6.6,0,0,0,.4.1c1.6-.5,3.2-.9,4.8-1.4C12,19.5,12.1,19.4,12.1,19.1ZM8.4,22.6c-.3.1-.7.1-.8.3s0,.6,0,.9a4.9,4.9,0,0,0,1,2.6,2.55,2.55,0,0,0,2.6.9,2.35,2.35,0,0,0,2-1.8,6.32,6.32,0,0,0-.8-4C11.1,21.8,9.7,22.2,8.4,22.6Zm6.3-4.2a2.46,2.46,0,0,0,1.9,2.4,2.62,2.62,0,0,0,3-1.2,3.13,3.13,0,0,0,.5-1,5.7,5.7,0,0,0,.4-2.2c-1.6-.5-3.3-.9-4.9-1.4A6,6,0,0,0,14.7,18.4Z' />
              </svg>
              <span className='quests__theme-name quests__theme-name_pos_top'>
              Квесты
            </span>
              <div className='quests__stat'>
                <button
                  className='btn quests__btn'>
                  <img className='quests__btn-img'
                    src='/images/achievement__quest_vip.svg'
                    alt='Статистика достижений' />
                </button>
                <span className='content__text'>
                Статистика достижений
              </span>
              </div>
            </div>
            <QuestItem customClass='quests__quest-item' isFinished />
            <QuestItem customClass='quests__quest-item' isFinished />
            <QuestItem customClass='quests__quest-item' isFinished={false} />
          </div>
          <div className='quests__category'>
            <div className='quests__theme'>
              <h2 className='quests__heading heading heading_lvl_2'>
                Партнерские
                <svg className='quests__info-icon info-icon'>
                  <path className='info-icon__elem' d='M7.9,17.8a5.85,5.85,0,0,1-1.3.2.7.7,0,0,1-.7-.9,4.18,4.18,0,0,1,.4-1c.4-.8.8-1.7,1.2-2.5a7.42,7.42,0,0,0,.7-2.1A3.43,3.43,0,0,0,5.7,7.7,6.52,6.52,0,0,0,.3,8.8c-.3.3-.4.6-.2.9s.4.4.9.3a6.75,6.75,0,0,1,1.4-.2.68.68,0,0,1,.7.7c-.1.4-.2.7-.3,1-.4.9-.9,1.8-1.3,2.6a5.55,5.55,0,0,0-.6,2.2,3.3,3.3,0,0,0,2.5,3.6,5.84,5.84,0,0,0,5.3-1.1.86.86,0,0,0,.3-.9A1.33,1.33,0,0,0,7.9,17.8ZM7.1,0A3.16,3.16,0,0,0,3.9,3.2,3.16,3.16,0,0,0,7.1,6.4a3.16,3.16,0,0,0,3.2-3.2A3.16,3.16,0,0,0,7.1,0Z' />
                  Info
                </svg>
              </h2>
              <svg className='quests__theme-img'>
                <path
                  className='quests__theme-img-elem'
                  d='M24.8,4.8a5.8,5.8,0,0,0-1.2-2.9,2.46,2.46,0,0,0-3.5-.7,7,7,0,0,0-1.6,1.4,13,13,0,0,0-2.8,8.3,19.58,19.58,0,0,0,.3,2c0,.1.1.3.2.3,1.7.5,3.3,1,5,1.5a.37.37,0,0,0,.3-.1,13.88,13.88,0,0,0,2.4-3.4A10.94,10.94,0,0,0,24.8,4.8ZM12.1,19.1c.1-.7.2-1.5.3-2.2a13.62,13.62,0,0,0-2.1-7A7.47,7.47,0,0,0,7.8,7.4,2.45,2.45,0,0,0,4.6,8a4.19,4.19,0,0,0-.9,1.4,10.77,10.77,0,0,0,0,7.3,12.88,12.88,0,0,0,2.8,4.2.6.6,0,0,0,.4.1c1.6-.5,3.2-.9,4.8-1.4C12,19.5,12.1,19.4,12.1,19.1ZM8.4,22.6c-.3.1-.7.1-.8.3s0,.6,0,.9a4.9,4.9,0,0,0,1,2.6,2.55,2.55,0,0,0,2.6.9,2.35,2.35,0,0,0,2-1.8,6.32,6.32,0,0,0-.8-4C11.1,21.8,9.7,22.2,8.4,22.6Zm6.3-4.2a2.46,2.46,0,0,0,1.9,2.4,2.62,2.62,0,0,0,3-1.2,3.13,3.13,0,0,0,.5-1,5.7,5.7,0,0,0,.4-2.2c-1.6-.5-3.3-.9-4.9-1.4A6,6,0,0,0,14.7,18.4Z' />
              </svg>
              <span className='quests__theme-name quests__theme-name_pos_bottom'>
              Задания
            </span>
              <div className='quests__stat'>
                <button
                  className='btn quests__btn'>
                  <img className='quests__btn-img'
                    src='/images/achievement__quest_vip.svg'
                    alt='Статистика достижений' />
                </button>
                <span className='content__text'>
                Статистика достижений
              </span>
              </div>
            </div>
            <Link
              className='quests__link'
              to='#'>
              Для выполнения партнёрских заданий перейдите по ссылке
            </Link>
          </div>
        </div>
      </main>
    )
  }
}
