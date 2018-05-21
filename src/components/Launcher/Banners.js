import { Component } from 'react'
import { default as Slider } from 'react-slick'
import { api } from 'src/lib/api'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import config from 'src/lib/config'
import { translate } from 'react-i18next'
import './banners.scss'

@translate(['launcher'])
@connect(state => ({
  currentLanguage: state.i18n.currentLanguage
}))
export class Banners extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired
  }

  constructor () {
    super()
    this.state = {images: []}
    this.settings = {
      infinite: true,
      speed: config.launcher.carousel.speed,
      autoplaySpeed: config.launcher.carousel.delay,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
      // dots: true,
      // dotsClass: 'banners__counter slider__counter'
    }
  }

  componentDidMount () {
    if (this.state.images.length === 0) {
      this.getBanners()
    }
  }

  componentWillReceiveProps () {
    this.getBanners()
  }

  getBanners () {
    api.getBanner()
      .then(banners => {
        this.setState({
          images: banners
        })
      })
  }

  render () {
    const {t} = this.props

    return (
      <div className='banners'>
        {this.state.images.length > 0
          ? <Slider {...this.settings}>
            {this.state.images.map((i, index) => (
              <div key={index}>
                <Banner picture={i.picture} />
                {i.time ? (
                  <div className='banners__timer'>
                    <span>
                      {t('willEnd:')}
                    </span>
                    <span>
                      {t(i.time)}
                    </span>
                  </div>)
                : null}
              </div>
            ))}
          </Slider>
        : null}
      </div>
    )
  }
}

const Banner = (props) => {
  return (
    <img
      draggable='false'
      src={props.picture}
      alt='Banner'
      className='banners__image' />
  )
}
