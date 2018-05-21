import { Component } from 'react'
import { translate } from 'react-i18next'
import PropTypes from 'prop-types'
import { ShareButtons, generateShareIcon } from 'react-share'
import './index.scss'

const {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton
} = ShareButtons

const VKIcon = generateShareIcon('vk')
const FBIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')

export class Button extends Component {
  render () {
    return (
      <button
        className={'button ' + this.props.className}
        type='button'
        onClick={this.props.onClick}
        title={this.props.title || ''}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    )
  }
}

@translate('Referral')
export class SocialButtons extends Component {
  static PropTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }

  render () {
    const {t} = this.props

    /**
     * message for:
     * VK = title
     * FB = quote
     * Twitter = via
     */
    return (
      <div className='social_block'>
        <VKShareButton url={this.props.refLink} title={t('REFERRAL_SHARE_DESCRIPTION')}>
          <VKIcon size={65} />
        </VKShareButton>
        <FacebookShareButton url={this.props.refLink} quote={t('REFERRAL_SHARE_TITLE')}>
          <FBIcon size={65} />
        </FacebookShareButton>
        <TwitterShareButton url={this.props.refLink} via={t('REFERRAL_SHARE_DESCRIPTION')}>
          <TwitterIcon size={65} />
        </TwitterShareButton>
      </div>
    )
  }
}
