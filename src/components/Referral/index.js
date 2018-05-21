import { Component } from 'react'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { Button } from 'src/components/Button'
import { Scrollbars } from 'react-custom-scrollbars'
import { SocialButtons } from 'src/components/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { PropTypes } from 'prop-types'
import Notifications, { notify } from 'react-notify-toast'
import { getReferralReg } from '../../routes/Referral/actions'
import { getReferralDeposit } from '../../routes/Referral/actions'
import { getReferralReward } from '../../routes/Referral/actions'

@translate('Referral')
export class ReferralContent extends Component {
  render () {
    return (
      <section>
        <div className='referral_content_top'>
          <RefLinkBlock />
        </div>
        <div className='referral_content_middle'>
          <ScrollBlock />
          <TakeAwayButton />
        </div>
      </section>
    )
  }
}

@connect(state => ({user: state.profile.user}))
@translate('Referral')
export class RefLinkBlock extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      referralLink: '',
      copied: false,
      emptyLink: false
    }
  }

  // хз зачем
  handleCopyClick = (event) => {
    event.preventDefault()
  }
  // хз зачем
  handleChange = (event) => {
    this.setState({referralLink: event.target.value, emptyLink: false})
  }

  componentDidMount () {
    this.setState({
      referralLink: this.getReferralLink()
    })
  }

  getReferralLink () {
    const data = location.protocol
    const source = `${location.hostname}${location.port}`
    const refCode = this.props.user.referral_code

    return `${data}//${source}/?ref_code=${refCode}`
  }

  render () {
    const {t} = this.props
    return (
      <section>
        <div className='referral_content_top_referral'>
          <div><span>{t('REFERRAL_TITLE')}</span></div>
          <div>
            <Notifications />
            <input
              readOnly
              placeholder='Enter referral link'
              className={this.state.emptyLink ? 'error' : ''}
              type='text'
              value={this.state.referralLink}
            />
            <CopyToClipboard text={this.state.referralLink}
              onCopy={() => notify.show(t('COPIED'), 'success')}>
              <button>{t('COPY')}
              </button>
            </CopyToClipboard>
          </div>
          <div>{t('DESCRIPTION')}</div>
        </div>
        <div className='referral_content_top_social'>
          <div><span>{t('SOCIAL_TITLE')}</span></div>
          <SocialButtons refLink={this.state.referralLink} />
        </div>
      </section>
    )
  }
}

const GetLogo = (props) => (
  <div className='logo'><img src={props.logo} /></div>
)

const GetDescription = (props) => (
  <div className='description'>{props.text}</div>
)

const GetPrice = (props) => (
  <div className='price_row'>{parseFloat(props.amount).toFixed(2)} {props.currency}</div>
)

const GetRow = (props) => (
  <div key={props.key} className='row'>
    <GetLogo logo={props.item.avatar} />
    <GetDescription text={props.item.fullname} />
    <GetPrice amount={props.item.amount} currency={props.item.currency} />
  </div>
)

@connect(state => ({
  user: state.profile.user
}), {getReferralReg, getReferralDeposit})
@translate('Referral')
export class ScrollBlock extends Component {
  constructor () {
    super()
    this.state = {
      referralRegItems: [],
      referralDepositItems: []
    }
  }

  static propTypes = {
    getReferralReg: PropTypes.func.isRequired,
    getReferralDeposit: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getReferralReg().then(response => {
      this.setState({referralRegItems: response.map(item => <GetRow item={item} key={item.id} />)})
    })
    this.props.getReferralDeposit().then(response => {
      this.setState({referralDepositItems: response.map(item => <GetRow item={item} key={item.id} />)})
    })
  }

  renderThumb ({style, ...props}) {
    const thumbStyle = {
      backgroundColor: `rgb(54, 55, 77)`,
      borderRadius: `20px`
    }
    return (
      <div
        style={{...style, ...thumbStyle}}
        {...props} />
    )
  }

  render () {
    return (
      <Scrollbars
        renderView={props => <div {...props} className='referral_content_middle_scroll' />}
        style={{'height': '375px'}}
        renderThumbVertical={this.renderThumb}>
        <div className='left'>
          <div className='title'>{this.props.t('BONUS_FROM_INVITED')}</div>
          {this.state.referralRegItems}
        </div>
        <div className='right'>
          <div className='title'>{this.props.t('BONUS_FROM_INVITED_PAYMENT')}</div>
          {this.state.referralDepositItems}
        </div>
      </Scrollbars>
    )
  }
}

@connect(null, {getReferralReward})
@translate('Referral')
export class TakeAwayButton extends Component {
  static propTypes = {
    getReferralReward: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.getReferralReward().then(response => {
      if (typeof response.amount !== 'undefined') {
        notify.show(`${this.props.t('REFERRAL_REWARD_SUCCESS')} ${response.amount} ${response.currency}`, 'success')
      } else if (typeof response.message !== 'undefined') {
        notify.show(response.message, 'error')
      }
    })
  }

  render () {
    return (
      <div className='referral_content_middle_button'>
        <Button onClick={this.handleClick} className={'button_yellow color_black'}>{this.props.t('TAKE_AWAY')}</Button>
      </div>
    )
  }
}
