import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserImage } from './UserImage'
import { UserName } from './UserName'
import './index.scss'
import {Image} from '../Image/index'
import {translate} from 'react-i18next'
import config from 'src/lib/config'
import { login } from 'src/routes/ProfileSettings/actions'
import { Button } from 'src/components/Button'

@translate('common')
@connect(state => ({
  isAuth: !!state.profile.user.id,
  linkedServices: state.profile.user.services,
  user: state.profile.user,
  userRanks: state.dictionaries.user_ranks
}), {login})

export class UserCard extends Component {
  constructor () {
    super()
  }
  static defaultProps = {
    anotherUser: false
  }
  static propTypes = {
    userId: PropTypes.string,
    linkedServices: PropTypes.object
  }
  // componentWillMount () {
  //   this.setState(this.props.user)
  // }

  // componentWillReceiveProps (nextProps) {
  //   this.setState(nextProps.user)
  // }

  displayUserRank () {
    // подразумевается что ранги - сортированный по экспе массив
    const user = this.props.user
    const rank = this.props.userRanks
      .reduce((p, r) =>
          r.points <= user.rank_points ? r : p
        , {points: 0})

    return {...rank, level: 1 + this.props.userRanks.indexOf(rank)}
  }

  findUserService (service) {
    return (typeof this.props.user.services === 'object' && this.props.user.services.indexOf(service.toString()) > -1)
  }

  isAccountLinked (serviceLink) {
    if (!this.props.linkedServices) {
      return false
    }
    return !!this.props.linkedServices[serviceLink]
  }
  socialLink (serviceLink) {
    if (this.isAccountLinked(serviceLink)) {
      switch (serviceLink) {
        case 'steam':
          return 'https://steamcommunity.com/profiles/' + this.props.linkedServices[serviceLink]
          break
        case 'vkontakte':
          return 'https://vk.com/id' + this.props.linkedServices[serviceLink]
          break
        case 'facebook':
          return 'https://www.facebook.com/' + this.props.linkedServices[serviceLink]
          break
      }
    }
  }
  isAnotherAccountLinked (serviceLink){
    if (!this.props.anotherUser.services) {
      return false
    }
    return this.props.anotherUser.services[serviceLink]
  }
  anotherSocialLink (serviceLink) {
    if (this.isAnotherAccountLinked(serviceLink)) {
      switch (serviceLink) {
        case 'steam':
          return 'https://steamcommunity.com/profiles/' + this.props.anotherUser.services[serviceLink]
          break
        case 'vkontakte':
          return 'https://vk.com/id' + this.props.anotherUser.services[serviceLink]
          break
        case 'facebook':
          return 'https://www.facebook.com/' + this.props.anotherUser.services[serviceLink]
          break
      }
    }
  }

  render () {
    return (
      <div className='usercard_container'>
        <div className='logo_block'>
          <div className='image'>
            <div className='img'>
              <UserImage image={!this.props.anotherUser.avatar ? this.props.user.avatar || '' : this.props.anotherUser.avatar} />
              <div className='crown'>
                <svg>
                  <path d='M37.536,73.892 C37.536,73.892 12.843,64.208 1.634,60.539 C6.209,57.888 13.151,52.529 17.657,49.918 C18.956,52.884 20.926,56.365 24.708,55.718 C26.245,55.455 27.608,54.577 28.721,53.499 C30.075,52.189 31.149,50.456 31.165,48.558 C31.178,47.186 30.640,45.856 29.973,44.642 C27.907,40.890 24.829,41.193 21.095,40.660 C18.954,33.626 16.736,26.340 14.471,18.899 C22.059,20.372 29.541,21.825 36.989,23.272 C37.479,26.673 37.970,29.997 41.449,31.709 C45.796,33.847 50.728,31.020 51.927,26.580 C53.086,22.294 49.416,19.675 45.659,18.912 C46.164,19.015 53.964,3.150 54.483,1.992 C54.544,1.990 54.604,1.987 54.666,1.984 C59.388,12.558 71.582,36.130 71.582,36.130 L37.536,73.892 Z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='username'><UserName name={!this.props.anotherUser.fullname ? this.props.user.fullname || '' : this.props.anotherUser.fullname} /></div>
        </div>
        <div className='rating_block'>
          <div className='rating_title'>
            <span>{this.props.t('USERCARD.CHICKEN_LEFT')}</span>
            <span>{this.props.t('USERCARD.CHICKEN_RIGHT')}</span>
          </div>
          <div className='rating_bar'>
            <div className='rating_bar_left' style={{width: '60%'}}>
              <div className='rating_bar_egg' />
              <div className='rating_bar_rating'>8460/960</div>
            </div>
            <div className='rating_bar_right' style={{width: '40%'}}>
              <div className='rating_bar_egg_super' />
            </div>
          </div>
          <div className='rating_description'>{this.props.t('USERCARD.OPEN_CASE')}</div>
        </div>

        <div className='social_block'>
          {!this.props.anotherUser.services ? (config.authServices.map(authSettings => {
            return (
              <a
                className={'social-accounts__item social-accounts__item_net_' + authSettings.name}
                key={authSettings.name}
                disabled={!this.isAccountLinked(authSettings.link)}
                target='_blank'
                href={this.socialLink(authSettings.link)}
              />)
          }))
            :
            (Object.keys(this.props.anotherUser.services).map(key => {
              return (
                <a
                  className={'social-accounts__item social-accounts__item_net_' +  key }
                  key={key}
                  disabled={!this.isAnotherAccountLinked(key)}
                  target='_blank'
                  href={this.anotherSocialLink(key)}
                />)
            }))
          }
        </div>

        <div className='options'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const LoginButton = ({name, title, loginAction}) => {
  return (
    <Button
      className={name}
      onClick={loginAction}
      title={title} />
  )
}
