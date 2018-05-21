import { Component } from 'react'
import PropTypes from 'prop-types'

export class LoadingError extends Component {
  static propTypes = {
    retry: PropTypes.func
  }

  render () {
    return (
      <div className='loading-error'>
        Loading error
        <br />
        {
          this.props.retry &&
          <span onClick={e => this.props.retry()}>Try again</span>
        }
      </div>
    )
  }
}
