import React from 'react'
import './performance.css';
import PerformanceImage from '../../../assests/image/grap.png'

export default function Performance() {
    return (
        <div className='performance-section'>
            <div className='performance-grid'>
                <div className='performance-image'>
                    <img src={PerformanceImage} alt='PerformanceImage'></img>
                </div>
                <div className='performance-text'>
                    <h3>Are you looking for a low-key, low-touch and low-cost solution for ESG reporting?</h3>
                    <p>ESGIQ is a market leading platform allowing investors, fund managers and investee companies to
                        conduct efficient best-in-class ESG reviews, based on the proven and award winning methodology
                        of MJ Hudson's ESG & Sustainability team.
                    </p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    )
}
