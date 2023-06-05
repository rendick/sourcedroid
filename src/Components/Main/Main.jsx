import React, { Component } from 'react';
import isowrt from './Images/isowrt/isowrt.png';
import "./Main.scss";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [], // Список выбранных хештегов
        };
    }

    // Обработчик клика по хештегу
    handleTagClick = (tag) => {
        const { selectedTags } = this.state;
        if (selectedTags.includes(tag)) {
            // Если хештег уже выбран, удаляем его из списка выбранных
            this.setState({
                selectedTags: selectedTags.filter((selectedTag) => selectedTag !== tag),
            });
        } else {
            // Если хештег не выбран, добавляем его в список выбранных
            this.setState({
                selectedTags: [...selectedTags, tag],
            });
        }
    };

    render() {
        const { selectedTags } = this.state;

        // Фильтрация элементов .card на основе выбранных хештегов
        const filteredCards = data.filter((card) => {
            // Если нет выбранных хештегов, отображаем все карточки
            if (selectedTags.length === 0) {
                return true;
            }
            // Если карточка имеет хотя бы один выбранный хештег, отображаем ее
            return selectedTags.some((tag) => card.tags.includes(tag));
        });

        return (
            <div className="cards">
                {/* Вывод отфильтрованных карточек */}
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

                {/* Кнопки для выбора хештегов */}
                <div className="tag-buttons">
                    <button
                        className={selectedTags.includes('it') ? 'active' : ''}
                        onClick={() => this.handleTagClick('it')}
                    >
                        #it
                    </button>
                    <button
                        className={selectedTags.includes('web') ? 'active' : ''}
                        onClick={() => this.handleTagClick('web')}
                    >
                        #web
                    </button>
                    {/* Добавьте другие кнопки хештегов здесь */}
                </div>
            </div>
        );
    }
}

// Данные для карточек
const data = [
    {
        title: 'isowrt',
        description: 'isowrt - easy way to burn a bootable flash drive with ISO',
        tags: ['it'],
        image: isowrt,
        alt: 'wave',
    },
    {
        title: 'twc',
        description: 'Image from unsplash.com',
        tags: ['it'],
        image: 'https://source.unsplash.com/300x225/?mountain',
        alt: 'mountain',
    },
    {
        title: 'Card title',
        description: 'Image from unsplash.com',
        tags: ['web'],
        image: 'https://source.unsplash.com/300x225/?field',
        alt: 'field',
    },
    // Добавьте другие данные карточек здесь
];
