import { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'src/components/Button'
import { translate } from 'react-i18next'
import './index.scss'

@translate(['navigation'])
export class Tabs extends Component {
  render () {
    const {t} = this.props
    return (
      <nav className={'tabs ' + this.props.tabsClass}>
        {this.props.items.map((item) => (
          <Button
            className={this.props.tabsItemClass + ' tabs__item ' + (this.props.activeItem === item ? (
          'tabs__item_active') : (''))}
            key={item}
            item={item}
            onClick={() => this.props.buttonAction(item)}>
            {t('TABS.' + item)}
          </Button>
        ))}
      </nav>
    )
  }
}

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  tabsClass: PropTypes.string,
  tabsItemClass: PropTypes.string
}
