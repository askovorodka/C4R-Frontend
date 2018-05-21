import PropTypes from 'prop-types'

export const UserName = p =>
  <span className={'User-name ' + p.customClass}>{p.name}</span>

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string
}
