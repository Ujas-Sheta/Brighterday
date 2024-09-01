import React from 'react'
import './investors.css';
import InvestorsImage from '../../../assests/image/investors-group.png';
import InvestorsLogo1 from '../../../assests/image/mufg.png';
import InvestorsLogo2 from '../../../assests/image/paypal.png';
import InvestorsLogo3 from '../../../assests/image/bnp.png';



export default function Investors() {
    return (
        <div className='investors-section'>
            <div className='investors-grid'>
                <div className='investors-text'>
                    <h3>For Investors</h3>
                    <p>We assess fund managers on their ESG approach and we screen 
                        the underlying portfolio.Investors can view the consolidated 
                        information in our dashboard that allows for aclick-through 
                        journey to assess individual managers, funds and assets
                    </p>
                    <div className='investors-logo'>
                        <img src={InvestorsLogo1} alt='InvestorsLogo1'></img>
                        <img src={InvestorsLogo2} alt='InvestorsLogo2'></img>
                        <img src={InvestorsLogo3} alt='InvestorsLogo3'></img>
                    </div>
                </div>
                <div className='investors-image'>
                    <img src={InvestorsImage} alt='InvestorsImage'></img>
                </div>

            </div>
        </div>
    )
}
