import PropTypes from 'prop-types'
import { Image } from 'src/components/Image'
import { Component } from 'react'

// нужен для отображения isVip и такое все

export class UserImage extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render () {
    return (
      <Image className={'user-image ' + this.props.className}
        image={this.props.image}
        fallbackImage={'http://d27.onlinelink.idhost.kz/qglhpkt/skachat_besplatno_pesnyu_coldplay_hymn_for_the_weekend_1465_2.jpg'}>
        image error
      </Image>
    )
  }
}
