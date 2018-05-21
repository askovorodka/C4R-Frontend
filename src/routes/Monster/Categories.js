import React, { Component } from 'react'

export class Categories extends Component {
  /* shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.params.result.won !== undefined && nextProps.params.result.won !== this.props.params.result.won || nextProps.params.finish !== this.props.params.finish)
      ? true : false
  } */
  render () {
    /* const {result, rightTransitionTime, refreshInitial, finish, resultPrevWon, roulleteSettings} = this.props.params */
    const {
      rows,
      itemH,
      itemW,
      itemM
    } = this.props.roulleteSettings
    const { startCats } = this.props
    const refreshStartCats = []
    let catsHtml = ''
    let activeArray = [{img: 'https://cases4real.com/sites/default/files/tykva.png'}, {img: 'https://cases4real.com/sites/default/files/tykva.png'}, {img: 'https://cases4real.com/sites/default/files/tykva.png'}]
    console.log('active ', activeArray)
    const caseRollRHeight = rows * (itemH + itemM * 2)
    const caseRollRWHeight = rows * (itemH + itemM * 2) + itemM * 2

    /* if (this.props.result && this.props.result.init !== undefined) {
      activeArray = result.won.concat(this.props.result.init, resultPrevWon)
    } else if(this.props.refreshInitial && !this.props.finish) {
      for (var i = 0; i < resultPrevWon.length; i++) {
        refreshStartCats.push({
          id: resultPrevWon[i].id,
          img: resultPrevWon[i].img,
          name: resultPrevWon[i].name,
        })
      }
      activeArray = refreshStartCats
    } else {
      activeArray = startCats
    } */

    catsHtml = activeArray.map((it, index) =>
      <div key={index} className='case-roll_r_i' style={{backgroundImage: `url(${it.img})`, height: itemH, width: itemW, marginTop: itemM * 2 + 'px', marginBottom: itemM * 2 + 'px'}} />
    )
    let style = {}
    if (activeArray.length > 5) {
      style = {transitionDuration: rightTransitionTime + 'ms', transform: `translateY(-${itemM}px)`, WebkitTransform: `translateY(-${itemM}px)`}
    }

    let triangles = []
    for (var i = 0; i < rows; i++) {
      triangles.push(
        <div key={i} className='case-roll_r_triangle' style={{top: (itemH + itemM * 2) / 2 + (itemH + itemM * 2) * i - 16 + 'px'}} />
      )
    }

    return (
      <div className='case-roll_r' style={{height: caseRollRHeight + 'px'}}>
        {triangles}
        <div className='case-roll_r_wrap' style={style}>
          {catsHtml}
        </div>
      </div>
    )
  }
}

/*
Categories.defaultProps = {
  startCats: monsterCase.categories,
}
*/
