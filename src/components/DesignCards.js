import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from '../assets/images/Christmas.jpg';
import image2 from '../assets/images/Invitation.jpg';
import image3 from '../assets/images/MockUp_4.jpg';
import image4 from '../assets/images/Postcards.jpg';
import image5 from '../assets/images/RaffaeloMockUp.jpg';
import image6 from '../assets/images/WorldCup.jpg';

function DesignCards() {

    return (
        <div className='cards'>
            <h1>GRAPHIC DESIGN</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src={image5}
                            text='Trifold Hotel Brochure'
                            href='https://www.behance.net/gallery/31876307/Hotel-Brochure' target='_blank'
                        />
                        <CardItem
                            src={image3}
                            text='Four Fold LED Lighting Company Brochure'
                            href='https://www.behance.net/gallery/31876403/Brochure-for-LED-Lighting-Services' target='_blank'
                        />
                        <CardItem
                            src={image2}
                            text='Private Event Invitation'
                            href='https://www.behance.net/gallery/61230067/Design-Work-at-Finer-Line' target='_blank'
                        />
                    </ul>
                </div>
            </div>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src={image1}
                            text='Holiday Postcard'
                            href='https://www.behance.net/gallery/61230067/Design-Work-at-Finer-Line' target='_blank'
                        />
                        <CardItem
                            src={image4}
                            text='Promotional Cards'
                            href='https://www.behance.net/gallery/61230067/Design-Work-at-Finer-Line' target='_blank'
                        />
                        <CardItem
                            src={image6}
                            text='World Cup Match Stats Tracker'
                            href='https://www.behance.net/gallery/31876775/Matches-score-tracking-sheet' target='_blank'
                        />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default DesignCards