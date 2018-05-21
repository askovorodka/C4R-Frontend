import { Component } from 'react'
import { translate } from 'react-i18next'

export class ProfileMessages extends Component {
  render () {
    return (
      <div className='messages'>
        {
          this.props.messages.map((m, i) =>
            <div key={i} className='messages__item messages__item_new'>
              <span className='messages__time'>
                {m.created_at}
              </span>
              <span className='messages__content'>
                {m.notification}
              </span>
            </div>)
        }
        {/* <div className="messages__item messages__item_new">
         <span className="messages__time">
         5 минут назад
         </span>
         <span className="messages__content">
         Текст сообщения.
         </span>
         </div>
         <div className="messages__item messages__item_new">
         <span className="messages__time">
         1 час назад
         </span>
         <span className="messages__content">
         Текст сообщения.
         </span>
         </div>
         <div className="messages__item">
         <span className="messages__time">
         23 часа назад
         </span>
         <span className="messages__content">
         Текст сообщения.
         </span>
         </div> */}
      </div>
    )
  }
}
