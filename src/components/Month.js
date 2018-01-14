/* eslint-disable import/default */
import React from 'react'
import moment from 'moment'
import styles from '../css/styles.css'

export default class Month extends React.Component {
  buttonStyles () {
    const { isInRange, isStartMonth, isEndMonth } = this.props

    if (isInRange === true) {
      return 'in_range'
    } else if (isStartMonth === true) {
      return 'start_month'
    } else if (isEndMonth === true) {
      return 'end_month'
    } else {
      return ''
    }
  }

  render () {
    const { month } = this.props
    return (
      <div className={this.buttonStyles() + " month"} onClick={ () => this.props.selectMonth(month) }>
        {moment.monthsShort(moment(month).month())}
      </div>
    )
  }
}
