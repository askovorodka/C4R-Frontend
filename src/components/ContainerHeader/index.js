import { InfoIcon } from 'src/components/InfoIcon'
import './index.scss'

export const ContainerHeader = ({text, onInfoClick, className}) => {
  let infoIcon
  if (onInfoClick) {
    infoIcon = <InfoIcon className='container-header__info-icon' onClick={onInfoClick} />
  }
  return (
    <div className={`container-header ${className}`}>
      <h2 className='container-header__heading'>
        <BoxCategoryTriangle position='left' />
        <span className='container-header__title'>{text}</span>
        <BoxCategoryTriangle position='right' />
        {infoIcon}
      </h2>
    </div>
  )
}

export const BoxCategoryTriangle = ({position}) => (
  <svg className={'box-category-triangle ' + 'box-category-triangle_' + position}>
    <polygon className='box-category-triangle__elem' points='0,0 55,0 55,41' />
  </svg>
)
