/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import TravelTerm from './TravelTerm'

ReactDOM.render(
  <TravelTerm name={'TravelTerm'} />,
  document.getElementById('travel_term')
)
