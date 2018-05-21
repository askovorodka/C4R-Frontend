import { Component } from 'react'

export class Items extends Component {
  constructor () {
    super()
    this.state = {
      onceOpened: true
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextState.onceOpened === this.state.onceOpened
  }
  render () {
    /* const {
      result,
      currency,
      twistAnimationTime,
      winsDelay,
      winsStartDelay,
      roulleteSettings
    } = this.props.params
    const {
      rows,
      colls,
      itemW,
      itemH,
      itemM
    } = roulleteSettings */
    const {
      onceOpened
    } = this.state

    const winItemStyle = {
      width: this.props.itemW + 'px',
      height: this.props.itemH + 'px'
    }
    const winItemWrapStyle = {
      borderWidth: this.props.itemM + 'px'
    }
    const caseRollRowsStyle = {
      borderLeftWidth: this.props.itemM / 2 + 'px',
      borderRightWidth: this.props.itemM / 2 + 'px'
    }
    let monsterCase = {}
    monsterCase.topWinItem = {}
    monsterCase.maxPrice = 0

    const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    if (this.props.result && this.props.result.init !== undefined) { // есть предметы
      const itemsHtml = this.props.result.won.map((val) => {
        const twistItems = shuffle(val.items)
        return (
          <div className='case-roll__row'>
            <div className='case-roll__row_twist' style={{animationDuration: twistAnimationTime + 'ms'}}>
              {Object.keys(val.items).map(key => {
                return <div key={key} className='case-roll__row_twist__i' style={{backgroundImage: `url(${twistItems[key].img})`}, {winItemStyle}} />
              })}
            </div>
            <div className='case-roll__row__wins'>
              {val.won_items.slice(0, this.props.colls).map((item, ind) => {
                if (item.price > monsterCase.maxPrice) {
                  monsterCase.maxPrice = item.price
                  monsterCase.topWinItem = {
                    id: item.case_id,
                    title: item.name,
                    img: item.img
                  }
                }
                monsterCase.result.push(ittem.id)
                let delay = winsStartDelay + (winsDelay * ind) + 'ms'
                return (
                  <a href={item.img} data-rel='lightcase' title={`${item.name} | ${item.price} ${currency}`} className='case-roll__row__wins__wrap' style={winItemWrapStyle}>
                    <div className={`case-roll__row__wins__i case-roll__row__wins__i-q${item.level}`} style={Object.assign({transitionDelay: delay}, winItemStyle)}>
                      <div className='case-roll__row__wins__i__vis' style={{backgroundImage: `url(${item.img})`, transitionDelay: delay}}>
                        <div className='case-roll__row__wins__i__price'>{item.price} {currency}</div>
                        <div className='case-roll__row__wins__i__name'>{item.name}</div>
                        <div className={`case-roll__row__wins__i__vis_qual case-roll__row__i__wins__i__vis_qual-q${item.level}`} style={{transitionDelay: delay}}>
                          <div style={{animationDelay: delay}}>
                            <div />
                          </div>
                        </div>
                        <div className='case-roll__row__wins__i__vis__img' style={{animationDelay: delay}} />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )
      })
      return (
        <div>
          <div className='case-roll__rows' style={caseRollRowsStyle}>
            {itemsHtml}
          </div>
        </div>
      )
    } else { // стартовое состояние
      const WinsHtml = (props) => {
        let items = []
        for (let i = 0; i < props.numTimes; i++) {
          items.push(props.children(i))
        }
        return (
          <div className='case-roll__row__wins'>
            {items}
          </div>
        )
      }

      let rowsHtml = []
      for (let i = 0; i < this.props.rows; i++) {
        rowsHtml.push(
          <div key={i} className='case-roll__row'>
            <WinsHtml numTimes={this.props.colls}>
              {(ind) =>
                <div key={ind} className='case-roll__row__wins__wrap' style={winItemWrapStyle}>
                  <div className={`case-roll__row__wins__i ${(!onceOpened) && 'case-roll__row__wins__i-start'}`} style={winItemStyle} />
                </div>
              }
            </WinsHtml>
          </div>
        )
      }
      return (
        <div className='case-roll__rows' style={caseRollRowsStyle}>
          {rowsHtml}
        </div>
      )
    }
  }
}
