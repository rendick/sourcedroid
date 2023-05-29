import React, { Component } from 'react'
import logo from './unnamed.png'
import "./Main.scss"

export default class Main extends Component {

    render() {
        return (
            <div class="cards">
                {/* first */}

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" style={{ width: 312, height: 312 }} src={logo} alt="wave" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            GitCon
                            <small className='hashtag' >#git</small>
                            <small className='hashtag' >#linux</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* first */}

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
                    </div>
                    <div class="card-title">
                        <a href="#" class="toggle-info btn">
                            <span class="left"></span>
                            <span class="right"></span>
                        </a>
                        <h2>
                            Card title
                            <small>Image from unsplash.com</small>
                        </h2>
                    </div>
                    <div class="card-flap flap1">
                        <div class="card-description">
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div class="card-flap flap2">
                            <div class="card-actions">
                                <a href="#" class="btn">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>




        )
    }
}