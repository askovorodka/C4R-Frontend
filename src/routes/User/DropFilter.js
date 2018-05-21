'use strict'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'src/components/Select'
import { getQualityKeyByValue, skinsQualityList } from 'src/lib/steam'

export class DropFilter extends Component {
  static propTypes = {
    onFilterUpdate: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.chooseQuality = this.chooseQuality.bind(this)
    this.choosePrice = this.choosePrice.bind(this)
    this.chooseDate = this.chooseDate.bind(this)
    this.state = {
      priceGreater: NaN,
      priceLesser: NaN,
      quality: ''
    }

    const d = new Date()
    const today = d.toISOString()
    const dayAgo = new Date(d.getTime() - 1000 * 60 * 60 * 24).toISOString()
    const weekAgo = new Date(d.getTime() - 1000 * 60 * 60 * 24 * 7).toISOString()
    const monthAgo = new Date(d.getTime() - 1000 * 60 * 60 * 24 * 31).toISOString()

    this.state.dateRanges = [
      {
        name: 'clear',
        'createdAt[after]': '',
        'createdAt[before]': ''
      },
      {
        name: 'filter-day-range',
        'createdAt[after]': dayAgo,
        'createdAt[before]': today
      },
      {
        name: 'filter-week-range',
        'createdAt[after]': weekAgo,
        'createdAt[before]': today
      },
      {
        name: 'filter-month-range',
        'createdAt[after]': monthAgo,
        'createdAt[before]': today
      }
    ]
  }

  chooseDate (dateRange) {
    const state = {
      ...this.state,
      ...dateRange
    }
    this.refs.selectDate.closeDropdown()
    this.setState(state, () => this.props.onFilterUpdate(state))
  }

  chooseQuality (quality) {
    this.refs.selectQuality.closeDropdown()
    const state = {...this.state, quality: skinsQualityList[quality]}
    this.setState(state, () => this.props.onFilterUpdate(state))
  }

  choosePrice () {
    this.refs.selectPrice.closeDropdown()
    const state = {
      ...this.state,
      priceLesser: this.state.priceLesser,
      priceGreater: this.state.priceGreater
    }
    this.setState(state, () => this.props.onFilterUpdate(state))
  }

  render () {
    return (
      <div className='inner-page__filters'>
        <Select placeholder='Дата' ref='selectDate'>
          <div className='select__content select__content_type_list'>
            {this.state.dateRanges.map(d =>
              <div
                onClick={e => this.chooseDate(d)}
                key={d.name}>
                {d.name}
              </div>
            )}
          </div>
        </Select>

        <Select placeholder='Стоимость' ref='selectPrice'>
          <div className='select__content select__content_type_from-to form'>
            <div className='form__fieldset select__fieldset select__fieldset_type_from'>
              <input
                className='select__input form__input'
                type='number'
                value={this.state.priceGreater}
                onChange={this.updatePriceGreaterInputValue.bind(this)}
              />
              <svg className='select__currency currency'>
                <path className='currency__symb currency__symb_type_rub'
                  d='M3,.2V8.3H.1V9.5H3v3.7H.1v1H3v3H4.1v-3h7v-1h-7V9.5h8V.2Zm1.1,8v-7h7V8.3h-7Z' />
              </svg>
            </div>
            <div className='form__fieldset select__fieldset select__fieldset_type_to'>
              <input
                className='select__input form__input'
                type='number'
                value={this.state.priceLesser}
                onChange={this.updatePriceLesserInputValue.bind(this)}
              />
              <svg className='select__currency currency'>
                <path className='currency__symb currency__symb_type_rub'
                  d='M3,.2V8.3H.1V9.5H3v3.7H.1v1H3v3H4.1v-3h7v-1h-7V9.5h8V.2Zm1.1,8v-7h7V8.3h-7Z' />
              </svg>
            </div>
            <button
              className='btn select__btn'
              onClick={e => this.choosePrice()}>
              Подтвердить
            </button>
          </div>
        </Select>

        <Select placeholder={getQualityKeyByValue(this.state.quality) || 'Качество'} ref='selectQuality'>
          <div>
            {
              getQualityKeyByValue(this.state.quality) ? <div
                onClick={e => this.chooseQuality('')}
                key={-1}>
                Сбросить
              </div> : null
            }
            {
              Object.keys(skinsQualityList).map(q =>
                <div
                  onClick={e => this.chooseQuality(q)}
                  key={q}>
                  {q}
                </div>
              )
            }
          </div>
        </Select>
      </div>
    )
  }

  updatePriceGreaterInputValue (event) {
    this.setState({
      priceGreater: event.target.value
    })
  }

  updatePriceLesserInputValue (event) {
    this.setState({
      priceLesser: event.target.value
    })
  }
}
