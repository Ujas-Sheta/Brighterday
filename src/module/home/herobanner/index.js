import React from 'react'
import './herobanner.css';
import HeroImage from '../../../assests/image/video.jpg';


export default function Herobanner() {
    return (
        <div className='hero-section'>
            <div className='hero-banner'>
                <div className='hero-text'>
                    <h1>Standardise and streamline ESG assessments</h1>
                    <p> Brighterday enables our Private Market clients to simplify, standardise and streamline ESG
                        assessments of fund managers,portfolios, and underlying assets
                    </p>
                    <button>Request demo</button>
                </div>

                <div className='hero-image'>
                    <img src={HeroImage} alt='HeroImage'></img>
                </div>
            </div>

        </div>
    )
}
