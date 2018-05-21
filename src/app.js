import 'src/assets/styles/index.scss'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { SocialButtons } from 'src/components/SocialButtons'
import ReduxToastr from 'react-redux-toastr'
import Payments from 'src/components/Payments'

/**
 * https://reactjs.org/docs/perf.html
 * работает только в дев режиме, для замера нужно:
 * 1. написать в консоле браузера Perf.start()
 * 2. что-то сделать
 * 3. написать Perf.stop()
 * 4. вывести результаты: printInclusive () / printExclusive () / printOperations () / print Wasted () / printDOM ()
 */

if (process.env.NODE_ENV !== 'production') {
  window.Perf = require('react-addons-perf')
}

const Loader = () => (<h1>Loading...</h1>)

@connect(state => ({
  loaded: state.asyncInitialState.loaded
}))

export class App extends Component {
  render () {
    if (this.props.loaded === false) {
      return <Loader />
    }

    return (
      <div className='root-page'>
        <Header />
        <ReduxToastr preventDuplicates />
        {this.props.children}
        <Footer />
        <Payments currency='RUB' viewMode='default' />
        <SocialButtons />
      </div>
    )
  }
}
