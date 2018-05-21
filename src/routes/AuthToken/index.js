import PropTypes from 'prop-types'
import { Spinner } from 'src/components/Spinner/index'
import { api } from 'src/lib/api'
import { connect } from 'react-redux'
import { setAuthToken } from '../../routes/ProfileSettings/actions'
import { Component } from 'react'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  isAuth: !!state.profile.user.id,
  profile: state.profile,

  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {setAuthToken})

export class AuthToken extends Component {
  static propTypes = {
    setAuthToken: PropTypes.func.isRequired
  }

  componentWillMount () {
    const token = this.props.params.token
    if (!token) {
      this.redirect()
      console.log('redirect not auth')
    }
    if (this.props.isAuth) {
      this.redirect()
      console.log('redirect auth')
    }

    api.getAuthToken(token).then(res => {
      return this.props.setAuthToken(res.token).then(() => this.redirect())
    }).catch(res => {
      // todo catch get jwt error
      this.redirect()
      return res
    })
  }

  render () {
    return <Spinner />
  }

  redirect () {
    window.location.href = '/'
  }
}
