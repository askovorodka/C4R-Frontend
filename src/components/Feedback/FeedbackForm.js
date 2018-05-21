import { Component } from 'react'
import { translate } from 'react-i18next'
import { api } from 'src/lib/api'
import PropTypes from 'prop-types'
import './styles/styles.scss'
import { Button } from 'components/Button'

@translate(['boxes'])
export default class FeedbackForm extends Component {
  static propTypes = {
    onSent: PropTypes.func,
    onClose: PropTypes.func,
    transactionId: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  onESCPress = (event) => {
    if (event.keyCode === 27) {
      this.props.onClose()
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.onESCPress, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.onESCPress, false)
  }

  handleTextChange = (event) => {
    this.setState({value: event.target.value})
  }

  submit = () => {
    api.submitFeedback(this.state.text, this.props.transactionId)
      .then(() => { this.props.onSent() })
  }

  render = () => (
    <div className='feedback_review'>
      <span className='feedback_review__close' onClick={this.props.onClose}>×</span>
      <h2>{this.props.t('FEEDBACK.SEND_FEEDBACK')}</h2>
      <textarea cols={60} rows={5} value={this.state.value} onChange={this.handleTextChange} />
      <Button onClick={this.submit} className={'btn btn--yellow'}>{this.props.t('FEEDBACK.SEND')}</Button>
    </div>
  )
}
