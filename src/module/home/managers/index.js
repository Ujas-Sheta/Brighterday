import React from 'react'
import './managers.css';
import ManagersImage from '../../../assests/image/managers.png'
import ManagersLogo1 from '../../../assests/image/mufg.png';
import ManagersLogo2 from '../../../assests/image/paypal.png';
import ManagersLogo3 from '../../../assests/image/bnp.png';



export default function Managers() {
    return (
        <div className='managers-section'>
            <div className='managers-grid'>
                <div className='managers-image'>
                    <img src={ManagersImage} alt='ManagersImage'></img>
                </div>
                <div className='managers-text'>
                    <h3>For Managers</h3>
                    <p>We perform an in-depth review of the assets in the portfolio to identify opportunities and
                        risks.This process can be engaged or outside-in, dependent on asset type
                    </p>
                    <p>ESG IQ aggregates data across the portfolio and provides a summary of company performance on
                        ESG themes and an overview of key ESG indicators
                    </p>
                    <div className='managers-logo'>
                        <img src={ManagersLogo1} alt='InvestorsLogo1'></img>
                        <img src={ManagersLogo2} alt='InvestorsLogo2'></img>
                        <img src={ManagersLogo3} alt='InvestorsLogo3'></img>
                    </div>
                </div>


            </div>
        </div>
    )
}
