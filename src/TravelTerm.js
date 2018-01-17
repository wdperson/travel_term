/* eslint-disable import/default */
import React from 'react'
import Calendar from './components/Calendar'
import moment from 'moment'
import PropTypes from 'prop-types'

export default class TravelTerm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startMonth: null,
      endMonth: null
    }
  }

  selectMonth = (month) => (e) => {
    let {startMonth, endMonth} = this.state
    let newStartMonth = startMonth
    let newEndMonth = endMonth
    if ((startMonth === null) || (moment(month).isBefore(startMonth)) || (!moment(startMonth).isSame(endMonth))) {
      newStartMonth = moment(month)
    }
    if ((endMonth === null) || (moment(month).isAfter(endMonth)) || (!moment(endMonth).isSame(startMonth))) {
      newEndMonth = moment(month)
    }
    if ((moment(month).isSame(startMonth)) && (moment(month).isSame(endMonth))) {
      newStartMonth = null
      newEndMonth = null
    }
    this.setState({
      startMonth: newStartMonth,
      endMonth: newEndMonth
    })
  }

  render () {
    let {startMonth, endMonth} = this.state
    const {years} = this.props
    return (
      <div>
        { years.map(year =>
          <Calendar key={year} year={year} startMonth={startMonth} endMonth={endMonth} selectMonth={this.selectMonth} />
        )}
      </div>
    )
  }
}

TravelTerm.propTypes = {
  years: PropTypes.array
}
