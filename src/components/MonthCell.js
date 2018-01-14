/* eslint-disable import/default */
import React from 'react'
import moment from 'moment'
import styles from '../css/styles.css'

export default class MonthCell extends React.Component {
  buttonStyles () {
    const { isInRange, isStartMonth, isEndMonth } = this.props
    if (isInRange === true) {
      return 'in_range'
    }
    if (isStartMonth === true) {
      return 'start_month'
    }
    if (isEndMonth === true) {
      return 'end_month'
    }
  }

  handleMouseEvent (event) {
    const newState = {}

    switch (event.type) {
      case 'mouseenter':
        newState['hover'] = true
        break

      case 'mouseup':
      case 'mouseleave':
        newState['hover'] = false
        newState['active'] = false
        break

      case 'mousedown':
        newState['active'] = true
        break
    }

    this.setState(newState)
  }

  render () {
    const { month } = this.props
    return (
      <div>
        <span className={this.buttonStyles()} onClick={ () => this.props.selectMonth(month) }>
          <span>
            {moment.monthsShort(moment(month).month())}
          </span>
        </span>
      </div>
    )
  }
}
