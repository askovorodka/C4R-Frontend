import { Component } from 'react'

// onSwitch
export class ProfileSwitch extends Component {
  constructor (props) {
    super()
    this.state = {isSwitched: !!props.value}
  }

  switch () {
    if (typeof this.props.onSwitch === 'function') {
      this.props.onSwitch(!this.state.isSwitched)
    }
    this.setState({isSwitched: !this.state.isSwitched})
  }

  render () {
    return (
      <div className='profile-settings__item' onClick={e => this.switch()}>
        <div
          className={'profile-settings__slide-switcher slide-switcher box-decor ' +
          (this.state.isSwitched ? 'slide-switcher_active' : '')}>
          <div className='slide-switcher__slider box-decor'>
            <svg className='slide-switcher__decor'>
              <line className='box-decor__line'
                x1='0' y1='100%'
                x2='100%' y2='0%' />
            </svg>
          </div>
          <svg className='slide-switcher__decor'>
            <line className='box-decor__line'
              x1='0' y1='100%'
              x2='100%' y2='0%' />
          </svg>
        </div>
        <p className='content__text'>
          {this.props.children}
        </p>
      </div>
    )
  }
}
