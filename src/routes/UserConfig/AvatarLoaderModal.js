import { Component } from 'react'
import PropTypes from 'prop-types'
import { AvatarLoaderForm } from 'src/components/Profile'

export class AvatarLoaderModal extends Component {
  static propTypes = {
    removeModal: PropTypes.func.isRequired
  }

  removeThisModal () {
    this.props.removeModal()
  }

  render () {
    return (
      <div className='payments-modal'>
        <header className='payments-modal__header'>
          <h2 className='heading heading_lvl_2'>
            Сменить аватар
          </h2>
          <svg
            onClick={this.removeThisModal}
            className='payments-modal__close-icon close-icon'>
            <line className='close-icon__elem'
              x1='0' y1='100%'
              x2='100%' y2='0' />
            <line className='close-icon__elem'
              x1='0' y1='0'
              x2='100%' y2='100%' />
          </svg>
        </header>
        <section className='payments-modal__body'>
          <AvatarLoaderForm onAvatarSaved={this.removeThisModal} />
        </section>
      </div>
    )
  }
}
