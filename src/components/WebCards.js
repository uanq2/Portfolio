import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function WebCards() {
    function handleClick(event) {
        console.log('Clicked')
        console.log(event)
        // window.open('https://www.google.com')
    }
    return (
        <div className='cards'>
            <h1>WEB DEVELOPMENT</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <div onClick={handleClick(this)}><CardItem
                            src='./images/VIbe_Check.png'
                            text='Music Generator App'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        </div>
                        <CardItem
                            src='/images/WeatherDash.png'
                            text='Weather Forecast in any city App'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        <CardItem
                            src='images/Trivia_Game.png'
                            text='Trivia app to test your knowledge on Soccer World Cup'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WebCards
