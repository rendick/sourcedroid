import React, { Component } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { Analytics } from '@vercel/analytics/react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* <Analytics mode={'production'} /> */}
      </div>


    )
  }
}
