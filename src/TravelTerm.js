/* eslint-disable import/default */
import React from 'react'
import Calendar from './components/Calendar'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

export default class TravelTerm extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      startMonth: null,
      endMonth: null
    }
  }

  selectMonth (month) {
    let {startMonth, endMonth} = this.state
    let newStartMonth = startMonth
    let newEndMonth = endMonth
    if ((startMonth === null) || (moment(month).isBefore(startMonth)) || (!moment(startMonth).isSame(endMonth))) {
      newStartMonth = moment(month)
    }
    if ((endMonth === null) || (moment(month).isAfter(endMonth)) || (!moment(endMonth).isSame(startMonth))) {
      newEndMonth = moment(month)
    }
    if (moment(month).isSame(startMonth)) {
      newStartMonth = null
    }
    if (moment(month).isSame(endMonth)) {
      newEndMonth = null
    }
    this.setState({
      startMonth: newStartMonth,
      endMonth: newEndMonth
    })
  }

  render () {
    const years = ['2017', '2018', '2019']
    let {startMonth, endMonth} = this.state
    return (
      <div>
        { years.map(year =>
          <Calendar key={year} year={year} startMonth={startMonth} endMonth={endMonth} selectMonth={(month) => this.selectMonth(month)}/>)}
      </div>
    )
  }
}
