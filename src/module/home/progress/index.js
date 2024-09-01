import React from 'react'
import './progress.css';
import ProgressImage from '../../../assests/image/proven.png';



export default function Progress() {
    return (
        <div className='progress-section'>
            <div className='progress-grid'>
                <div className='progress-image'>
                    <img src={ProgressImage} alt='ProgressImage'></img>
                </div>
                
                <div className='progress-text'>
                    <h3>Our proven ESG methodology identifies relevant ESG themes, highlights value
                        creation opportunities and risks and importantly helps our clients track progress and take
                        ACTION</h3>
                    <p>Our cutting edge digital platform helps identify relevant metrics, streamline data collection,
                        analyse performance and track progress, all in one place, across the entire portfolio. With a
                        click of a button you can see how your investments measure up, highlighting the champions and
                        identifying where there is more work to do.
                        Our framework is aligned with relevant regulatory and industry standards including PRI, SASB,
                        GRI and TCFD
                    </p>
                </div>


            </div>
        </div>
    )
}
