import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function WebCards() {

    return (
        <div className='cards'>
            <h1>WEB DEVELOPMENT</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src='./images/VIbe_Check.png'
                            text='Music Generator App'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        <CardItem
                            src='/images/WeatherDash.png'
                            text='Weather Forecast App'
                            href='https://uanq2.github.io/hw6-Weather_App/' target='_blank'
                        />
                        <CardItem
                            src='images/Trivia_Game.png'
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
                            src='/images/AtlasTravel.png'
                            text='Travel Plans Organizer'
                            href='https://project-one-group-three.github.io/vibe-check/' target='_blank'
                        />
                        <CardItem
                            src='/images/Day_Scheduler.png'
                            text='Daily Task Organizer App'
                            href='https://uanq2.github.io/hmk5-Work-Day-Scheduler/' target='_blank'
                        />
                        <CardItem
                            src='/images/NoteTaker.png'
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
