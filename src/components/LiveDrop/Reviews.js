import { Component } from 'react'
import { translate } from 'react-i18next'
import { default as Slider } from 'react-slick'
import Link from 'src/components/Link'
import PropTypes from 'prop-types'
import { SliderCounter } from 'src/components/SliderCounter'

@translate(['common'])
export class Reviews extends Component {
  constructor (props) {
    super(props)
    this.state = {currentSlideIndex: 0}
    this.settings = {
      infinite: true,
      speed: 1000,
      autoplaySpeed: 10000,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      draggable: false,
      fade: true,
      beforeChange: (oldIndex, newIndex) => {
        this.setState({currentSlideIndex: newIndex})
      }
    }
    this.previus = this.previus.bind(this)
    this.next = this.next.bind(this)
    this.goTo = this.goTo.bind(this)
  }

  previus () {
    this.slider.slickPrev()
  }

  next () {
    this.slider.slickNext()
  }

  goTo (index) {
    this.slider.slickGoTo(index)
  }

  render = () => (
    <div className='reviews'>
      <Slider ref={c => this.slider = c} {...this.settings}>
        {this.props.reviews.map((review, index) => (
          <div key={index}>
            <Review review={review} />
          </div>
          ))}
      </Slider>
      <SliderCounter className='reviews__slider-counter' content={this.props.reviews} previusAction={this.previus}
        nextAction={this.next} goToAction={this.goTo} activeItem={this.state.currentSlideIndex} />
    </div>
    )
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
}

const Review = ({item}) => {
  return (
    <div className='reviews__item'>
      <img className='reviews__user-image' src={item.userImage} alt='User Image' />
      <ReviewsBody item={item} />
      <ReviewsStat item={item} />
    </div>
  )
}

Review.propTypes = {
  review: PropTypes.object.isRequired
}

@translate(['common'])
class ReviewsBody extends Component {
  render () {
    const {t, item} = this.props
    return (
      <div className='reviews__body'>
        <div className='reviews__info'>
          <div className='review__info-user'>
            <span className='reviews__user-name'>
              {item.userName + ' '}
            </span>
            <span className='reviews__info-text'>
              {t('LIVE_DROP.REVIEWS.WON') + ' ' + item.weaponName + ' ' + t('LIVE_DROP.REVIEWS.FROM') + ' ' + item.boxName}
            </span>
          </div>
          <span className='reviews__info-text'>
            {item.dateNumber + ' ' + t('LIVE_DROP.REVIEWS.' + item.dateType) + ' ' + t('LIVE_DROP.REVIEWS.AGO')}
          </span>
        </div>
        <div className='reviews__message'>
          {item.message}
        </div>
      </div>
    )
  }
}

ReviewsBody.propTypes = {
  item: PropTypes.object.isRequired
}

@translate(['common'])
class ReviewsStat extends Component {
  render () {
    const {t, item} = this.props
    return (
      <div className='reviews__stat'>
        <ReviewsStatItem item={item} type='drop' title={t('LIVE_DROP.REVIEWS.DROP')} />
        <ReviewsStatItem item={item} type='cases' title={t('LIVE_DROP.REVIEWS.CASES')} />
      </div>
    )
  }
}

ReviewsStat.propTypes = {
  item: PropTypes.object.isRequired
}

const ReviewsStatItem = ({item, title, type}) => {
  let content = null
  if (type === 'drop') {
    content =
      <div className='reviews__stat-content'>
        <img className='reviews__stat-img' src={item.weaponImage} />
        <p className='reviews__stat-text'>{item.weaponName}</p>
      </div>
  } else if (type === 'cases') {
    content = <span className='reviews__stat-number'>{item.allBoxesNumber}</span>
  }

  return (
    <Link to={item.userInventoryLink} className='reviews__stat-item'>
      <span className='reviews__stat-name'>
        {title}
      </span>
      {content}
    </Link>
  )
}

ReviewsStatItem.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
