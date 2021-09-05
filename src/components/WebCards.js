import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from '../assets/images/Day_Scheduler.png';
import image2 from '../assets/images/NoteTaker.png';
import image3 from '../assets/images/Trivia_Game.png';
import image4 from '../assets/images/VIbe_Check.png';
import image5 from '../assets/images/WeatherDash.png';
import image6 from '../assets/images/AtlasTravel.png';

function WebCards() {

    return (
        <div className='cards'>
            <h1>WEB DEVELOPMENT</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src={image4}
                            text='Music Generator App'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        <CardItem
                            src={image5}
                            text='Weather Forecast App'
                            href='https://uanq2.github.io/hw6-Weather_App/' target='_blank'
                        />
                        <CardItem
                            src={image3}
                            text='Soccer World Cup Trivia'
                            href='https://uanq2.github.io/hmk4_Quiz/' target='_blank'
                        />
                    </ul>
                </div>
            </div>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src={image6}
                            text='Travel Plans Organizer'
                            href='https://atlas-travel.herokuapp.com/' target='_blank'
                        />
                        <CardItem
                            src={image1}
                            text='Daily Task Organizer App'
                            href='https://uanq2.github.io/hmk5-Work-Day-Scheduler/' target='_blank'
                        />
                        <CardItem
                            src={image2}
                            text='Digital Note Taker App'
                            href='https://un-note-taker.herokuapp.com/' target='_blank'
                        />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default WebCards
