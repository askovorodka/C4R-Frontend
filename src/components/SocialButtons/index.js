import { Component } from 'react'
import config from 'src/lib/config'
import { translate } from 'react-i18next'
import Link from 'src/components/Link'
import './index.scss'

@translate(['common'])
export class SocialButtons extends Component {
  render () {
    const {t} = this.props
    return (
      <div className='social-buttons'>
        <svg className='social-buttons__bg'>
          <polygon className='social-buttons__bg-elem' points='0,35 68,0 68,355 0,320' />
        </svg>
        <div className='social-buttons__items'>
          {config.socialButtons.map((item, index) => (
            <div className='social-buttons__item' key={index}>
              <Link to={item.link} target='_blank' className='social-buttons__link'>
                <img className='social-buttons__img' src={item.icon} />
                <svg className='social-buttons__decor'>
                  <path className='social-buttons__decor-elem' d='M27.5,54.5a27,27,0,0,1,0-54' />
                </svg>
              </Link>
            </div>
          ))}
          <p className='social-buttons__text'>
            {t('SOCIAL_BUTTONS.TEXT1')}
          </p>
          <p className='social-buttons__text'>
            {t('SOCIAL_BUTTONS.TEXT2')}
          </p>
        </div>
      </div>
    )
  }
}
