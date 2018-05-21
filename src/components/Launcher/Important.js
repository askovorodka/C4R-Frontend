import { Component } from 'react'
import Link from 'src/components/Link'
import { translate } from 'react-i18next'
import './important.scss'

const items = [
  {
    name: 'importantContent.item1',
    img: '/assets/images/launcher/launcher__important_test(1).jpg',
    link: ''
  },
  {
    name: 'importantContent.item2',
    img: '/assets/images/launcher/launcher__important_test(2).jpg',
    link: ''
  },
  {
    name: 'importantContent.item3',
    img: '/assets/images/launcher/launcher__important_test(3).jpg',
    link: ''
  }
]

@translate(['launcher'])
export class Important extends Component {
  render () {
    const {t} = this.props

    return (
      <div className='important'>
        {items.map((item, index) => (
          <Link className='important__item' to={item.link} key={index}>
            <img className='important__img' src={item.img} />
            <div className='important__name'>
              {t(item.name)}
            </div>
          </Link>
        ))}
      </div>
    )
  }
}
