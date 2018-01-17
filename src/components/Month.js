/* eslint-disable import/default */
import React from 'react'
import moment from 'moment'
import '../css/styles.css'
import PropTypes from 'prop-types'

export default class Month extends React.Component {
  render () {
    const { month, style, selectMonth } = this.props
    return (
      <div className={`${style} month`} onClick={selectMonth(month)}>
        {moment.monthsShort(moment(month).month())}
      </div>
    )
  }
}

Month.propTypes = {
  month: PropTypes.string,
  style: PropTypes.string,
  selectMonth: PropTypes.func.isRequired
}
