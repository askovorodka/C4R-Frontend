import { ExperienceProgress } from './ExperienceProgress'
import './style/style.scss'

export const ProgressBar = (props) => {
  return (
    <div className='progress-bar-horizontal-component'>
      <div className='progress-bar-horizontal-component__wrapper'>
        <RangPrev name='Куриное яйцо III' image='/assets/images/icons/rangs/ChickenEggsIII.png' />
        <ExperienceProgress currentExpLvl='8500' nextExpLvl='9500' />
        <RangNext name='Куриное яйцо IV' image='/assets/images/icons/rangs/ChickenEggsIV.png' />
      </div>
    </div>
  )
}

const RangPrev = (props) => {
  return (
    <div className='rang rang__prev'>
      <img src={props.image} alt='' />
      <p>{props.name}</p>
    </div>
  )
}

const RangNext = (props) => {
  return (
    <div className='rang rang__next'>
      <p>{props.name}</p>
      <img src={props.image} alt='' />
    </div>
  )
}
