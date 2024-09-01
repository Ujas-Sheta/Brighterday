import React from 'react'
import './indicators.css';

export default function Indicators() {
    return (
        <div className='indicators-section'>
            <div className='indicators-text'>
                <h3>ESG Indicators</h3>
                <p>Our cutting edge digital platform helps identify relevant metrics, streamline data collection,
                    analyse performance and track progress, all in one place, across the entire portfolio.
                </p>
            </div>

            <div className='indicators-grid'>
                
                <div className='indicators-item-1'>
                    <div className='line'>
                        <div className='line-active'></div>
                    </div>
                    <div className='text'>
                        <span className='active'>Environmental</span>
                        <span>Social</span>
                        <span>Governance</span>
                    </div>
                </div>

                <div className='indicators-item'>
                    <div className='total-grid'>
                        <div className='total-grid-item'>
                            <p>Total electricity consumption (MWh)</p>
                        </div>

                        <div className='total-grid-item'>
                            <p>Total gas consumption (m3)</p>
                        </div>

                        <div className='total-grid-item'>
                            <p>Percentage certified renewable energy (%)</p>
                        </div>

                        <div className='total-grid-item'>
                            <p>Carbon footprint Scope I, II and III (tCO2eq)</p>
                        </div>

                        <div className='total-grid-item'>
                            <p>Emissions to water (Tonnes)</p>
                        </div>

                        <div className='total-grid-item'>
                            <p>Hazardous waste (Tonnes)</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
