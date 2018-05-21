import PropTypes from 'prop-types'
import { Arrow } from 'src/components/Arrow'

export const Switcher = p => {
  return (
    <div className={'switcher ' + p.className}>
      <svg className='switcher__bg'>
        <line className='box-decor__line'
          x1='0%' y1='100%'
          x2='100%' y2='0%' />
      </svg>
      <div className='switcher__container'>
        <div className='switcher__btn switcher__btn_type_back' onClick={p.onClickBack}>
          <Arrow customClass='switcher__arrow' />
        </div>
        <div className='switcher__btn switcher__btn_type_next' onClick={p.onClickNext}>
          <Arrow customClass='switcher__arrow' />
        </div>
      </div>
    </div>
  )
}

Switcher.propTypes = {
  className: PropTypes.string,
  onClickBack: PropTypes.func,
  onClickNext: PropTypes.func
}
