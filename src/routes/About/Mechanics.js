'use strict'
import { Component } from 'react'
import { translate } from 'react-i18next'
import './styles/mechanics.scss'

@translate(['about'])
class MechanicsSecret extends Component {
  render () {
    const {t} = this.props
    return (
      <div className='mechanics-secret'>
        <h2 className='mechanics-secret__title'>{t('MECHANICS.SECRET.TITLE')}</h2>
        <p className='mechanics-secret__description'>{t('MECHANICS.SECRET.FIRST_DESCR')}</p>
        <img className='mechanics-secret__image' src='assets/images/about/case-secret.png' alt='' />
        <p className='mechanics-secret__description'>{t('MECHANICS.SECRET.SECOND_DESCR')}</p>
      </div>
    )
  }
}

@translate(['about'])
class MechanicsMonster extends Component {
  render () {
    const {t} = this.props
    return (
      <div className='mechanics-monster'>
        <h2 className='mechanics-monster__title'>{t('MECHANICS.MONSTER.TITLE')}</h2>
        <p className='mechanics-monster__description'>{t('MECHANICS.MONSTER.FIRST_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.MONSTER.SECOND_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.MONSTER.THIRD_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.MONSTER.FOURTH_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.MONSTER.FIFTH_DESCR')}</p>
      </div>
    )
  }
}

@translate(['about'])
class MechanicsExperience extends Component {
  render () {
    const {t} = this.props
    return (
      <div className='mechanics-experience'>
        <h2 className='mechanics-experience__title'>{t('MECHANICS.EXP.TITLE')}</h2>
        <p className='mechanics-monster__description'>{t('MECHANICS.EXP.FIRST_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.EXP.SECOND_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.EXP.THIRD_DESCR')}</p>
        <p className='mechanics-monster__description'>{t('MECHANICS.EXP.FOURTH_DESCR')}</p>
      </div>
    )
  }
}

@translate(['about'])
class MechanicsPower extends Component {
  render () {
    const {t} = this.props
    return (
      <div className='mechanics-power'>
        <h2 className='mechanics-power__title'>{t('MECHANICS.POWER.TITLE')}</h2>
        <p className='mechanics-power__subtitle'>{t('MECHANICS.POWER.SUBTITLE.1')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.RETURN_DESCR.1')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.RETURN_DESCR.2')}</p>
        <p className='mechanics-power__description' dangerouslySetInnerHTML={{__html: t('MECHANICS.POWER.RETURN_DESCR.3')}} />
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.RETURN_DESCR.4')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.RETURN_DESCR.5')}</p>
        <p className='mechanics-power__subtitle'>{t('MECHANICS.POWER.SUBTITLE.2')}</p>
        <p className='mechanics-power__description' dangerouslySetInnerHTML={{__html: t('MECHANICS.POWER.HOPE_DESCR.1')}} />
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.HOPE_DESCR.2')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.HOPE_DESCR.3')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.HOPE_DESCR.4')}</p>
        <p className='mechanics-power__subtitle'>{t('MECHANICS.POWER.SUBTITLE.3')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.JOKER_DESCR.1')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.JOKER_DESCR.2')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.JOKER_DESCR.3')}</p>
        <p className='mechanics-power__description'>{t('MECHANICS.POWER.JOKER_DESCR.4')}</p>
      </div>
    )
  }
}

export class Mechanics extends Component {
  render () {
    return (
      <section className='mechanics'>
        {this.props.secret && <MechanicsSecret />}
        {this.props.monster && <MechanicsMonster />}
        {this.props.experience && <MechanicsExperience />}
        {this.props.power && <MechanicsPower />}
      </section>
    )
  }
}
