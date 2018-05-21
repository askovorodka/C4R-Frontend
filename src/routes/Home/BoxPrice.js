import PropTypes from 'prop-types'
import { Price } from 'src/components/Price'

export const BoxPrice = (props) => {
  if (props.prices.undiscounted_amount) {
    return (
      <div className='box-price'>
        <Price customClass='box-price__old' prices={{
          amount: props.prices.undiscounted_amount,
          currency: props.prices.currency
        }} />
        <Price customClass='box-price__new' prices={props.prices} />
      </div>
    )
  }

  return (<Price customClass='box-price' prices={props.prices} />)
}

BoxPrice.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      currency: PropTypes.string.isRequired,
      undiscounted_amount: PropTypes.number
    })
  )
}
