import { connect } from 'react-redux'
import { push as pushAction, replace as replaceAction } from './actions'
import './index.scss'

const Link = (props) => {
  const {to, replace, onClick, className, target, children, dispatch, ...other} = props

  const handleClick = (event) => {
    // Ignore any click other than a left click
    if ((event.button && event.button !== 0) ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.defaultPrevented === true) {
      return
    }

    // Prevent page reload
    if (!target) { event.preventDefault() }

    // Execute onClick callback, if it exists
    if (onClick) {
      onClick(event)
    }

    // Dispatch the appropriate navigation action
    if (replace) {
      dispatch(replaceAction(to))
    } else if (!target) {
      dispatch(pushAction(to))
    }
  }

  return (
    <a href={to} onClick={handleClick} {...other} className={'link ' + props.className} target={target}>
      {children}
    </a>)
}

export default connect()(Link)
