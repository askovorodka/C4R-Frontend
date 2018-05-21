import { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { openBox } from './actions'
import PropTypes from 'prop-types'
import { api } from 'src/lib/api'
import { Roulette } from 'src/routes/Box/Roulette'
import { Button } from 'src/components/Button'
import { Price } from 'src/components/Price'
import { ContainerHeader } from 'src/components/ContainerHeader'
import { BoxResult } from 'src/routes/Box/BoxResult'
import { setPopupState } from 'src/components/Payments/action'
import { setLoginState } from 'src/components/LoginForm/actions'
import { setRankUpState } from 'src/components/Rank/actions'
import { LoginForm } from 'src/components/LoginForm'
import { Rank } from 'src/components/Rank'
import './styles/index.scss'

@translate(['boxes'])
@connect(state => ({
  isAuth: !!state.profile.user.id,
  balance: state.profile.user.balance
}), {openBox, setPopupState, setLoginState, setRankUpState})
export class BoxPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }
  constructor (props) {
    super(props)
    this.state = {
      isResultPage: false,
      isLoading: false,
      box: {loot_sets: []},
      boxOpenResult: null,
      isAnimate: false
    }
  }

  findTransitionEvent = () => {
    let el = document.createElement('fakeelement')
    const transitions = {
      'animation': 'animationend',
      'webkitAnimation': 'webkitAnimationEnd',
      'MSAnimation': 'MSAnimationEnd',
      'oAnimation': 'OAnimationEnd'
    }
    for (let t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t]
      }
    }
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this.roulette).addEventListener(this.findTransitionEvent(), this.openResultPageWithDelay, false)
  }

  componentWillMount () {
    this.getBox(this.props.params.id)
  }

  getBox = () => {
    this.setState({isLoading: true})
    api.getBox(this.props.params.id)
      .then(res => {
        this.setState({isLoading: false, box: res},
          this.checkUserBalance
        )
      }).catch(() => {
      this.setState({isLoading: false})
    })
  }

  reset = () => {
    this.setState({
      boxOpenResult: null,
      isAnimate: false,
      isResultPage: false
    })
    this.checkUserBalance()
  }

  checkUserBalance = () => {
    let isEnoughMoney
    const {balance} = this.props
    const boxPriceArray = this.state.box.prices

    // @todo переписать, если у юзера может быть больше одной валюты
    boxPriceArray.forEach(price => {
      if (price.currency === balance.currency) {
        isEnoughMoney = parseInt(balance.amount, 10) >= parseInt(price.amount, 10)
      }
    })
    this.setState({isEnoughMoney})
  }

  openBox = () => {
    // @todo придумать решение получше
    ReactDOM.findDOMNode(this.boxOpenButton).setAttribute('disabled', 'true') // disable open button after first click
    if (this.props.isAuth) {
      if (this.state.isEnoughMoney) {
        if (!this.state.isAnimate) {
          this.props.openBox(this.props.params.id, {})
            .then(res => {
              if (res.code !== 403) {
                this.setState({
                  boxOpenResult: res,
                  isAnimate: true
                })
              }
            })
        }
      } else {
        this.openPaymentsPopUp()
      }
    } else {
      this.props.setLoginState({visible: true})
    }
    setTimeout(() => {
      ReactDOM.findDOMNode(this.boxOpenButton).removeAttribute('disabled') // enable open button after 20s delay
    }, 20000)
  }

  openResultPageWithDelay = () => {
    // removing event listener to prevent multiply actions
    ReactDOM.findDOMNode(this.roulette).removeEventListener(this.findTransitionEvent(), this.openResultPageWithDelay, false)
    // delay 2s
    setTimeout(() => {
      this.setState({isResultPage: true})
      // rank-up state
      this.props.setRankUpState({
        current: {
          exp: 8500,
          name: 'Горящий зевс IV'
        },
        next: {
          exp: 9500,
          name: 'next rank name'
        },
        visible: true
      })
    }, 2000)
  }

  smoothScroll = (duration) => {
    let start = window.pageYOffset,
      change = 0 - start,
      currentTime = 0,
      increment = 20

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }

    const animateScroll = () => {
      currentTime += increment
      let val = easeInOutQuad(currentTime, start, change, duration)
      window.scrollTo(0, val)
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }

  openPaymentsPopUp = () => {
    // в title можно указывать переменную из переводов payments
    this.props.setPopupState({viewMode: 'default', visible: true, title: 'ADD_FUNDS'})
  }

  uniq = (a) => {
    return a.filter((cur, index, array) =>
      index === array.findIndex((t) => (
        t.name === cur.name
      )))
  }

  render () {
    this.smoothScroll(500) // если открываем еще один кейс, кидает вверх страницы

    const {t} = this.props
    let lootList
    let loots
    if (this.state.box.loot_sets[0]) {
      loots = this.uniq(this.state.box.loot_sets[0].loots.filter((elem) => {
        return elem.name = elem.name.slice(0, (elem.name.indexOf('(') - 1))
      }))
      lootList = <LootList loots={loots} />
    }
    if (this.state.isResultPage) {
      return (
        <BoxResult result={this.state.boxOpenResult} box={this.state.box}
                   saleTotalPrice={this.state.boxOpenResult.sale_total_price} returnCallback={this.reset} />
      )
    }
    return (
      <main className='box-page'>
        <Rank />
        <Roulette
          ref={element => this.roulette = element}
          box={this.state.box}
          isAnimate={this.state.isAnimate}
          boxOpenResult={this.state.boxOpenResult}
        />
        <Button
          ref={element => this.boxOpenButton = element}
          className='box-page__button'
          onClick={this.openBox}
        >
          {t('OPEN.BUTTON_OPEN')}
          <Price customClass='box-page__price' prices={this.state.box.prices} />
        </Button>
        {lootList}
        <LoginForm />
      </main>
    )
  }
}

@translate(['boxes'])
class LootList extends Component {
  static propTypes = {
    loots: PropTypes.array.isRequired
  }

  render () {
    const {t} = this.props
    return (
      <div className='loot-list'>
        <ContainerHeader className='loot-list__container-header' text={t('OPEN.LOOT_LIST_HEADING')} />
        {this.props.loots.map(loot => (
          <div className='loot-list__item loot-list__item_quality_FN' key={loot.id}>
            <img className='loot-list__image' src={loot.image_url} alt='Weapon' />
            <span className='loot-list__name'>
              {loot.name}
            </span>
          </div>
        ))}
      </div>
    )
  }
}
