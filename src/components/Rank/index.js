import React, { Component } from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import CountUp from 'react-countup'
import { setRankUpState } from 'components/Rank/actions'
import './index.scss'


@translate('boxes')
@connect(state => ({
  rank: state.rank
}), {setRankUpState})
export class Rank extends Component {
  close = () => {
    this.props.setRankUpState({visible: false})
  }

  render () {
    const {t} = this.props
    const {current, next, visible} = this.props.rank
    if (!visible) {
      return null
    }
    console.log('render')
    return (
      <div className='rank-up'>
        <div className='rank-up__head'>
          {t('RANK.CONGRATULATIONS')}
          <div className='rank-up__head__close-btn' onClick={this.close}>×</div>
        </div>
        <div className='rank-up__content'>
          <svg className='rank-up__content__experience rank-up__content__experience_bg'>
            <path d='M250 3, A 45 45, 0, 0, 1, 250 497, A 45 45, 0,1,1 250 3' />
          </svg>
          <svg className='rank-up__content__experience  rank-up__content__experience_fill_animate'>
            <path d='M250 3, A 45 45, 0, 0, 1, 250 497, A 45 45, 0,1,1 250 3' />
          </svg>
          <div className='current-rank'>
            <div className='current-rank__head'>
              {t('RANK.YOUR_RANK')}
            </div>
            <div className='current-rank__image'>
              <img src='https://cases4real.com/sites/default/files/icon5_4.png' />
            </div>
            <div className='current-rank__name'>
              {current.name}
            </div>
            <div className='current-rank__exp'>
              <CountUp className='current-rank__exp_start' start={0} end={current.exp}
                       duration={8.3} />
              &nbsp;/ {next.exp}
            </div>
          </div>
          <div className='next-rank'>
            <div className='next-rank__head'>
              {t('RANK.NEXT_RANK')}
            </div>
            <img
              className='next-rank__image'
              src='https://cases4real.com/sites/default/files/icon6_1.png'
            />
            <div className='next-rank__name'>
              {next.name}
            </div>
          </div>
          <button className='rank-up__btn rank-up__btn_aqua' onClick={this.close}>{t('RANK.CONTINUE')}</button>
        </div>
      </div>
    )
  }
}
