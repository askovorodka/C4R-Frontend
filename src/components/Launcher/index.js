import { Component } from 'react'
import { Banners } from 'src/components/Launcher/Banners'
// import { News } from 'src/components/Launcher/News'
// import { Important } from 'src/components/Launcher/Important'
// import { Offers } from 'src/components/Launcher/Offers'
// import { translate } from 'react-i18next'
// import config from 'src/lib/config'
import './index.scss'
// import { Button } from 'src/components/Button'

export const Launcher = () => {
  return (
    <section className='launcher'>
      <Banners />
      {/* <Tabs /> */}
    </section>
  )
}

// @translate(['launcher'])
// export class Tabs extends Component {
//   constructor () {
//     super()
//     this.state = {
//       tab: 'news'
//     }
//   }

//   render () {
//     const {t} = this.props
//     const {navItems} = config.launcher.nav
//     const {tab} = this.state

//     return (
//       <div className='tabs'>
//         <nav className='tabs__nav'>
//           {navItems.map((item, index) => (
//             <Button
//               className={'tabs__item ' + (this.state.tab === item ? (
//               'tabs__item_active') : (''))}
//               key={index}
//               onClick={() => { this.setState({tab: item}) }}>
//               {t(item)}
//             </Button>
//           ))}
//         </nav>
//         {tab === 'news' && <News />}
//         {tab === 'important' && <Important />}
//         {tab === 'offers' && <Offers />}
//       </div>
//     )
//   }
// }
