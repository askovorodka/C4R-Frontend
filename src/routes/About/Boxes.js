'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import './styles/boxes.scss'

@translate(['about'])
class BoxesGrid extends Component {
  render () {
    const {t} = this.props
    const gridItemPath = 'assets/images/about/grid__item-image'
    return (
      <div className='boxes__grid grid'>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>
              {t('BOXES.GRID.POWER_POP.LINE1')}
              <br />
              {t('BOXES.GRID.POWER_POP.LINE2')}
              <br />
              {t('BOXES.GRID.POWER_POP.LINE3')}
              <br /><br />
              {t('BOXES.GRID.POWER_POP.LINE4')}
              <br />
              {t('BOXES.GRID.POWER_POP.LINE5')}
            </p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.POWER')}</span>
          <img className='grid__item-image' src={gridItemPath + '--1.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>
              {t('BOXES.GRID.SECRET_POP.LINE_1')}
              <br /><br />
              {t('BOXES.GRID.SECRET_POP.LINE_2')}
              <br />
              {t('BOXES.GRID.SECRET_POP.LINE_3')}
            </p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.SECRET')}</span>
          <img className='grid__item-image' src={gridItemPath + '--2.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>
              {t('BOXES.GRID.MONSTER_POP.LINE_1')}
              <br /><br />
              {t('BOXES.GRID.MONSTER_POP.LINE_2')}
              <br />
              {t('BOXES.GRID.MONSTER_POP.LINE_3')}
            </p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.MONSTER')}</span>
          <img className='grid__item-image' src={gridItemPath + '--3.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>{t('BOXES.GRID.NEW_POP')}</p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.NEW')}</span>
          <img className='grid__item-image' src={gridItemPath + '--4.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>{t('BOXES.GRID.SALE_POP')}</p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.SALE')}</span>
          <img className='grid__item-image' src={gridItemPath + '--5.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>{t('BOXES.GRID.SETS_POP')}</p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.SETS')}</span>
          <img className='grid__item-image' src={gridItemPath + '--6.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>{t('BOXES.GRID.BUILDS_POP')}</p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.BUILDS')}</span>
          <img className='grid__item-image' src={gridItemPath + '--7.png'} alt='' />
        </div>
        <div className='grid__item'>
          <div className='grid__item-hover'>
            <p className='grid__item-hover-capt'>{t('BOXES.GRID.COLLECTIONS_POP')}</p>
          </div>
          <span className='grid__item-caption'>{t('BOXES.GRID.COLLECTIONS')}</span>
          <img className='grid__item-image' src={gridItemPath + '--8.png'} alt='' />
        </div>
        <div className='grid__item'>
          <p>{t('boxes.grid.luck.line1')}<br />{t('BOXES.GRID.LUCK.LINE2')}</p>
        </div>
      </div>
    )
  }
}

@translate(['about'])
export class Boxes extends Component {
  render () {
    const {t} = this.props
    return (
      <section className='boxes'>
        <p className='boxes__description'>{t('BOXES.FIRST_DESCR')}</p>
        <p className='boxes__description'><a className='boxes__description-link' href='http://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'>http://store.steampowered.com/app/730/CounterStrike_Global_Offensive/</a></p>
        <p className='boxes__description'>{t('BOXES.THIRD_DESCR')}</p>
        <BoxesGrid />
      </section>
    )
  }
}
