/* eslint-disable import/default */
import React from 'react'
import Month from './Month'
import moment from 'moment'
import PropTypes from 'prop-types'

export default class Calendar extends React.Component {
  isInRange (month) {
    const { startMonth, endMonth } = this.props
    if (moment(month).isBetween(startMonth, endMonth)) {
      return true
    }
  }

  isStartMonth (month) {
    const { startMonth } = this.props
    if (moment(month).isSame(startMonth)) {
      return true
    }
  }

  isEndMonth (month) {
    const { endMonth } = this.props
    if (moment(month).isSame(endMonth)) {
      return true
    }
  }

  renderMonths () {
    const { year } = this.props
    let dateStart = moment(new Date(year, 0))
    let dateEnd = moment(new Date(year, 12))
    let months = []

    while (dateEnd > dateStart) {
      months.push(dateStart.format('YYYY-MM-DD'))
      dateStart.add(1, 'month')
    }
    return (
      <div className="month_wrapper">
        { months.map((month, index) =>
          <Month
            key={month}
            month={month}
            isInRange={ this.isInRange(month) }
            isStartMonth={ this.isStartMonth(month) }
            isEndMonth={ this.isEndMonth(month) }
            selectMonth={ (month) => this.props.selectMonth(month) }
          />)}
      </div>
    )
  }

  render () {
    const { year } = this.props

    return (
      <div>
        <div className='year'>{year}</div>
        { this.renderMonths() }
      </div>
    )
  }
}

Calendar.propTypes = {
  startMonth: PropTypes.instanceOf(moment).isRequired,
  endMonth: PropTypes.instanceOf(moment).isRequired,
  year: PropTypes.string.isRequired,
  selectMonth: PropTypes.func.isRequired
}
