import { Component } from 'react'
import PropTypes from 'prop-types'

const LeftAnim = (props) => (
  <div className='case-roll_l-anim'>
    <div />
    <div>
      <div className='case-roll_l-anim_base' />
      <div className='case-roll_anim'>
        <div />
      </div>
    </div>
  </div>
)

const RightAnim = (props) => (
  <div className='case-roll_r-anim'>
    <div />
    <div>
      <div className='case-roll_l-anim_base' />
      <div className='case-roll_anim'>
        <div />
      </div>
    </div>
  </div>
)

export class LrAnim extends Component {
  static PropTypes ={
    result: PropTypes.string,
    pricesItems: PropTypes.string,
    finish: PropTypes.string,
    openTimes: PropTypes.number,
    startRoll: PropTypes.string
  }
  /* shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.params.startRoll !== this.props.params.startRoll) ? true : false
  } */
  render () {
    const its = document.querySelectorAll('.case-roll_anim')
    if (this.props.startRoll) {
      let curPers = 0
      for (let i = 0; i < this.props.openTimes.length; i++) {
        setTimeout(() => {
          const pers = this.props.pricesItems[i] / this.props.result.total_price * 100 // число  / сумму * 100
          curPers = curPers + pers
          its.forEach(it => {
            it.style.transform = 'translateY(' + (100 - curPers) + '%)'
          })
        }, (this.props.openTimes[i] + 10))
      }
    } else {
      for (let i = 0; i < its.length; i++) {
        its[i].style.transform = 'translateY(100%)'
      }

      its.forEach(it => {
        it.style.transform = 'translateY(100%)'
      })
    }

    return (
      <div className='case-roll_lateral'>
        {this.props.left && <LeftAnim />}
        {this.props.right && <RightAnim />}
      </div>
    )
  }
}
