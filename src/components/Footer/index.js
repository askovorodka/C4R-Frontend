import { Component } from 'react'
import { Nav } from 'src/components/Nav'
import { translate } from 'react-i18next'
import config from 'src/lib/config'
import './index.scss'

const email = config.static.webmasterEmail
const payments = config.payments

@translate(['common'])
export class Footer extends Component {
  constructor () {
    super()
    this.state = {
      navItems: []
    }
  }

  componentDidMount () {
    this.setState({
      navItems: [
        {
          name: 'NAV.TERMS_AND_CONDITIONS',
          link: 'terms-and-conditions'
        },
        {
          name: 'NAV.HOW_TO_PAY',
          link: 'how-to-pay'
        },
        {
          name: 'NAV.POLICY',
          link: 'policy'
        },
        {
          name: 'NAV.USER_REFUNDS',
          link: 'User-refunds'
        },
        {
          name: 'NAV.FAQ',
          link: 'faq'
        },
        {
          name: 'NAV.USER_AGREEMENT',
          link: 'User-argeement'
        }
      ]
    })
  }

  render () {
    const {t} = this.props

    return (
      <footer className='footer'>
        <Nav className='footer__nav' navItems={this.state.navItems} />
        <h2 className='footer__heading'>
          {t('FOOTER.FOOTER_HEADING')}
        </h2>
        <div className='footer__pay'>
          {
            payments.map(p =>
              p.id && (
                <img key={p.id} src={`/assets/images/pay/footer/footer__pay_${p.id}.png`}
                  alt={t(p.id)}
                  className='footer__pay-item' />
              )
            )
          }
        </div>
        <p className='footer__text'>
          {t('FOOTER.RIGHTS')}
        </p>
        <h3 className='footer__heading footer__heading_minor'>
          <a href='/contacts' className='link'>
            {t('FOOTER.CONTACTS')}
          </a>
        </h3>
        <p className='footer__text'>
          {t('FOOTER.OFFICIAL_DATA')}
        </p>
      </footer>
    )
  }
}
