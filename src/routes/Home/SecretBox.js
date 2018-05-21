import { Price } from 'src/components/Price'
import punkSrc from './assets/secret/punk.png'
import punkAnimSrc from './assets/secret/punk_anim.gif'
import expertSrc from './assets/secret/expert.png'
import expertAnimSrc from './assets/secret/expert_anim.gif'
import maniacSrc from './assets/secret/maniac.png'
import maniacAnimSrc from './assets/secret/maniac_anim.gif'
import cyberSrc from './assets/secret/cyber.png'
import cyberAnimSrc from './assets/secret/cyber_anim.gif'
import cheatSrc from './assets/secret/cheat.png'
import cheatAnimSrc from './assets/secret/cheat_anim.gif'
import gabenSrc from './assets/secret/gaben.png'
import gabenAnimSrc from './assets/secret/gaben_anim.gif'

export const SecretBox = (props) => {
  const resolveImage = (name) => {
    switch (name) {
      case 'punk':
        return punkSrc
      case 'expert':
        return expertSrc
      case 'maniac':
        return maniacSrc
      case 'cyber':
        return cyberSrc
      case 'cheat':
        return cheatSrc
      case 'gaben':
        return gabenSrc
    }
  }

  const resolveAnimation = (name) => {
    switch (name) {
      case 'punk':
        return punkAnimSrc
      case 'expert':
        return expertAnimSrc
      case 'maniac':
        return maniacAnimSrc
      case 'cyber':
        return cyberAnimSrc
      case 'cheat':
        return cheatAnimSrc
      case 'gaben':
        return gabenAnimSrc
    }
  }

  return (
    <a href='#' className='secret-case'>
      {props.currentRang > 1
        ? <div className='secret-case__status' style={{borderColor: props.caseColor}}>
          <span>x</span>
          <span style={{color: props.caseColor}}>{props.amountOfTwist}</span>
        </div>
        : <div className='secret-case__status' style={{borderColor: props.caseColor}}>
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' fill={props.caseColor} viewBox='0 0 21.7 26.5'><path d='M18.6,9.6V6.4c0-0.4,0-2.5-1.6-4.2C15.6,0.7,13.6,0,10.9,0S6.1,0.7,4.8,2.2C3.2,3.9,3.1,6,3.2,6.4v3.2C1.3,10.2,0,11.9,0,14v7.9c0,2.5,2.1,4.6,4.6,4.6h12.5c2.5,0,4.6-2.1,4.6-4.6V14C21.7,12,20.4,10.2,18.6,9.6z M7.1,4.3c0.7-0.8,2-1.2,3.8-1.2s3,0.4,3.8,1.2c0.8,0.8,0.8,1.8,0.8,1.9l0,3.1H6.3v-3l0,0l0-0.1C6.3,6.2,6.4,5.1,7.1,4.3z M18.5,21.9c0,0.8-0.6,1.4-1.4,1.4H4.6c-0.8,0-1.4-0.6-1.4-1.4V14c0-0.8,0.6-1.4,1.4-1.4h12.5c0.8,0,1.4,0.6,1.4,1.4V21.9z' /> <circle cx='10.9' cy='17.3' r='1.6' /> </svg>
        </div>}
      <div className='secret-case__image'>
        <img src={resolveImage(props.type)} alt={props.caseName} />
      </div>
      {props.amountOfTwist >= 1 && <div className='secret-case_twist-anim' >
        <img src={resolveAnimation(props.type)} alt={props.caseName} />
      </div>}
      <div className='secret-case__price'>
        <span className='case-name' style={{color: props.caseColor}}>{props.caseName}</span>
        <Price amount={props.priceCase} currency={props.currencyCase} />
      </div>
    </a>
  )
}
