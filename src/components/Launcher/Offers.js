import { Component } from 'react'
import Link from 'src/components/Link'
import { translate } from 'react-i18next'
import { default as Slider } from 'react-slick'
import config from 'src/lib/config'
import './offers.scss'

const items = [
  {
    link: '',
    img: '/assets/images/launcher/launcher__important_test(1).jpg',
    description: 'offersContent.item1.description',
    buttonName: 'offersContent.item1.buttonName'
  },
  {
    link: '',
    img: '/assets/images/launcher/launcher__important_test(2).jpg',
    description: 'offersContent.item2.description',
    buttonName: 'offersContent.item2.buttonName'
  },
  {
    link: '',
    img: '/assets/images/launcher/launcher__important_test(3).jpg',
    description: 'offersContent.item3.description',
    buttonName: 'offersContent.item3.buttonName'
  }
]

@translate(['launcher'])
export class Offers extends Component {
  constructor () {
    super()
    this.state = {itemActiveIndex: 0}
    this.settings = {
      infinite: true,
      speed: config.launcher.important.speed,
      autoplaySpeed: config.launcher.important.delay,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      dots: true,
      dotsClass: 'offers__counter slider__counter',
      swipe: false
    }
  }

  render () {
    const {t} = this.props

    return (
      <div className='offers'>
        <Slider {...this.settings}>
          {items.map((item, index) => (
            <div className='offers__item' key={index}>
              <img className='offers__img' src={item.img} />
              <div className='offers__description'>
                <span className='offers__text'>
                  {t(item.description)}
                </span>
                <Link to={item.link} className='offers__link'>
                  {t(item.buttonName)}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
