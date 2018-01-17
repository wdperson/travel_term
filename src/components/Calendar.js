/* eslint-disable import/default */
import React from 'react'
import Month from './Month'
import moment from 'moment'
import PropTypes from 'prop-types'

export default class Calendar extends React.Component {
  style (month) {
    const { startMonth, endMonth } = this.props
    if (moment(month).isBetween(startMonth, endMonth)) {
      return 'in_range'
    }
    if (moment(month).isSame(startMonth)) {
      return 'start_month'
    }

    if (moment(month).isSame(endMonth)) {
      return 'end_month'
    }
  }

  renderMonths () {
    const { year } = this.props
    let dateStart = moment(new Date(year, 0))
    let dateEnd = moment(new Date(year, 12))
    let months = []

    while (dateEnd.valueOf() > dateStart.valueOf()) {
      months.push(dateStart.format('YYYY-MM-DD'))
      dateStart.add(1, 'month')
    }
    return (
      <div className="month_wrapper">
        { months.map((month, index) =>
          <Month
            key={month}
            month={month}
            style={this.style(month)}
            selectMonth={this.props.selectMonth }
          />)}
      </div>
    )
  }

  render () {
    const { year } = this.props

    return (
      <div>
        <div className='year'>
          {year}
        </div>
        { this.renderMonths() }
      </div>
    )
  }
}

Calendar.propTypes = {
  startMonth: PropTypes.instanceOf(moment),
  endMonth: PropTypes.instanceOf(moment),
  year: PropTypes.string.isRequired,
  selectMonth: PropTypes.func.isRequired
}
