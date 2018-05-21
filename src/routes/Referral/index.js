import {Component} from 'react'
import {connect} from 'react-redux'
import {translate} from 'react-i18next'
import {config} from 'src/lib/config'
import {UserCard} from '../../components/UserCard'
import {ReferralContent} from '../../components/Referral'
import './index.scss'

@translate('Referral')

export class Referral extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <main className='inner-page'>
        <div className='inner-page__container'>
          <UserCard />
          <div className='inner-page__content referral_content'>
            <ReferralContent />
          </div>
        </div>
      </main>
    )
  }
}
