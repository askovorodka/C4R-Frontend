import { Component } from 'react'

export class TopBtns extends Component {
  constructor () {
    super()
    this.state = {
      soundCobra: localStorage.getItem('soundCobra') !== 'false',
      soundMonster: localStorage.getItem('soundMonster') !== 'false',
      soundRat: localStorage.getItem('soundRat') !== 'false',
      page: (document.body.classList.contains('page-lottery-product-lottery-product-monster-179')) ? 'COBRA'
        : (document.body.classList.contains('page-lottery-product-lottery-product-monster-193')) ? 'RAT'
          : (document.body.classList.contains('page-lottery-product-lottery-product-monster-192')) ? 'RAG'
            : (document.body.classList.contains('page-lottery-product-lottery-product-monster-232')) ? 'SCORP'
              : 'CTHULHU'
    }
  }
/*  shouldComponentUpdate (nextProps, nextState) {
    const pr = this.props.params
    const npr = nextProps.params
    return ( // определяем начало крутки, конец крутки и включен ли звук
      pr.startRoll !== npr.startRoll ||
      pr.finish !== npr.finish ||
      this.state.soundCobra !== nextState.soundCobra ||
      this.state.soundRat !== nextState.soundRat ||
      this.state.soundMonster !== nextState.soundMonster
    ) ? true : false
  } */
  soundMute () {
    const {
      soundCobra,
      soundRat,
      soundMonster,
      page
    } = this.state
    if (page === 'COBRA') {
      this.setState({
        soundCobra: !soundCobra
      })
      localStorage.setItem('soundCobra', !soundCobra)
    } else if (page === 'RAT') {
      this.setState({
        soundRat: !soundRat
      })
      localStorage.setItem('soundRat', !soundRat)
    } else {
      this.setState({
        soundMonster: !soundMonster
      })
      localStorage.setItem('soundMonster', !soundMonster)
    }
  }
  render () {
    const pr = this.props.params
    const {
      soundCobra,
      soundRat,
      soundMonster,
      page
    } = this.state

    const curSound = (page === 'COBRA') ? soundCobra : (page === 'RAT') ? soundRat : soundMonster
    return (
      <div className='case-roll_top-btns'>
        <div id='monster-pop_wins'>
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.7 22.3'>
            <path d='M17.7,4.2c-0.6-0.7-1.4-1-2-1.2l0-3H9.4H9.3H3l0,3C2.4,3.2,1.6,3.5,1,4.2c-0.9,1-1.2,2.4-0.9,4.2c0.8,5,5.9,6.8,6.3,7
              c0.3,0.4,0.5,0.7,0.8,1.1c0.2,0.5,0.1,0.9,0,1.2H6.3v2h0.9h1.2h0.1h1.5h0.1h1.2h0.9v-2h-0.9c-0.1-0.3-0.1-0.8,0-1.2
              c0.3-0.3,0.6-0.7,0.8-1.1c0.3-0.1,5.4-1.9,6.3-7C18.9,6.6,18.6,5.2,17.7,4.2z M2.1,8.1C1.9,6.9,2,6.1,2.5,5.6
              c0.2-0.2,0.4-0.3,0.6-0.4l0,2c0,0.2,0.5,2.5,1.6,5.1C3.6,11.3,2.4,10,2.1,8.1z M13.7,6.8c-0.2,0.7-1.3,5.6-3.8,8.5l-0.1,0.1
              l-0.1,0.1c-0.3,0.8-0.3,1.5-0.3,2.1H9.2c0.1-0.6,0.1-1.4-0.3-2.1l-0.1-0.1l-0.1-0.1C6.4,12.4,5.2,7.5,5,6.8V2h4.3h0.1h4.3V6.8z
              M16.7,8.1c-0.3,1.9-1.5,3.2-2.6,4.1c1.1-2.6,1.6-4.9,1.6-5.1l0-2c0.2,0.1,0.4,0.2,0.6,0.4C16.7,6.1,16.8,6.9,16.7,8.1z' />
            <polygon points='9,20.3 4.8,20.3 4.8,22.3 9,22.3 9.7,22.3 13.9,22.3 13.9,20.3 9.7,20.3 	' />
          </svg>
        </div>
        <div id='monster-pop_info'>
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.1 18.1'>
            <path d='M9,18.1c-5,0-9-4.1-9-9s4.1-9,9-9s9,4.1,9,9S14,18.1,9,18.1z M9,2C5.2,2,2,5.2,2,9c0,3.9,3.2,7,7,7c3.9,0,7-3.2,7-7C16.1,5.2,12.9,2,9,2z' />
            <path d='M9.1,6.8c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C10.2,6.3,9.7,6.8,9.1,6.8z M8.1,13.6v-6h2v6H8.1z' />
          </svg>
          <div className='case-roll-pop_info-anim' />
        </div>
        <div className={`case-roll_top-btns_audio-changer ${(curSound) ? '' : 'case-roll_top-btns_audio-changer-inactive'}`} onClick={this.soundMute.bind(this)}>
          <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 201.7 189.4'>
            <path d='M51.4,49.1H0v45.6v45.6h51.4l76.5,49.1V94.7V0L51.4,49.1z M110,156.5l-53.3-34.2H18V94.7V67.1h38.7L110,32.9v61.8V156.5z' />
            <rect x='147' y='57.9' width='18' height='73.7' />
            <rect x='183.7' y='41.4' width='18' height='106.6' />
          </svg>
          <audio id='winAudio' src='/sites/all/themes/csgo/sounds/win.mp3' />
          <audio id='startAudioRag' src='/sites/all/themes/csgo/sounds/start.wav' />
          <audio id='startAudio' src='/sites/all/themes/csgo/sounds/baraban.mp3' />
        </div>
      </div>
    )
  }
  componentDidMount () {
    const {
      soundCobra,
      soundRat,
      soundMonster,
      page
    } = this.state
    const curSound = (page === 'COBRA') ? soundCobra : (page === 'RAT') ? soundRat : soundMonster
    const audio = document.querySelectorAll('#monsterRoot audio')
    for (let i = 0; i < audio.length; i++) {
      audio[i].volume = (curSound) ? 1 : 0
    }
    const openPop = (pop) => {
      const popup = document.querySelector('[data-pop=' + pop + ']')
      document.body.style.overflow = 'hidden'
      popup.style.opacity = '1'
      popup.style.pointerEvents = 'auto'
    }
    const monsterRaitings = document.getElementById('monster-pop_wins')
    if ((page === 'SCORP') || (page === 'COBRA')) {
      monsterRaitings.style.display = 'none'
    } else {
      monsterRaitings.addEventListener('click', function (e) {
        openPop(this.id)
      })
    }
    document.getElementById('monster-pop_info').addEventListener('click', function (e) {
      openPop(this.id)
    })
  }
/*  componentDidUpdate (prevProps, prevState) {
    const ppr = prevProps.params
    const {
      startRoll,
      finish,
    } = this.props.params
    const {
      soundCobra,
      soundMonster,
      soundRat,
      page
    } = this.state
    if(prevState.soundCobra !== soundCobra) {
      document.querySelectorAll('#monsterRoot audio').forEach(it => {
        it.volume = (soundCobra) ? 1 : 0
      })
    }
    if(prevState.soundMonster !== soundMonster) {
      document.querySelectorAll('#monsterRoot audio').forEach(it => {
        it.volume = (soundMonster) ? 1 : 0
      })
    }
    if(prevState.soundRat !== soundRat) {
      document.querySelectorAll('#monsterRoot audio').forEach(it => {
        it.volume = (soundRat) ? 1 : 0
      })
    }
    if(ppr.finish !== finish && finish) {
      const winAudio = document.getElementById('winAudio');
      winAudio.play()
    }
    if((page === 'RAG') && (ppr.startRoll !== startRoll && startRoll)) {
      const audio = document.getElementById('startAudioRag');
      audio.play()
    }
    else if(ppr.startRoll !== startRoll && startRoll) {
      const audio = document.getElementById('startAudio');
      audio.play()
    }
  } */
}
