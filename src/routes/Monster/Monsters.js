import { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  currentLanguage: state.i18n.currentLanguage,
}))
export class Vampire extends Component {
  render () {
    return (
      <div className='case-roll_monster-vampire_wrap'>
        <div className={`case-roll_monster-vampire lang-${this.props.currentLanguage}`}>
          <div className='case-roll_monster-vampire_dribble'/>
          <div className='case-roll_monster-vampire_dot'/>
          <div className='case-roll_monster-vampire_mices'/>
        </div>
      </div>
    )
  }
}

export const Snake = () => {
  return(
    <div className='case-roll_monster-snake'>
      <div className='case-roll_monster-snake_eye'></div>
      <div className='case-roll_monster-snake_dribble'></div>
      <div className='case-roll_snakeBotTexture'></div>
    </div>
  )
}

export const Cthulhu = () => {
  return(
    <div className='case-roll_cthulhu'>
      <div className='case-roll_cthulhu_face'>
        <div></div>
      </div>
      <div className='case-roll_cthulhu_eye case-roll_cthulhu_eye-left'></div>
      <div className='case-roll_cthulhu_eye case-roll_cthulhu_eye-right'></div>
    </div>
  )
}

export const Scorpion = () => {
  return(
    <div className='case-roll_monster-scorp_wrap'>
      <div className='case-roll_monster-scorp'>
        <svg className='case-roll_monster-scorp_eyes'>
          <path className='case-roll_monster-scorp_eyes-elem' d="M2.6,1.5,3.1,0,6.5,2.1l4.7,12.8L9.6,20.2l.8,1.3a10.74,10.74,0,0,0,1.8,0A15.62,15.62,0,0,0,14,19.4l.8-.5v.5l-2.5,2.9-1.8.7s-.7.3-.9,0-.9-1.1-.9-1.1l-.5-1.3V18.7l1-2.3L4.6,3Z" transform="translate(0.1)"/>
          <polygon className='case-roll_monster-scorp_eyes-elem' points="0 3.3 1.2 2.7 5.4 9.9 6.2 9.9 7.3 12.7 6.7 13.3 5.5 18.1 4.4 15.3 4.9 13.3 0 3.3"/>
        </svg>
        <div className='case-roll_monster-scorp_dribble'/>
        <div className='case-roll_monster-scorp_dot case-roll_monster-scorp_dot-1'/>
        <div className='case-roll_monster-scorp_dot case-roll_monster-scorp_dot-2'/>
      </div>
      <div className='case-roll_monster-scorp_ass'>
        <div className='case-roll_monster-scorp_ass-anim'></div>
      </div>
    </div>
  )
}

export const Ragnarok = () => {
  return(
    <div className='case-roll_ragnarok'>
      <div className='case-roll_ragnarok_eye case-roll_ragnarok_eye-left'></div>
      <div className='case-roll_ragnarok_eye case-roll_ragnarok_eye-right'></div>
      <div className='case-roll_ragnarok_decor case-roll_ragnarok_decor-left'></div>
      <div className='case-roll_ragnarok_decor case-roll_ragnarok_decor-right'></div>
    </div>
  )
}
