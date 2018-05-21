import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Select } from 'src/components/Select'
import { changeLanguage } from 'src/components/Language/actions'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  languages: state.i18n.languages
}), {changeLanguage})

export class LanguageSelect extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      defaultCurrency: PropTypes.string.isRequired
    }))
  }

  isLanguageActive (langId) {
    return this.props.currentLanguage === langId
  }

  toggleDropdown (bool) {
    this.isDropdownOpened = bool
    this.setState({})
  }

  switchLang (langId) {
    if (this.isLanguageActive(langId)) {
      return
    }
    this.props.changeLanguage(langId)
    this.refs.select.closeDropdown()
  }

  getLanguage (langId) {
    return this.props.languages.filter(l => l.id === langId)[0]
  }

  render () {
    return (
      <Select
        ref='select'
        customClass='profile-settings__select'
        placeholder={this.getLanguage(this.props.currentLanguage).name}>
        <div className='select__content select__content_type_list'>
          {
            this.props.languages
              .filter(l => !this.isLanguageActive(l.id))
              .map(l => (
                <div
                  className={
                    '' + l.id +
                    (this.isLanguageActive(l.id)
                      ? ''
                      : '')}
                  key={l.id}
                  onClick={e => this.switchLang(l.id)}>
                  <span className=''>{l.name}</span>
                  <img className=''
                    src={`/assets/images/lang-icon_${l.id}.jpg`}
                    alt='Language' />
                </div>
              ))
          }
        </div>
      </Select>
    )
  }
}
