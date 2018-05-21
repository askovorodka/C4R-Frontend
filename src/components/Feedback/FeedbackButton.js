import { Component } from 'react'
import { translate } from 'react-i18next'
import FeedbackForm from './FeedbackForm'
import { toastr } from 'react-redux-toastr'
import PropTypes from 'prop-types'

@translate(['boxes'])
export default class FeedbackButton extends Component {
  static propTypes = {
    transactionId: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {review: false, sent: false}
  }

  showReviewForm = () => {
    this.setState({review: true})
  }

  hideReviewForm = () => {
    this.setState({review: false})
  }

  showSuccessMessage = () => {
    this.hideReviewForm()
    toastr.success('ok', this.props.t('FEEDBACK.FEEDBACK_HAS_BEEN_SENT'))
  }

  render = () => (
    <span>
      <button className={'button ' + this.props.className} type='button' onClick={this.showReviewForm}>
        {this.props.children}
      </button>
      {this.state.review && <FeedbackForm transactionId={this.props.transactionId} onSent={this.showSuccessMessage} onClose={this.hideReviewForm} />}
    </span>
  )
}
