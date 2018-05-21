import PropTypes from 'prop-types'

export const PayBottom = ({text}) => (
  <section className='pay-bottom'>
    <p className='pay-bottom__text'>{text}</p>
  </section>
)

PayBottom.propTypes = {
  text: PropTypes.string.isRequired
}
