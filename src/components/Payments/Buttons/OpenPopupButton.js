import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { Button } from 'src/components/Button/index'
import '../styles/_btns.scss'
import { setPopupState } from 'src/components/Payments/action'
import { connect } from 'react-redux'

@translate('payments')
@connect(null, {setPopupState})
export default class OpenPopupButton extends Component {
  open = () => {
    window.scrollTo(0, 0)
    this.props.setPopupState({viewMode: 'default', visible: true})
  }

  render = () => (
    <Button onClick={this.open} className='button pay-button' >
      <div className='pay-button__plus'>+</div>
      <span className='pay-button__text'>{this.props.t('ADD_FUNDS')} {this.props.text}</span>
    </Button>
  )
}
