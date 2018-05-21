import { Component } from 'react'
import { translate } from 'react-i18next'
import { Select } from 'src/components/Select'
import { LanguageSelect } from 'src/components/Language/LanguageSelect'
import { connect } from 'react-redux'
// import { modal } from 'react-redux-modal'
import { AvatarLoaderModal } from 'src/routes/UserConfig/AvatarLoaderModal'
import {
  updateUserSettings
} from './actions'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  isAuth: !!state.profile.user.id,
  profile: state.profile,

  tradeUrl: state.profile.user.trade_url || '',
  linkedServices: state.profile.user.services,
  isMenuCollapsed: !!state.profile.isMenuCollapsed,
  secretCode: state.profile.user.secret_code
}), {
  updateUserSettings
})

export class UserConfigForm extends Component {
  constructor () {
    super()
    this.onSwitch = this.onSwitch.bind(this)
  }

  onSwitch (optionId, value) {
    const settings = this.props.profile.user.settings
    settings[optionId] = value
    this.props.updateUserSettings(settings).then(res => {
    })
  }

  openAvatarLoader () {
    // modal.add(AvatarLoaderModal, {
    //   size: 'medium', // large, medium or small,
    //   closeOnOutsideClick: true,
    //   hideTitleBar: true, // (optional) Switch to true if do not want the default title bar and close button,
    //   hideCloseButton: false // (optional) if you don't wanna show the top right close button
    //   // .. all what you put in here you will get access in the modal props ;)
    // })
  }

  render () {
    const settings = this.props.profile.user.settings

    return (
      <div className='profile-settings'>
        <div className='profile-settings__container'>
          <h2 className='profile-settings__heading heading heading_lvl_2'>
            Язык
          </h2>
          <LanguageSelect />
          <h2 className='profile-settings__heading heading heading_lvl_2'>
            Валюта
          </h2>
          <div className='profile-settings__convert'>
            <span className='profile-settings__currency-name'>
              Рубли
            </span>
            <svg className='profile-settings__currency currency'>
              <path className='currency__symb currency__symb_type_rub'
                d='M3,.2V8.3H.1V9.5H3v3.7H.1v1H3v3H4.1v-3h7v-1h-7V9.5h8V.2Zm1.1,8v-7h7V8.3h-7Z' />
            </svg>
            <span className='content__text'>
              конвертировать в
            </span>
            <Select
              customClass='profile-settings__select profile-settings__select_currency'
              placeholder='US dollars $'>
              <div className='select-content select__content_type_list'>
                Валюты
              </div>
            </Select>
          </div>
          <button
            className='btn profile-settings__btn'>
            По курсу 76.85
          </button>
          <p className='content__text'>
            Текст про условия конвертации. Текст про условия конвертации. Текст про условия конвертации. Текст про
            условия конвертации. Текст про условия конвертации. Текст про условия конвертации. Текст про условия
            конвертации. Текст про условия конвертации. Текст про условия конвертации. Текст про условия конвертации.
            Текст про условия конвертации.
          </p>
        </div>
        <div className='profile-settings__container'>
          <h2 className='profile-settings__heading heading heading_lvl_2' />
          {
            Object.keys(settings).map(s =>
              <ProfileSwitch
                key={s}
                value={settings[s]}
                onSwitch={value => this.onSwitch(s, value)}>
                {s}
              </ProfileSwitch>)
          }
        </div>
        <div onClick={e => this.openAvatarLoader()}>
          update avatar
        </div>
      </div>
    )
  }
}
