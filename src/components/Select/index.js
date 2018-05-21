import { Component } from 'react'
import PropTypes from 'prop-types'
import { Arrow } from 'src/components/Arrow'

export class Select extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    placeholder: PropTypes.string,
    customClass: PropTypes.string
  }

  constructor () {
    super()
    this.state = {
      isCollapsed: false
    }
  }

  toggleDropdown () {
    this.setState({isCollapsed: !this.state.isCollapsed})
  }

  closeDropdown () {
    this.setState({isCollapsed: false})
  }

  render () {
    const placeholder = this.props.placeholder || 'placeholder'
    return (
      <div className={'select ' + this.props.customClass}>
        <div className='select__container' onClick={e => this.toggleDropdown()}>
          <div className='select__placeholder'>
            {placeholder}
          </div>
          <div className={'select__toggle box-decor' + (this.state.isCollapsed ? ' select__toggle_opened' : '')}>
            <Arrow />
            <svg className='select__decor'>
              <line className='box-decor__line'
                x1='0' y1='100%'
                x2='100%' y2='0%' />
            </svg>
          </div>
        </div>
        {(
          this.state.isCollapsed ? (
            <div className='select__options'>
              {this.props.children}
            </div>
          ) : null
        )}
        <div className='select__options-decor' />
      </div>
    )
  }
}
