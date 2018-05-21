import PropTypes from 'prop-types'
import './index.scss'

export const Arrow = ({className, onClick}) => {
  return (
    <svg className={'arrow ' + className} onClick={onClick}>
      <line className='arrow__elem' x1='100%' y1='0' x2='0' y2='54%' />
      <line className='arrow__elem' x1='100%' y1='100%' x2='0' y2='46%' />
    </svg>
  )
}

Arrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}
