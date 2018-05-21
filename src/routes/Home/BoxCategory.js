import { Component } from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { Box } from './BoxTeaser'
import { InfoIcon } from 'src/components/InfoIcon'
import { CloseIcon } from 'src/components/CloseIcon'
import { ContainerHeader } from 'src/components/ContainerHeader'

@translate(['boxes'])
export class BoxCategory extends Component {
  static propTypes = {
    category_name: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired
  }

  openInfo = (e) => {
    this.setState({isInfoOpened: true})
  }

  closeInfo = (e) => {
    this.setState({isInfoOpened: false})
  }

  render = () => {
    if (!this.props.children) {
      return null
    }

    return (
      <div
        className={'box-category' + ' ' + 'box-category_type_' + this.props.category_name + ' ' + 'box-category_length_' + this.props.view}>
        <ContainerHeader text={this.props.t('CATEGORY.TYPE.' + this.props.category_name)} onInfoClick={this.openInfo} />
        <div className='box-category__container'>
          {this.props.children}
        </div>
        {this.state.isInfoOpened &&
        <BoxCategoryInfo close={this.closeInfo} text={this.props.t('CATEGORY.INFO.' + this.props.category_name)} />}
      </div>
    )
  }

  constructor (props) {
    super(props)
    this.state = {isInfoOpened: false}
  }
}

const BoxCategoryInfo = (props) => (
  <div className='box-category-info'>
    <InfoIcon className='box-category-info__info-icon info-icon_active' onClick={props.close} />
    <p className='box-category-info__text'>
      {props.text}
    </p>
    <CloseIcon className='box-category-info__close-icon' onClick={props.close} />
  </div>
)

BoxCategoryInfo.propTypes = {
  close: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
