import { Component } from 'react'
import PropTypes from 'prop-types'
import { injectStyle } from 'components/InjectStyle/index'
import './styles/roulette-items.scss'

export class RouletteItems extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isAnimate: PropTypes.bool.isRequired,
    boxOpenResult: PropTypes.object
  }

  startAnimation = () => {
    const randomOffset = getRandomInt(-100, 100)
    const animationWidth =
      `
      @keyframes roulette-item {
        100% {
          transform: translateX(-${5017 + randomOffset}px);
        }
      }
      `
    injectStyle(animationWidth)
  }

  insertDrop = (rouletteItems, key) => (
    rouletteItems[key] =
      <RouletteItem item={this.props.boxOpenResult.drops.items[0].loot} key={this.props.boxOpenResult.id} />
  )

  render () {
    let items, animationClassName = ''
    if (this.props.items[0]) {
      items = this.props.items[0].loots.map(item => <RouletteItem item={item} key={item.id} />)
    }

    if (this.props.isAnimate) {
      animationClassName = 'roulette-items_animate'
      // по умолчанию кидает на 24 элемент массива, ширина для анимации 5017
      this.insertDrop(items, 23)
      this.startAnimation()
    }

    return (
      <div className={`roulette-items ${animationClassName}`}>
        {items}
        <div className='roulette-items__scale' />
      </div>
    )
  }
}

const RouletteItem = ({item}) => {
  let quality = ''
  quality = item.quality
  // dev
  quality = 'FN'
  const shotsNumber = Math.floor(Math.random() * 4 + 1)
  return (
    <div className={`roulette-item roulette-item_quality_${quality}`}>
      <svg className='roulette-item__target'>
        <path className='roulette-item__target-elem'
          d='M232.1,398.4H4s.7-145.6,0-210.5c-.2-18.9,7.8-32,23.1-40.7C39.7,140,74.5,121.7,82,118c3.4-1.7,4.4-5.1,4.7-8.6.9-9.8-7.2-54-7.7-66.7-.9-19.5,12-34.6,31.1-39,20.5-4.7,45.3,12.6,46,34.9.5,14.8-7.3,60.9-7.8,69.6-.3,4.9,1.8,8.7,7.1,10.9,16.4,6.9,63.3,33.3,70.6,43a30.24,30.24,0,0,1,6.2,17.8C232.3,186.3,232.1,398.4,232.1,398.4Z' />
      </svg>
      <div className='roulette-item__decor'>
        <img className='roulette-item__decor-image' src='/assets/images/boxes/open/target-decor.png' alt='' />
      </div>
      <img className='roulette-item__shots' src={`/assets/images/boxes/open/shots_${shotsNumber}.png`} alt='' />
      <img className='roulette-item__image' src={item.image_url} alt='Weapon' />
      <span className='roulette-item__name'>
        {item.name}
      </span>
    </div>
  )
}

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
