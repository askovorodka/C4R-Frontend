import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Reviews } from 'src/components/LiveDrop/Reviews'
import config from 'src/lib/config'
import { Tabs } from 'src/components/Tabs'
import Link from 'src/components/Link'
import './styles/styles.scss'
import { cent } from 'react-cent'

@cent
@connect(state => ({livedrop: state.livedrop}))
export class LiveDrop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 'topDrops',
      reviews: [],
      liveDrop: [],
      topDrop: []
    }
    this.changeContent = this.changeContent.bind(this)
    this.maxFeedItems = 10

    this.props.cent.subscribe('live-drop', message => {
      this.setState({liveDrop: [...this.state.liveDrop, message.data]})
    }).history().then(history => {
      this.setState({liveDrop: history.data.map(message => message.data)})
    })

    this.props.cent.subscribe('top-drop', message => {
      this.setState(prevState => [...prevState.liveDrop, message.data])
    }).history().then(history => {
      this.setState({topDrop: history.data.map(message => message.data)})
    })

    this.props.cent.subscribe('reviews', message => {
      this.setState(prevState => [...prevState.liveDrop, message.data])
    }).history().then(history => {
      this.setState({reviews: history.data.map(message => message.data)})
    })
  }

  changeContent (item) {
    this.setState({
      tab: item
    })
  }

  render () {
    const tab = this.state.tab
    return (
      <section className='live-drop'>
        <Tabs items={config.liveDrop.tabsItems} activeItem={this.state.tab}
          buttonAction={this.changeContent} tabsClass='live-drop__tabs' tabsItemClass='live-drop__tabs-item' />
        <div className='live-drop__content'>
          {tab === 'recentDrops' && <Drop drops={this.state.liveDrop} maxItems={this.maxFeedItems} />}
          {tab === 'topDrops' && <Drop drops={this.state.topDrop} maxItems={this.maxFeedItems} />}
          {tab === 'reviews' && <Reviews reviews={this.state.reviews} />}
        </div>
      </section>
    )
  }
}

const Drop = ({drops, maxItems}) => (
  <div className='feed'>
    <BestDrop />
    {drops.map((drop, index) => {
      if (index < maxItems) {
        return (
          <div className={'feed__item feed__item_quality_' + drop.quality} key={index}>
            <img className='feed__img' src={drop.image_url} />
            <span className='feed__name'>{drop.name}</span>
            <FeedTooltip drop={drop} index={index} />
          </div>
        )
      }
    })}
  </div>
)

Drop.propTypes = {
  drops: PropTypes.array.isRequired,
  maxItems: PropTypes.number.isRequired
}

const FeedTooltip = props => {
  return (
    <div className='feed-tooltip'>
      <svg className='feed-tooltip__border'>
        <polygon className='feed-tooltip__border-elem' points='0,0 87,0 95,-10 103,0 190,0 190,100 0,100'
          fill={'url(#tooltip' + props.index + ')'} />
        <defs>
          <radialGradient id={'tooltip' + props.index} cx='50%' cy='0%' r='100%' fx='50%' fy='0%'>
            <stop className='feed-tooltip__color-custom' offset='0%' />
            <stop className='feed-tooltip__color-custom-opacity' offset='25%' />
            <stop className='feed-tooltip__color-base' offset='90%' />
          </radialGradient>
        </defs>
      </svg>
      <div className='feed-tooltip__content'>
        <Link className='feed-tooltip__item' to='./'>
          <img className='feed-tooltip__player-img'
            src='https://cases4real.com/sites/default/files/styles/avatar/public/pictures/picture-1894432-1497953597.jpg'
            alt='User image' />
          <span className='feed-tooltip__player-name'>Костяныч</span>
        </Link>
        <div className='feed-tooltip__line' />
        <Link className='feed-tooltip__item' to={`/box/${props.drop.box.id}`}>
          <img className='feed-tooltip__drop-img'
            src='https://cases4real.com/sites/all/themes/csgo/img/veteranCases/vc_3.png' />
          <span className='feed-tooltip__drop-name'>{props.drop.box.name}</span>
        </Link>
      </div>
    </div>
  )
}

FeedTooltip.propTypes = {
  drop: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

const BestDrop = () => {
  return (
    <div className='best-drop'>
      <span className='best-drop__player-name'>
        Player
      </span>
      <img className='best-drop__img'
        src='https://cases4real.com/sites/default/files/items/desert_eagle_golden_koi_factory_new_5049.png' />
      <span className='best-drop__drop-name'>
        Weapon
      </span>
    </div>
  )
}
