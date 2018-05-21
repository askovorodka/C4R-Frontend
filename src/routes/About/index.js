'use strict'
import { Component } from 'react'
import { SideMenu } from './SideMenu'
import { Boxes } from './Boxes'
import { Mechanics } from './Mechanics'
import { Company } from './Company'
import { Contacts } from './Contacts'
import { Policy } from './Policy'
import { Agreement } from './Agreement'
import { translate } from 'react-i18next'
import './styles/index.scss'

@translate(['about'])
export class About extends Component {
  constructor (props) {
    super(props)
    this.state = { selected: 'Boxes' }
  }

  changeIndex = (event) => {
    const index = event.target.name
    this.setState({ selected: index }, () => { console.log(this.state) })
  }

  render () {
    const {t} = this.props
    return (
      <main className='about-page'>
        <h1 className='about-page__title'>{t('PAGE_TITLE')}</h1>
        <div className='about-page__container'>
          {this.state.selected === 'Boxes' && <Boxes />}
          {this.state.selected === 'Mechanics' && <Mechanics secret />}
          {this.state.selected === 'Monster' && <Mechanics monster />}
          {this.state.selected === 'Experience' && <Mechanics experience />}
          {this.state.selected === 'Power' && <Mechanics power />}
          {this.state.selected === 'Company' && <Company />}
          {this.state.selected === 'Contacts' && <Contacts />}
          {this.state.selected === 'Policy' && <Policy />}
          {this.state.selected === 'Agreement' && <Agreement />}
          <SideMenu onClick={this.changeIndex} />
        </div>
      </main>
    )
  }
}
