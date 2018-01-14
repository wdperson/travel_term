/* eslint-disable import/default */
import React from 'react'
import MonthCell from './MonthCell'
import moment from 'moment'

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
      <div>
        { months.map(month =>
          <MonthCell
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
        {year}
        { this.renderMonths() }
        <br/><br/>
      </div>
    )
  }
}
