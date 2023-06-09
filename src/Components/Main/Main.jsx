import React, { Component } from 'react';
import isowrt from './Images/isowrt/isowrt.png';
import twc from './Images/twc/twc.png';
import "./Main.scss";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
        };
    }

    handleTagClick = (tag) => {
        const { selectedTags } = this.state;
        if (selectedTags.includes(tag)) {
            this.setState({
                selectedTags: selectedTags.filter((selectedTag) => selectedTag !== tag),
            });
        } else {
            this.setState({
                selectedTags: [...selectedTags, tag],
            });
        }
    };

    render() {
        const { selectedTags } = this.state;

        const filteredCards = data.filter((card) => {
            if (selectedTags.length === 0) {
                return true;
            }
            return selectedTags.some((tag) => card.tags.includes(tag));
        });

        return (
            <div className="cards">
                <div className="tag-buttons">
                    <button
                        className={selectedTags.includes('web') ? 'active' : ''}
                        onClick={() => this.handleTagClick('web')}
                    >
                        #web
                    </button>
                    <button
                        className={selectedTags.includes('mobile') ? 'active' : ''}
                        onClick={() => this.handleTagClick('mobile')}
                    >
                        #mobile
                    </button>
                    <button
                        className={selectedTags.includes('linux') ? 'active' : ''}
                        onClick={() => this.handleTagClick('linux')}
                    >
                        #linux
                    </button>
                </div>
                {filteredCards.map((card, index) => (
                    <div className="card" data-tags={card.tags.join(' ')} key={index}>
                        <div className="card__image-holder">
                            <img
                                className="card__image"
                                style={{ width: 312, height: 312 }}
                                src={card.image}
                                alt={card.alt}
                            />
                        </div>
                        <div className="card-title">
                            <a href="#" className="toggle-info btn">
                                <span className="left"></span>
                                <span className="right"></span>
                            </a>
                            <h2>
                                {card.title}
                                <small className="description">{card.description}</small>
                            </h2>
                        </div>
                        <div className="card-flap flap1">
                            <div className="card-description">{card.description}</div>
                            <div className="card-flap flap2">
                                <div className="card-actions">
                                    <a href="#" className="btn">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const data = [
    {
        title: 'isowrt',
        description: 'Tool to create bootable USB',
        tags: ['linux'],
        image: isowrt,
        alt: 'wave',
    },
    {
        title: 'twc',
        description: 'CLI Tron Wallet',
        tags: ['linux'],
        image: twc,
        alt: 'mountain',
    },
    {
        title: 'Card title',
        description: 'Image from unsplash.com',
        tags: ['web'],
        image: 'https://source.unsplash.com/300x225/?field',
        alt: 'field',
    },
];
