import PropTypes from 'prop-types'
import './index.scss'

export const CloseIcon = props => (
  <svg className={'close-icon ' + props.className} onClick={props.onClick}>
    <line className='close-icon__elem'
      x1='0' y1='100%'
      x2='100%' y2='0' />
    <line className='close-icon__elem'
      x1='0' y1='0'
      x2='100%' y2='100%' />
  </svg>
)

CloseIcon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
