import { Component } from 'react'
import { Arrow } from 'src/components/Arrow'
import { Button } from 'src/components/Button'
import PropTypes from 'prop-types'
import './index.scss'

export const SliderCounter = props => {
  return (
    <ul className={'slider-counter ' + props.className} >
      <li>
        <Button className='slider-counter__button' onClick={props.previusAction}>
          <Arrow className='slider-counter__arrow' />
        </Button>
      </li>
      {props.content.map((item, index) => (
        <li key={index}>
          <Button className={'slider-counter__button ' + (props.activeItem === index ? 'slider-counter__button_active' : '')} onClick={() => props.goToAction(index)} />
        </li>
      ))}
      <li>
        <Button className='slider-counter__button' onClick={props.nextAction}>
          <Arrow className='slider-counter__arrow slider-counter__arrow_next' />
        </Button>
      </li>
    </ul>
  )
}

SliderCounter.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  previusAction: PropTypes.func.isRequired,
  nextAction: PropTypes.func.isRequired,
  goToAction: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired
}
