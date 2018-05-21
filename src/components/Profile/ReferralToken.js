import { Component } from 'react'
import { Spinner } from 'src/components/Spinner'

export class ReferralToken extends Component {
  componentWillMount () {
    /* const token = this.props.match.params.token

     if (!token) {
     this.redirect()
     }

     api.getAuthToken(token)
     .then(res => {
     return this.props.setAuthToken(res.token).then(() => this.redirect())
     })
     .catch(res => {
     // todo catch error
     // this.redirect()
     return res
     }) */
  }

  render () {
    return <Spinner />
  }

  redirect () {
    this.props.history.push('/')
  }
}
