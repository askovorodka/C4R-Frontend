import { SiteMetrics } from 'src/components/SiteMetrics'
import { Launcher } from 'src/components/Launcher'
import { LiveDrop } from 'src/components/LiveDrop'
import { BoxCategoryList } from 'src/routes/Home/BoxCategoryList'
import { OpenPopupButton } from '../../components/Payments/Buttons/index'
import { PayBottom } from 'src/routes/Home/PayBottom'
import { Component } from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import './styles/styles.scss'

@translate(['common'])
@connect(state => ({
  isAuth: !!state.profile.user.id,
  currentLanguage: state.i18n.currentLanguage
}))
export class HomePage extends Component {
  render () {
    return (
      <main className='home-page'>
        <div className='home-page__container'>
          <SiteMetrics />
          <Launcher />
          <LiveDrop />
          <BoxCategoryList currentLanguage={this.props.currentLanguage} />
        </div>
        <PayBottom text={this.props.t('PAY_BOTTOM.TEXT')} />
        {this.props.isAuth && <OpenPopupButton text={this.props.currentLanguage === 'ru' && 'счёт'} />}
      </main>
    )
  }
}
