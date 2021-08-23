import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    function handleClick(event) {
        console.log('Clicked')
        console.log(event)
        window.open('https://www.google.com')
    }
    return (
        <div className='cards'>
            <h1>Web Development</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <div onClick={handleClick(this)}><CardItem
                            src='images/Vibe_Check.png'
                            text='Music Generator App'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        </div>
                        <CardItem
                            src='images/WeatherDash.png'
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
            <h1>Graphic Design</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src='images/RaffaeloMockUp.jpg'
                            text='Hotel Brochure'
                            Link='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        <CardItem
                            src='images/Postcards.jpg'
                            text='Postcards 5 Senses Design'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        <CardItem
                            src='images/Invitation.jpg'
                            text='Private Event Invitation to showcase new establishment'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Cards
