import { Component } from 'react'
import { translate } from 'react-i18next'
import { Arrow } from 'src/components/Arrow'
import config from 'src/lib/config'
import './news.scss'
import Link from 'src/components/Link'

const test = {
  news: [
    {
      name: 'News1',
      text: 'Жил-был енот. Звали его Еноша. В школу он не еще не ходил. Еноша отличался тем, что был очень любопытен, довольно смел и в меру хитёр. И вот однажды Еноша путешествовал по лесу. Он был очень занят. Дело в том, что Еноша вёл дневник наблюдений и записывал в него всё, что находил интересное в лесу. — Вот это ползет жук-олень. Йохохо ахаха ололо',
      link: './',
      img: '/assets/images/launcher/launcher__news_test.jpg'
    },
    {
      name: 'News2',
      text: 'Жил-был енот. Звали его Еноша. ',
      link: './',
      img: '/assets/images/launcher/launcher__news_test.jpg'
    },
    {
      name: 'News3',
      text: 'Жил-был енот. Звали его Еноша. В школу он не еще не ходил. Еноша отличался тем, что был очень любопытен, довольно смел и в меру хитёр. И вот однажды Еноша путешествовал по лесу. Он был очень занят. Дело в том, что Еноша вёл дневник наблюдений и записывал в него всё, что находил интересное в лесу. — Вот это ползет жук-олень. Йохохо ахаха ололо',
      link: './',
      img: '/assets/images/launcher/launcher__news_test.jpg'
    }
  ]
}

@translate(['launcher'])
export class News extends Component {
  constructor () {
    super()
    this.state = {newsOpenedIndex: 0}
  }

  render () {
    const {t} = this.props
    const maxNewsLength = config.launcher.news.maxNewsLength

    return (
      <div className='news'>
        {test.news.map((item, index) => (
          <div key={index} className={'news__item ' + (
            this.state.newsOpenedIndex === index ? ('news__item_opened') : (''))}>
            <h2 className='news__heading'
              onClick={() => { this.setState({newsOpenedIndex: index}) }}>
              <Arrow className='news__arrow' />
              {item.name}
            </h2>
            <div className='news__body'>
              <p className='news__text'>
                {item.text.slice(0, maxNewsLength) + ' ... '}
              </p>
              <Link className='news__more news__link link' to={item.link} target='_blank'>
                {t('NEWS_CONTENT.READ_MORE')}
              </Link>
              <a href={item.link} target='_blank'>
                <img
                  className='news__img'
                  src={item.img}
                  alt='News picture' />
              </a>
            </div>
          </div>
        ))}
        <Link className='news__all news__link link' to={t('NEWS_CONTENT.COMMUNITY_LINK')} target='_blank'>
          {t('NEWS_CONTENT.ALL_NEWS')}
        </Link>
      </div>
    )
  }
}
