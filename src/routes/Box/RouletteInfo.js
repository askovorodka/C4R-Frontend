import PropTypes from 'prop-types'
import './styles/roulette-info.scss'
import { CloseIcon } from 'src/components/CloseIcon'

export const RouletteInfo = props => (
  <div className='roulette-info'>
    <CloseIcon className='roulette-info__close-icon' onClick={props.close} />
    <p className='roulette-info__text'>
      {props.text}
    </p>
  </div>
)

RouletteInfo.propTypes = {
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
}
