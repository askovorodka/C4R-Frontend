import { Spinner } from 'src/components/Spinner/index'
import { api } from 'src/lib/api'
import { connect } from 'react-redux'
import { Component } from 'react'

@connect(state => ({profile: state.profile}))
export class EmailToken extends Component {
  static propTypes = {
    // setAuthToken: PropTypes.func.isRequired,
  }

  componentWillMount () {
    const token = this.props.params.token
    if (!token) {
      this.redirect()
    }

    const email = this.props.profile.user.email

    api.setEmail(email, token)
      .then(res => {
        window.location.href = '/'
      })
      .catch(res => {
        // todo catch get token error
        return res
      })
  }

  render () {
    return <Spinner />
  }

  redirect () {
    this.props.history.push('/')
  }
}
