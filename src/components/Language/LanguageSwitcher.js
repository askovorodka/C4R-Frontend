import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Arrow } from 'src/components/Arrow'
import { changeLanguage } from 'src/components/Language/actions'
import './language-switcher.scss'
import { Button } from 'src/components/Button'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
  languages: state.i18n.languages
}), {changeLanguage})

export class LanguageSwitcher extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      defaultCurrency: PropTypes.string.isRequired
    }))
  }

  constructor () {
    super()
    this.state = {
      isOpened: false
    }
  }

  isLanguageActive (langId) {
    return this.props.currentLanguage === langId
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
    }))
  }

  switchLang (langId) {
    if (this.isLanguageActive(langId)) {
      return
    }
    this.props.changeLanguage(langId)
  }

  render () {
    return (
      <Button className={'language-switcher' + (this.state.isOpened ? ' language-switcher_opened' : '')}
        onClick={this.toggleDropdown}>
        <Arrow className='language-switcher__arrow' />
        <ul className='language-switcher__list'>
          {
            this.props.languages
              .filter((a, b) => true || this.isDropdownOpened || b < 1)
              .map(lang => (
                <LangItem key={lang.id} {...lang}
                  switchAction={e => this.switchLang(lang.id)}
                  className={'language-switcher__item language-switcher__item_lang_' + lang.id +
                  (this.isLanguageActive(lang.id) ? ' language-switcher__item_active' : '')} />
              ))
          }
        </ul>
      </Button>
    )
  }
}

const LangItem = ({id, icon, shortName, switchAction, className}) => {
  return (
    <li className={className}
      onClick={switchAction}>
      <img className='language-switcher__img'
        src={icon}
        alt='Language' />
      <span className='language-switcher__text'>
        {shortName}
      </span>
    </li>
  )
}
