/* eslint-disable import/default */
import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import TravelTerm from './TravelTerm'

const years = ['2017', '2018', '2019']

ReactDOM.render(
  <TravelTerm name={'TravelTerm'} years={years} />,
  document.getElementById('travel_term')
)
