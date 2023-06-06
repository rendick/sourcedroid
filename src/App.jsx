import React, { Component } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { Analytics } from '@vercel/analytics/react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        {/* <Analytics mode={'production'} /> */}
      </div>


    )
  }
}
