import { Component } from 'react'
import './styles.scss'
import { translate } from 'react-i18next'
import { cent } from 'react-cent'

@translate(['common'])
@cent
export class SiteMetrics extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      online: null,
      users: null,
      opened: null
    }

    this.props.cent.subscribe('site-metrics', message => {
      this.handleStatsBarMessage(message)
    }).history().then(history => {
      this.handleStatsBarMessage(history.data.shift())
    })
  }

  handleStatsBarMessage = (message) => {
    this.setState(prevState => ({...prevState, ...message.data}))
  }

  render () {
    const {t} = this.props

    return (
      <div className='metrics'>
        <Metric title={t('TICKER.CASES')} value={this.state.opened} />
        <Metric title={t('TICKER.USERS')} value={this.state.users} />
        <Metric title={t('TICKER.ONLINE')} value={this.state.online} />
        &nbsp;
      </div>
    )
  }
}

const Metric = ({title, value}) => {
  return value ? <span>{`${title}: ${value}`}</span> : null
}
