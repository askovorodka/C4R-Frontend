import { Component } from 'react'

export class Liner extends Component {
/*  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.params.finish !== this.props.params.finish && !nextProps.params.finish) ? true : false
  } */
  render () {
    const { linerTransitionTime } = this.props
    const LineHtml = (
      <div>
        <div />
      </div>
    )
    return (
      <div className='case-roll_liner' style={{transitionDuration: 500 + 'ms'}}>
        {LineHtml}
        {LineHtml}
        {LineHtml}
        {LineHtml}
      </div>
    )
  }
  componentDidUpdate () {
    document.querySelector('.case-roll_liner').setAttribute('class', 'case-roll_liner')
  }
}
