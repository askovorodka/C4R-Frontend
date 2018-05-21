import { Component } from 'react'
import { connect } from 'react-redux'
import { Liner } from './Liner'
import { TopBtns } from './TopBtns'
import { LrAnim } from './LrAnim'
import { Items } from './Items'
import { Categories } from './Categories'
import { translate } from 'react-i18next'
import { Cthulhu, Ragnarok, Scorpion, Snake, Vampire } from './Monsters'
import vampireBg from './assets/caseRollPageVampire_bg.jpg'
import cthulhuBg from './assets/caseRollPage_bg.jpg'
import ragnarokBg from './assets/caseRollPageRag_bg.jpg'
import scorpionBg from './assets/caseRollPageSnake_bg.jpg'

import './styles/styles.scss'

const BG = {
  vampire: vampireBg,
  cthulhu: cthulhuBg,
  ragnarok: ragnarokBg,
  scorpion: scorpionBg,
  snake: scorpionBg
}

const TYPE = {
  vampire: Vampire,
  cthulhu: Cthulhu,
  ragnarok: Ragnarok,
  scorpion: Scorpion,
  snake: Snake
}

@translate(['boxes'])
@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
}))
export class Monster extends Component {
  render () {
    const MonsterType = TYPE[this.props.type]
    const MonsterBg = BG[this.props.type]
    const {t} = this.props
    return (
      <div className={this.props.type}>
        <div className={`monster`}>
          <img src={MonsterBg} alt={this.props.type}/>
          <div className='case-roll'>
            {this.props.type !== 'vampire' && <div className={`case-roll__capt case-roll__capt--${this.props.currentLanguage}`}/>}
            <div className={`case-roll_center`}>
              <MonsterType {...this.props} />
              <TopBtns startRoll='false'/>
              <Liner startRoll='false' finish='false'/>
              <LrAnim result='false' startRoll='false'
                      openTimes={[4500, 5000, 5500, 7500, 8000, 8500, 10500, 11000, 11500]} right='true'
                      pricesItems={[666666, 999999, 888888, 777777]}/>
              <Items result='false' itemW='120' itemH='120' itemM='15' monsterCase='' rows='3' colls='3'/>
              <Categories result='false' roulleteSettings={{colls: 3, itemH: 120, itemW: 120, itemM: 15, rows: 3}}
                          refreshInitial='false' finish='false'/>
              <CaseBorder/>
            </div>
          </div>
        </div>
        <CaseBtn finish={false} caseRollBtnsVis={true} addClass={this.props.type}/>
        <div className={`case-roll_final-foot_text`}>
          {t('SPECIAL_CASES.ITEMS_TO_INVENTORY')}
        </div>
      </div>
    )
  }
}

@translate(['boxes'])
class CaseBtn extends Component {

  sell = (e) => {
    console.log('sell')
  }

  render () {
    const {t} = this.props
    return (
      this.props.finish ? <div className={`case-roll_btns`}>
          <button className='btn btn-monster btn-monster-type2' onClick={this.sell}>
            <div className='btn-monster_wrap'>
              <div className='btn-monster_lenta'></div>
              <span>{t('SPECIAL_CASES.SELL_ALL')} </span> <span>{/*{result.sell_price}*/}</span></div>
          </button>
          <button className='btn btn-monster btn-monster-type2' onClick={this.sell}>
            <div className='btn-monster_wrap'><span>{t('SPECIAL_CASES.OPEN_ANY')}</span>
              <span>{/*{monsterCase.case_price}*/}</span></div>
          </button>
        </div>
        : <div className={`case-roll_btns btn-${this.props.addClass}`}>
          <button
            className={`btn btn-monster btn-monster-type1 ${(!this.props.caseRollBtnsVis) ? 'btn-monster-hidden' : ''}`}
            onClick={this.sell}>
            <div className='btn-monster_wrap'>
              <span>{t('SPECIAL_CASES.OPEN')}</span>
              <span>{/*{props.monsterCase.case_price}*/}600 Р</span>
            </div>
          </button>
        </div>
    )
  }
}

const CaseBorder = () => {
  return (
    <div className="case-roll_borders">
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
}
