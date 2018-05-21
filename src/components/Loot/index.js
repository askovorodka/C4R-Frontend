import { getSteamItemImageUrl } from 'src/lib/steam'
import PropTypes from 'prop-types'
import { Component } from 'react'

export class Loot extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    customClass: PropTypes.string
  }

  render () {
    return (
      <div className={'loot ' + this.props.customClass}>
        <img className='loot__img' src={getSteamItemImageUrl(this.props.image_url)} />
        <span className='loot__name'>
          {this.props.name}
        </span>
      </div>
    )
  }
}
