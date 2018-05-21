'use strict'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Price } from 'src/components/Price'

export class QuestItem extends Component {
  static propTypes = {
    isFinished: PropTypes.bool.isRequired,
    customClass: PropTypes.string
  }

  render () {
    return (
      <div className={'quest-item ' + this.props.customClass + ' ' + (this.props.isFinished ? ('quest-item_finished') : (''))}>
        <header className='quest-item__header'>
          <span className='quest-item__progress'>
            <span className='quest-item__progress-text'>
              Прогресс
            </span>
            <span className='quest-item__progress-text'>
              <span className='quest-item__progress-done'>
                1
              </span>
                /
              <span className='quest-item__progress-all'>
                3
              </span>
            </span>
            <span className='quest-item__progress-text'>
              (33%)
            </span>
          </span>
          <svg className='quest-item__close-icon close-icon'>
            <line className='close-icon__elem'
              x1='0' y1='100%'
              x2='100%' y2='0' />
            <line className='close-icon__elem'
              x1='0' y1='0'
              x2='100%' y2='100%' />
          </svg>
        </header>
        <div className='quest-item__content'>
          <svg className='quest-item__progress-bar'>
            <path className='quest-item__progress-bar-elem' d='M23.4,88.6a.82.82,0,0,0-.7-1,.81.81,0,0,0-.9.8.82.82,0,0,0,.7,1A1,1,0,0,0,23.4,88.6Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='24.49' cy='78.46' rx='0.9' ry='0.8' transform='translate(-65.66 69.84) rotate(-76.07)' />
            <path className='quest-item__progress-bar-elem' d='M28.3,69a.84.84,0,0,0-.4-1.1.89.89,0,0,0-1.1.5.76.76,0,0,0,.5,1.1C27.6,69.7,28.1,69.5,28.3,69Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='31.7' cy='59.45' rx='0.9' ry='0.8' transform='translate(-43.78 46.19) rotate(-62.13)' />
            <path className='quest-item__progress-bar-elem' d='M37.7,51.2a.86.86,0,1,0-1.2.2A.93.93,0,0,0,37.7,51.2Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='43.41' cy='42.68' rx='0.9' ry='0.8' transform='translate(-25.43 33.21) rotate(-48.31)' />
            <path className='quest-item__progress-bar-elem' d='M51.1,36.1a.82.82,0,0,0,.1-1.2.91.91,0,0,0-1.2-.1.85.85,0,1,0,1.1,1.3Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='58.7' cy='29.18' rx='0.9' ry='0.8' transform='translate(-14.3 24.92) rotate(-34.53)' />
            <path className='quest-item__progress-bar-elem' d='M67.8,24.6a.84.84,0,0,0,.4-1.1.9.9,0,0,0-1.2-.3.84.84,0,0,0-.4,1.1A1,1,0,0,0,67.8,24.6Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='76.69' cy='19.72' rx='0.9' ry='0.8' transform='translate(-10.13 14.82) rotate(-20.65)' />
            <path className='quest-item__progress-bar-elem' d='M86.7,17.5a.82.82,0,0,0,.7-1,.89.89,0,0,0-1-.6.74.74,0,0,0-.6,1C85.8,17.4,86.2,17.6,86.7,17.5Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='96.6' cy='14.9' rx='0.9' ry='0.8' transform='translate(-9.18 -2.09) rotate(-6.72)' />
            <path className='quest-item__progress-bar-elem' d='M106.8,15.1a.88.88,0,0,0,.9-.8.91.91,0,0,0-1.8,0A.82.82,0,0,0,106.8,15.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M116.9,15.8a.82.82,0,0,0,1-.7.81.81,0,0,0-.8-.9.82.82,0,0,0-1,.7C116,15.3,116.4,15.7,116.9,15.8Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='126.99' cy='16.81' rx='0.8' ry='0.9' transform='translate(72 122.52) rotate(-76.07)' />
            <path className='quest-item__progress-bar-elem' d='M136.5,20.6a.84.84,0,0,0,1.1-.4.89.89,0,0,0-.5-1.1.76.76,0,0,0-1.1.5C135.8,20,136,20.4,136.5,20.6Z' transform='translate(-8.1 -13.5)' />
            <ellipse className='quest-item__progress-bar-elem' cx='146.08' cy='24.07' rx='0.8' ry='0.9' transform='translate(48.42 128.46) rotate(-62.13)' />
            <path className='quest-item__progress-bar-elem' d='M154.3,30.1a.86.86,0,1,0-.2-1.2A.83.83,0,0,0,154.3,30.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M165.5,99.5l22.8.1v-1l-22.8-.1Zm25.7-1.3a.91.91,0,1,0,.8.9A.88.88,0,0,0,191.2,98.2Zm2.8-.1v2h11v-2Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M165,106.7l22.6,2.8.1-1-22.6-2.8Zm25.6,1.7a.88.88,0,0,0-.9.8.82.82,0,0,0,.7,1,.81.81,0,0,0,.9-.8A.82.82,0,0,0,190.6,108.4Zm2.9.3-.2,2,10.9,1.3.2-2Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M163.7,113.7l22.1,5.5.2-1-22.1-5.5Zm28,5.4-.5,1.9,10.7,2.6.5-1.9Zm-2.8-.6a.89.89,0,0,0-1,.6.8.8,0,0,0,.6,1,.82.82,0,1,0,.4-1.6Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M161.5,120.4l21.3,8.1.4-.9-21.3-8.1Zm27.2,8.8-.7,1.9,10.3,3.9.7-1.9Zm-2.8-.9a.89.89,0,0,0-1.1.5.84.84,0,0,0,.4,1.1.89.89,0,0,0,1.1-.5A.72.72,0,0,0,185.9,128.3Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M158.5,126.9l20.1,10.6.5-.9L159,126Zm25.9,12-.9,1.8,9.7,5.1.9-1.8Zm-2.6-1.3a.84.84,0,0,0-1.1.4.8.8,0,0,0,.3,1.1.84.84,0,0,0,1.1-.4A.83.83,0,0,0,181.8,137.6Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M154.8,132.9l18.7,13,.6-.8-18.7-13Zm20.6,13.8a.86.86,0,1,0,1.2-.2A.83.83,0,0,0,175.4,146.7ZM179,148l-1.1,1.6,9,6.3,1.1-1.6Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M150.3,138.5l17,15.2.7-.7-17-15.2Zm22.3,17.8-1.3,1.5,8.2,7.3,1.3-1.5Zm-3.4-1.7a.91.91,0,0,0,0,1.2.82.82,0,0,0,1.2-.1.82.82,0,1,0-1.2-1.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M145.2,143.5l15.1,17.1.8-.7L146,142.8ZM162,161.8a.82.82,0,0,0-.1,1.2.91.91,0,0,0,1.2.1.85.85,0,0,0-1.1-1.3Zm3.2,2-1.5,1.3,7.3,8.2,1.5-1.3Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M146.4,54.9l15.2-17-.7-.7-15.2,17Zm16-20a.89.89,0,0,0,1.3,1.2.89.89,0,0,0-1.3-1.2Zm1.8-2.2,1.5,1.3,7.3-8.2-1.5-1.3Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M151.3,60l17.1-15-.7-.8-17.1,15Zm20.4-19.9,1.3,1.5,8.3-7.2L180,32.9Zm-2,2a.89.89,0,1,0,1.2.1A.92.92,0,0,0,169.7,42.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M155.6,65.7l18.8-12.8-.6-.8L155,64.9Zm22.7-17.3,1.1,1.7,9.1-6.2-1.1-1.7ZM176,50.1a.93.93,0,0,0-.2,1.2.85.85,0,0,0,1.1.3.82.82,0,0,0,.2-1.2A.8.8,0,0,0,176,50.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M159.2,71.8l20.2-10.4-.5-.9L158.7,70.9Zm24.6-14.4.9,1.8,9.8-5-.9-1.8Zm-2.5,1.5A.8.8,0,0,0,181,60a.84.84,0,0,0,1.1.4.8.8,0,0,0,.3-1.1A.71.71,0,0,0,181.3,58.9Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M162,78.3l21.4-7.9-.3-.9-21.4,7.9Zm23.1-9c.2.4.6.7,1,.5a1,1,0,0,0,.5-1.1.81.81,0,0,0-1.1-.5C185.1,68.3,185,68.8,185.1,69.3Zm3.1-2.3.7,1.9,10.3-3.8-.7-1.9Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M164,85.2l22.2-5.3-.2-1-22.2,5.3Zm27.4-8.1.5,1.9,10.7-2.6-.5-1.9ZM188,78.9a.87.87,0,0,0,1,.7.89.89,0,0,0,.6-1,.87.87,0,0,0-1-.7A.89.89,0,0,0,188,78.9Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M165.2,92.2l22.6-2.6-.1-1-22.6,2.6Zm24.6-3.3a.82.82,0,0,0,.9.8.84.84,0,0,0,.7-1,1,1,0,0,0-.9-.8A1,1,0,0,0,189.8,88.9Zm3.5-1.4.2,2,10.9-1.3-.2-2Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M155.2,168.2a.93.93,0,0,0-1.2-.2,1,1,0,0,0-.3,1.2.82.82,0,0,0,1.2.2A1,1,0,0,0,155.2,168.2Zm-15.7-20.4,12.9,18.8.8-.6-12.9-18.8Zm17.4,22.6-1.6,1.1,6.2,9,1.6-1.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M133.4,151.5,144,171.7l.9-.5L134.3,151Zm13.1,22a.8.8,0,0,0-1.1-.3.84.84,0,0,0-.4,1.1.82.82,0,0,0,1.2.3A.91.91,0,0,0,146.5,173.5Zm1.4,2.5-1.8.9,5.1,9.7,1.8-.9Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M127.8,153.9l-.9.4,8,21.3.9-.4Zm10.5,26.5-1.9.7,3.9,10.3,1.9-.7Zm-1.1-2.6a1,1,0,0,0-1.1-.5.85.85,0,1,0,.6,1.6A.89.89,0,0,0,137.2,177.8Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M121.1,156.1l-1,.2,5.4,22.1,1-.2Zm7.2,27.6-1.9.5,2.6,10.7,1.9-.5Zm-1.5-1.8a.74.74,0,0,0,.6-1,.89.89,0,0,0-1-.6.82.82,0,0,0-.7,1A1,1,0,0,0,126.8,181.9Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M117.9,185.6l-2,.2,1.3,10.9,2-.2Zm-1.2-5.6L114,157.4l-1,.1,2.7,22.6Zm0,3.7a1,1,0,0,0,.8-.9.9.9,0,0,0-1-.7,1,1,0,0,0-.8.9A.84.84,0,0,0,116.7,183.7Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M106.4,184.3a.81.81,0,1,0-.9-.8A.82.82,0,0,0,106.4,184.3Zm.5-26.4h-1l-.1,22.8h1Zm-1.5,28.5v11h2v-11Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M99.8,157.5l-1-.1L96,180l1,.1Zm-3.5,24.6a.82.82,0,0,0-1,.7.77.77,0,0,0,.8.9.82.82,0,0,0,1-.7A.88.88,0,0,0,96.3,182.1Zm-2.8,14.4,2,.2,1.3-10.9-2-.2Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M81.8,194.2l1.9.5L86.3,184l-1.9-.5Zm4.5-14a.76.76,0,0,0-1,.6.89.89,0,0,0,.6,1,.8.8,0,0,0,1-.6A.74.74,0,0,0,86.3,180.2ZM91.8,156l-5.5,22.1,1,.2,5.5-22.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M76.7,177.2a.84.84,0,0,0-1.1.4.89.89,0,0,0,.5,1.1.76.76,0,0,0,1.1-.5C77.4,177.9,77.1,177.4,76.7,177.2Zm-6.2,13.3,1.9.7,3.9-10.3-1.9-.7Zm14.6-36.6L77,175.2l.9.4L86,154.3Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M59.7,185.5l1.8.9,5.1-9.7-1.8-.9Zm18.9-34.6L68,171l.9.5,10.6-20.1ZM67.5,173a.8.8,0,0,0-1.1.3.84.84,0,0,0,.4,1.1.8.8,0,0,0,1.1-.3A.84.84,0,0,0,67.5,173Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M58.8,167.8A.86.86,0,1,0,59,169,.82.82,0,0,0,58.8,167.8Zm-9.2,11.4,1.6,1.1,6.3-9-1.6-1.1Zm23-32.1-13,18.7.8.6,13-18.7Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M49.7,161.5a.82.82,0,0,0,.1,1.2.91.91,0,0,0,1.2,0,.89.89,0,0,0-1.3-1.2Zm-9.3,10.3,1.5,1.3,7.3-8.2-1.5-1.3ZM67,142.6l-15.2,17,.7.7,15.2-17Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M32.1,163.3l1.3,1.5,8.2-7.3L40.3,156ZM62,137.6,44.9,152.7l.7.8,17.1-15.1ZM42.6,154.2a.91.91,0,0,0-.1,1.2.82.82,0,0,0,1.2.1.91.91,0,0,0,0-1.2A.79.79,0,0,0,42.6,154.2Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M36.3,146.1a.83.83,0,0,0-.2,1.2,1,1,0,0,0,1.2.3c.4-.2.4-.8.2-1.2A1,1,0,0,0,36.3,146.1Zm-11.4,7.7,1.1,1.6,9-6.2-1.1-1.6Zm32.8-21.9L38.9,144.8l.6.8,18.8-12.9Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M18.8,143.6l.9,1.8,9.7-5.1-.9-1.8Zm12.4-6.3a.82.82,0,0,0-.3,1.2.84.84,0,0,0,1.1.4.91.91,0,0,0-.8-1.6ZM54,125.8,33.8,136.4l.5.9,20.2-10.6Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M27.1,127.9a1,1,0,0,0-.5,1.1.81.81,0,0,0,1.1.5.85.85,0,1,0-.6-1.6Zm-13,4.8.7,1.9,10.3-3.9-.7-1.9Zm37.1-13.5-21.3,8,.4.9,21.3-8Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M10.7,121.3l.5,1.9,10.7-2.6-.5-1.9Zm38.4-8.9L27,117.8l.2,1,22.1-5.4Zm-24.9,5.7a.89.89,0,0,0-.6,1,.74.74,0,0,0,1,.6.89.89,0,0,0,.6-1A1,1,0,0,0,24.2,118.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M48,105.4l-22.6,2.7.1,1,22.6-2.7ZM8.7,109.5l.2,2,10.9-1.3-.2-2Zm13.8-1.4a.84.84,0,0,0-.7,1,1,1,0,0,0,.9.8.84.84,0,0,0,.7-1C23.3,108.4,22.9,108,22.5,108.1Z' transform='translate(-8.1 -13.5)' />
            <path className='quest-item__progress-bar-elem' d='M8.1,99.7h11v-2H8.1ZM22,97.9a.91.91,0,1,0,.8.9A.88.88,0,0,0,22,97.9Zm2.8.3v1l22.8.1v-1Z' transform='translate(-8.1 -13.5)' />
          </svg>
          <h3 className='quest-item__heading heading heading_lvl_3'>
            Сыграй 3 Монстр-кейса за один день
          </h3>
          <div className='quest-item__success'>
            {this.props.isFinished ? (
              'Выполнен'
            ) : (
              'Награда'
            )}
            <Price
              customClass='quest-item__price'
              amount='60000'
              currency='RUB' />
          </div>
          <img className='quest-item__img' src='/images/quest-item_theme_test.png' alt='quest' />
          <button
            className={'btm quest-item__btn btn_type_content ' + (this.props.isFinished ? 'btn_type_special' : '')}>
            {this.props.isFinished ? (
              'Забрать награду'
            ) : (
              'Выполнить'
            )}
          </button>
        </div>
      </div>
    )
  }
}
