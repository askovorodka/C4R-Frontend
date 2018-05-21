import { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { Price } from 'src/components/Price'
import { Button } from 'src/components/Button'
import { ProgressBar } from 'src/components/ProgressBar'
import { toastr } from 'react-redux-toastr'
import { api } from 'src/lib/api'
import Link from 'src/components/Link'
import { BoxCategoryTriangle } from 'src/components/ContainerHeader'
import './styles/box-results.scss'
import FeedbackButton from 'components/Feedback/FeedbackButton'
import { Rank } from 'components/Rank'

export const BoxResult = (props) => (
  <main className='box-result'>
    <Rank />
    <ProgressBar />
    <BoxResultItem {...props} />
    <BoxResultSocial transactionId={props.result.id} />
    <BoxResultOpen box={props.box} returnCallback={props.returnCallback} />
  </main>
)

@translate(['boxes'])
class BoxResultItem extends Component {
  onSell = () => {
    const ids = this.props.result.drops.items.map(drop => drop.id)
    api.sellDrops(ids).then(res => {
      this.props.returnCallback()
      toastr.success('ok', this.props.t('OPEN.RESULT.SOLD'))
    })
  }

  render () {
    const {t, result, saleTotalPrice} = this.props

    return (
      <div className='box-result-item'>
        {result.drops.items.map(drop => (
          <div key={drop.id}>
            <div className='box-result-header'>
              <h1 className='box-result__heading_1'>
                <BoxCategoryTriangle position='left' />
                {t('OPEN.RESULT.HEADING1')}
                <BoxCategoryTriangle position='right' />
              </h1>
            </div>
            <p className='box-result'>
              {t('OPEN.RESULT.YOUR_PRIZE')}
            </p>
            <div className='box-result__image-wrapper'>
              <img className='box-result__image-wrapper__image' src={drop.loot.image_url} alt='Your Prize' />
            </div>
            <p className='box-result__name'>
              {drop.loot.name}
            </p>
            <div className='box-result__market-price'>
              {/* <span>{t('OPEN.RESULT.MARKET_PRICE')} &nbsp; </span> */}
              {/* <Price amount={drop.prices[0].amount} currency={drop.prices[0].currency} /> */}
            </div>
          </div>
        ))}
        <div className='box-result__button-wrapper'>
          <Button className='box-result__button box-result__button_sell' onClick={this.onSell}>
            {t('OPEN.RESULT.SELL')}
            &nbsp;
            <Price amount={saleTotalPrice.amount} currency={saleTotalPrice.currency} />
          </Button>
          <Button className='box-result__button box-result__button_take' onClick={this.props.returnCallback}>
            {t('OPEN.RESULT.TAKE')}
            <Price />
          </Button>
        </div>
      </div>
    )
  }
}

@translate(['boxes'])
class BoxResultSocial extends Component {
  static propTypes = {
    transactionId: PropTypes.number.isRequired
  }

  render = () => (
    <div className='box-result-social'>
      <div className='box-result-social__header'>
        <h2 className='box-result-social__heading_2'>
          {this.props.t('OPEN.RESULT.LEAVE_REVIEW')}
        </h2>
      </div>
      <div className='box-result-social__botton-wrapper'>
        <FeedbackButton transactionId={this.props.transactionId}
          className='box-result-social__button box-result-social__button_c4r'>
          <span className='box-result-social__button_c4r_icon' />
          Cases4real
        </FeedbackButton>
        <a
          href='https://vk.com/share.php?url=https%3A%2F%2Fshare.cases4real.com%2F%3F__%3D753cf3c4ad609f207f0d82e1efc7edd9'
          target='_blank' className='box-result-social__button box-result-social__button_vk'>
          <span className='box-result-social__button_vk_icon' />
          Vkontakte
        </a>
        <a
          href='https://www.facebook.com/login.php?skip_api_login=1&api_key=1026000780807464&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.6%2Fdialog%2Fshare%3Fdisplay%3Dpopup%26href%3Dhttps%253A%252F%252Fshare.cases4real.com%252F%253F__%253D753cf3c4ad609f207f0d82e1efc7edd9%26client_id%3D1026000780807464%26ret%3Dlogin&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=ru_RU'
          target='_blank' className='box-result-social__button box-result-social__button_fb'>
          <span className='box-result-social__button_fb_icon' />
          FaceBook
        </a>
      </div>
    </div>
  )
}

@connect(state => ({
  balance: state.profile.user.balance
}))
@translate(['boxes'])
class BoxResultOpen extends Component {
  static propTypes = {
    box: PropTypes.object.isRequired
  }

  render () {
    const {t} = this.props
    return (
      <div className='box-result-open'>
        <div className='box-result-open__header'>
          <h2 className='box-result-open__header__heading'>
            <span className='box-result-open__header__heading_onBalance'>
              {t('OPEN.RESULT.ON_BALANCE')}
              &nbsp;
            </span>
            <Price className='box-result-open__header__price' amount={this.props.balance.amount}
              currency={this.props.balance.currency} />&nbsp;
            <span className='box-result-open__header__heading_openMore'>
              {t('OPEN.RESULT.OPEN_MORE')}&nbsp;
              {this.props.box.name}
            </span>
          </h2>
        </div>
        <div className='box-result-open__wrapper' onClick={this.props.returnCallback}>
          <Link className='box-result-open__wrapper__link' to={this.props.box.id}>
            {t('OPEN.RESULT.OPEN')}
          </Link>
        </div>
      </div>
    )
  }
}
