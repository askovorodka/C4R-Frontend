import PropTypes from 'prop-types'

export const CurrencySymbol = p => {
  return (
    p.currency === 'RUB' ? (
      <svg className='currency'>
        <path className='currency__symb currency__symb_type_rub' d="M5.4,10c2,0,3.9-0.6,5-1.8c0.8-0.8,1.3-2,1.3-3.5c0-1.4-0.5-2.6-1.4-3.4C9.3,0.4,7.8,0,5.7,0c-1.7,0-3,0.1-4,0.3v8H0V10
        h1.7v1.6H0v1.7h1.7v3h2.1v-3h6.6v-1.7H3.8V9.9C3.7,10,4.8,10,5.4,10z M3.7,1.8c0.4-0.1,1.1-0.2,2-0.2c2.3,0,3.8,1,3.8,3.2
        S8,8.3,5.4,8.3c-0.7,0-1.7,0-1.7,0S3.7,1.8,3.7,1.8z"/>
      </svg>
    ) : (
      <span className='currency'>
        $
      </span>
    )
  )
}

CurrencySymbol.propTypes = {
  currency: PropTypes.string.isRequired
}
