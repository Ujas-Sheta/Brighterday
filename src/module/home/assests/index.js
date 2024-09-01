import React from 'react'
import './assests.css';
import AssestsImage from '../../../assests/image/progress.png'
import AssestsLogo1 from '../../../assests/image/mufg.png';
import AssestsLogo2 from '../../../assests/image/paypal.png';
import AssestsLogo3 from '../../../assests/image/bnp.png';



export default function Assests() {
    return (
        <div className='assests-section'>
            <div className='assests-grid'>
                <div className='assests-text'>
                    <h3>For Assets</h3>
                    <p>We identify ESG risks and opportunities for the specific industry, we assess the current 
                        state and we help company boards drive progress. As needed, our Advisors can create a 
                        deep-dive asset-level report including concrete and tangible improvement projects.
                    </p>
                    <div className='assests-logo'>
                        <img src={AssestsLogo1} alt='AssestsLogo1'></img>
                        <img src={AssestsLogo2} alt='AssestsLogo2'></img>
                        <img src={AssestsLogo3} alt='AssestsLogo3'></img>
                    </div>
                </div>
                <div className='assests-image'>
                    <img src={AssestsImage} alt='AssestsImage'></img>
                </div>
            </div>
        </div>
    )
}
