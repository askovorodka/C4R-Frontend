import { DefaultBox } from './DefaultBox'
import { ChargedBox } from './ChargedBox'
import { MonsterBox } from './MonsterBox'
import { SecretBox } from './SecretBox'
import PropTypes from 'prop-types'
import { Component } from 'react'

const VIEW = {
  default: DefaultBox,
  charged: ChargedBox,
  monster: MonsterBox,
  secret: SecretBox
}

export class Box extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    box_name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      undiscounted_amount: PropTypes.number.isRequired
    })),
    view: PropTypes.oneOf(Object.keys(VIEW)).isRequired
  }

  render () {
    const BoxView = VIEW[this.props.view]
    return (
      <BoxView {...this.props} />
    )
  }
}

Box.defaultProps = {
  view: 'default'
}

const Grade = () => {
  return (
    <svg className='grade'>
      <circle className='grade__outer' cx='50%' cy='50%' r='17px' />
      <circle className='grade__inner' cx='50%' cy='50%' r='10px' />
      <circle className='grade__lvl_type_red' cx='30px' cy='10px' r='3px' />
      <circle className='grade__lvl_type_red' cx='30px' cy='24px' r='3px' />
      <circle className='grade__lvl_type_red' cx='50%' cy='31px' r='3px' />
      <circle className='grade__lvl' cx='6px' cy='24px' r='3px' />
      <circle className='grade__lvl' cx='6px' cy='10px' r='3px' />
      <circle className='grade__lvl' cx='50%' cy='5px' r='3px' />
    </svg>
  )
}
