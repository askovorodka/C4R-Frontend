import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import AvatarEditor from 'react-avatar-editor'
import {
  linkAccount,
  sellDrops,
  setAvatar,
  takeDrops,
  toggleUserMenu,
  updateUserSettings
} from './actions'
import { Component } from 'react'

const avatarWidth = 200
const avatarHeight = 200

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  isAuth: !!state.profile.user.id,
  profile: state.profile,

  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {
  sellDrops,
  takeDrops,
  setAvatar,
  linkAccount,
  toggleUserMenu,
  updateUserSettings
})

export class AvatarLoaderForm extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired
  }

  onUploadingImageChange () {
    this.imageFile = this.refs.file.files[0]
    this.setState({})
  }

  onSave () {
    if (!this.imageFile) {
      return
    }

    const canvasScaled = this.editor.getImageScaledToCanvas()
    const pngImage = canvasScaled.toDataURL()

    /* console.log('%c       ',
     'font-size: 200px; background: url(' + pngImage + ') no-repeat;') */

    this.props.setAvatar(pngImage).then(res => {
      if (typeof this.props.onAvatarSaved === 'function') {
        this.props.onAvatarSaved(res)
      }
    }) // todo
  }

  setEditorRef (editor) {
    this.editor = editor
  }

  render () {
    if (this.props.isAuth !== true) {
      return (
        <div className='avatar-loader'>Authorization needed</div>
      )
    }

    return (
      <div className='avatar-loader'>
        Avatar loader<br />
        <AvatarEditor
          ref={this.setEditorRef.bind(this)}
          image={this.imageFile}
          width={avatarWidth}
          height={avatarHeight}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1}
          rotate={0}
          borderRadius={0}
        />
        <button onClick={this.onSave.bind(this)}>save</button>

        <input
          ref='file'
          type='file'
          accept='image/*'
          onChange={this.onUploadingImageChange.bind(this)} />
      </div>
    )
  }
}
