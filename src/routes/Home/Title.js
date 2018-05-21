import PropTypes from 'prop-types'

export const Title = (props) => {
  let name = props.name

  if (name.length > props.length) {
    name = name.slice(0, props.length) + '...'
    return (<span>{name}</span>)
  }
  return (<span>{name}</span>)
}

Title.propTypes = {
  length: PropTypes.number.isRequired
}
