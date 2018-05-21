import { Component } from 'react'
import PropTypes from 'prop-types'
import { LoadingError } from 'src/components/LoadingError'
import { Spinner } from 'src/components/Spinner'
import { HistoryItem } from './HistoryItem'
import ReactPaginate from 'react-paginate'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { getDropHistory } from './actions'
import Link from 'src/components/Link'
import { Arrow } from 'src/components/Arrow'
import './drop-history.scss'

const itemsPerPage = 8

@connect(state => ({
  isAuth: !!state.profile.user.id,
  user: state.profile.user,
  userRanks: state.dictionaries.user_ranks
}), {getDropHistory}, null, {withRef: true})
@translate(['common'], {withRef: true})
export class DropHistory extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    getDropHistory: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      loadingError: false,
      items: [],
      filter: {}
    }
  }

  onPageChange = (page = {}) => {
    this.setState({...this.state, page: page.selected}, this.refresh)
  }

  onFilterUpdate = (filter = {}) => {
    this.setState({...this.state, filter}, this.refresh)
  }

  refresh () {
    this.getDrops()
  }

  componentWillMount () {
    this.getDrops()
  }

  getDrops () {
    this.setState({...this.state, isLoading: true, loadingError: false})
    this.props.getDropHistory(this.props.user.id, this.state.page, itemsPerPage,
      this.state.filter).then(res => {
        this.setState(
        {...this.state, isLoading: false, items: res.items, total: res.total})
      }).catch(e => {
        console.log('catch', e)
        this.setState({...this.state, isLoading: false, loadingError: true})
      })
  }

  render () {
    if (this.state.loadingError === true) {
      return <LoadingError retry={this.getDrops.bind(this)} />
    }

    if (this.state.isLoading === true) {
      return <Spinner />
    }
    const {t} = this.props
    return (
      <div className='drop-history drop-history'>
          <nav className='drop-history__nav'>
            <Link className='drop-history__link' to='/profile/inventory'>
              {t('PROFILE.NAV.INVENTORY')}
            </Link>
            <div className='drop-history__link drop-history__link_active'>
              {t('PROFILE.NAV.HISTORY')}
            </div>
          </nav>
        <div className='drop-history__list'>
          {
              typeof this.state.items !== 'undefined'
            ? this.state.items.map(
              drop => {
                return <HistoryItem key={drop.id} {...drop} />
              }
            ) : ''
          }
        </div>
        <ReactPaginate
          forcePage={(this.state.page)}
          pageCount={~~(this.state.total / itemsPerPage + 1)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          onPageChange={this.onPageChange}
          previousLabel={<Arrow className='drop-history__arrow' />}
          nextLabel={<Arrow className='drop-history__arrow drop-history__arrow_next' />}
          breakLabel={<div className='drop-history__paginate-break'>...</div>}
          containerClassName='drop-history__paginate'
          pageClassName='drop-history__paginate-item'
          pageLinkClassName='drop-history__paginate-link'
          activeClassName='drop-history__paginate-item_active'
          previousLinkClassName='drop-history__paginate-item'
          nextLinkClassName='drop-history__paginate-item' />
      </div>
    )
  }
}
