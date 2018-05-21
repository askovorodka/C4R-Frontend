import { Component } from 'react'
import PropTypes from 'prop-types'
import { RouletteItems } from './RouletteItems'
import { RouletteInfo } from './RouletteInfo'
import { InfoIcon } from 'src/components/InfoIcon'
import './styles/roulette.scss'

export class Roulette extends Component {
  static propTypes = {
    box: PropTypes.object.isRequired,
    isAnimate: PropTypes.bool.isRequired
  }
  switchSections = () => {
    this.setState(prevState => ({isInfoOpened: !prevState.isInfoOpened}))
  }

  constructor () {
    super()
    this.state = {
      isInfoOpened: false
    }
  }

  render () {
    let content = <RouletteItems
      items={this.props.box.loot_sets}
      isAnimate={this.props.isAnimate}
      boxOpenResult={this.props.boxOpenResult}
    />
    if (this.state.isInfoOpened) {
      content = <RouletteInfo text={this.props.box.description} close={this.switchSections} />
    }
    return (
      <div className='roulette'>
        <header className='roulette__header'>
          <h1 className='roulette__name'>
            {this.props.box.name}
          </h1>
          <InfoIcon className='roulette__info-icon' onClick={this.switchSections} />
        </header>
        {content}
      </div>
    )
  }
}
