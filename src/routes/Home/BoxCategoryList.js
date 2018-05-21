'use strict'
import { Component } from 'react'
import { BoxCategory } from '../../routes/Home/BoxCategory'
import { Box } from './BoxTeaser'
import { api } from '../../lib/api'
import { getChargedAction } from './action'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'

@translate(['boxes'])
@connect(state => ({
  chargedInfo: state.chargedInfo
}), {getChargedAction})

export class BoxCategoryList extends Component {

  componentDidMount() {
    this.props.getChargedAction()
    this.getCategories()
  }

  getCategories = () => {
    api.getBoxes().then(categories => {
      this.setState({categories})
    })
  }

  render = () => {
    const {dailyVisit, loseDrop, jokerDrop} = this.props.chargedInfo
    console.log('box ', this.state.categories)
    return (
      <section className={'box-category-list'}>
        <h1 className='box-category-list__heading'>
          {this.props.t('CATEGORY_LIST.HEADING')}
        </h1>
        <BoxCategory category_name='POWER' view='long'>
          <Box charge={dailyVisit.currentScores} lvl={dailyVisit.levelNumber} color='#e58633' view='charged' name={this.props.t('POWER.HOMECOMING')} mask={`dailyVisit/case_mask_${dailyVisit.levelNumber}.png`} light='dailyVisit/case_light.png'/>
          <Box charge={loseDrop.currentScores} lvl={loseDrop.levelNumber} color='#0e5d9c' view='charged' name={this.props.t('POWER.A_NEW_HOPE')} mask={`loseDrop/case_mask_${dailyVisit.levelNumber}.png`} light='loseDrop/case_light.png' />
          <Box charge={jokerDrop.currentScores} lvl={jokerDrop.levelNumber} color='#05cc69' view='charged' name={this.props.t('POWER.JOKES_ON_YOU')} mask={`jokerDrop/case_mask_${dailyVisit.levelNumber}.png`} light='jokerDrop/case_light.png'  />
        </BoxCategory>
        <BoxCategory category_name='MONSTER' view='long'>
          <Box view='monster' name={this.props.t('MONSTER.COBRA')} type='snake'/>
          <Box view='monster' name={this.props.t('MONSTER.SCORPION')} type='scorpion'/>
          <Box view='monster' name={this.props.t('MONSTER.VAMPIRE')} type='vampire'/>
          <Box view='monster' name={this.props.t('MONSTER.CTHULHU')} type='cthulhu'/>
          <Box view='monster' name={this.props.t('MONSTER.RAGNAROK')} type='ragnarok'/>
        </BoxCategory>
        <BoxCategory category_name='SECRET' view='long'>
          <Box view='secret' amountOfTwist='0' caseName={this.props.t('SPECIAL_CASES.ROOKIE')} currencyCase='RUB' priceCase='100' imageName='vc_1' animName='vc_anim_1' caseColor='#ff1d49' currentRang='2' type='punk'/>
          <Box view='secret' amountOfTwist='1' caseName={this.props.t('SPECIAL_CASES.EXPERIENCED')} currencyCase='RUB' priceCase='300' imageName='vc_2' animName='vc_anim_2' caseColor='#773eea' currentRang='2' type='expert'/>
          <Box view='secret' amountOfTwist='2' caseName={this.props.t('SPECIAL_CASES.MANIAC')} currencyCase='RUB' priceCase='1000' imageName='vc_3' animName='vc_anim_3' caseColor='#2c8de9' currentRang='2' type='maniac'/>
          <Box view='secret' amountOfTwist='2' caseName={this.props.t('SPECIAL_CASES.CYBERGAMER')} currencyCase='RUB' priceCase='2600' imageName='vc_4' animName='vc_anim_4' caseColor='#13e1f4' currentRang='2' type='cyber'/>
          <Box view='secret' amountOfTwist='3' caseName={this.props.t('SPECIAL_CASES.CHEATERS_CASE')} currencyCase='RUB' priceCase='7000' imageName='vc_5' animName='vc_anim_5' caseColor='#ffb53e' currentRang='0' type='cheat'/>
          <Box view='secret' amountOfTwist='3' caseName={this.props.t('SPECIAL_CASES.GABEN')} currencyCase='RUB' priceCase='14000' imageName='vc_6' animName='vc_anim_6' caseColor='#ff1c97' currentRang='0' type='gaben'/>
        </BoxCategory>
        {
          this.state.categories.map((category, index) =>
          <BoxCategory key={category.id} view='long' {...category}>
            {category.boxes.length !== 0 && category.boxes.map(box => <Box key={box.id} saleType={`battle_winner-${this.props.currentLanguage}`} {...box} />)}
          </BoxCategory>)
        }
      </section>
    )
  }

  constructor (props) {
    super(props)
    this.state = {categories: []}
  }

}
