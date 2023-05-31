import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div class="sticky">
                    <a href='https://u24.gov.ua/'>Support Ukraine 🇺🇦</a>
                </div>
                <div className="header">
                    <a href="#default" class="logo">🇺🇦 SourceDroid</a>
                    <div className="header-right">
                        <a className="active" href="#home">Головна</a>
                        <a href="#contact">Додати</a>
                        <a href="#about">Про нас</a>
                    </div>
                </div>
            </div>
        )
    }
}