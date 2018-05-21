import { ChargedMask } from './ChargedMask'

export const ChargedBox = (props) => {
  return (
    <div className='charging__item'>
      <a href='#'>
        <div className='charging__item__lvl' style={{borderColor: props.color}}>
          <span className='charging__item__lvl__value'>{props.lvl}</span>
          <span>LVL</span>
        </div>
        <div className='charging__item__exp-line'>
          <span>
            {props.charge >= 1 ? <div style={{backgroundColor: props.color}} /> : <div />}
            {props.charge >= 2 ? <div style={{backgroundColor: props.color}} /> : <div />}
            {props.charge >= 3 ? <div style={{backgroundColor: props.color}} /> : <div />}
          </span>
        </div>
        <ChargedMask mask={props.mask} light={props.light} />
        <div className='charging__item__name' style={{color: props.color}}>{props.name}</div>
      </a>
    </div>
  )
}
