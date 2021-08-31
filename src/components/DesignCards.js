import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function DesignCards() {

    return (
        <div className='cards'>
            <h1>GRAPHIC DESIGN</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                            src=''
                            text='Trifold Hotel Brochure'
                            href='https://www.behance.net/gallery/31876307/Hotel-Brochure' target='_blank'
                        />
                        <CardItem
                            src='/images/MockUp_4.jpg'
                            text='Four Fold LED Lighting Company Brochure'
                            href='https://www.behance.net/gallery/31876403/Brochure-for-LED-Lighting-Services' target='_blank'
                        />
                        <CardItem
                            src='/images/Invitation.jpg'
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
                            src='/images/Christmas.jpg'
                            text='Holiday Postcard'
                            href='https://www.behance.net/gallery/61230067/Design-Work-at-Finer-Line' target='_blank'
                        />
                        <CardItem
                            src='/images/Postcards.jpg'
                            text='Promotional Cards'
                            href='https://www.behance.net/gallery/61230067/Design-Work-at-Finer-Line' target='_blank'
                        />
                        <CardItem
                            src='/images/WorldCup.jpg'
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