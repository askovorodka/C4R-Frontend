import { Component } from 'react'
import PropTypes from 'prop-types'

// todo check perfomance
export class Image extends Component {
  static propTypes = {
    // todo type of null
    // image: PropTypes.oneOfType([PropTypes.string, null]),
    fallbackImage: PropTypes.string
  }

  constructor () {
    super()
    this.state = {
      isError: false,
      isLoaded: false,
      isFallback: false
    }
  }

  shouldComponentUpdate () {
    // todo
    return true
  }

  onLoadImageError (event) {
    if (this.state.isFallback !== true && this.props.fallbackImage) {
      this.setState({
        ...this.state,
        isFallback: true
      })
      return
    }

    this.setState({
      ...this.state,
      isError: true
    })
  }

  render () {
    const image = this.props.image || this.props.fallbackImage || null

    if (this.state.isError === true) {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }

    return (
      <img className={this.props.className}
        onError={this.onLoadImageError.bind(this)}
        src={!this.state.isFallback ? image : this.props.fallbackImage} />
    )
  }
}
