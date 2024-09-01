import React from 'react'
import './benefits.css'
import Benefits1 from '../../../assests/image/built.svg'
import Benefits2 from '../../../assests/image/design.svg'
import Benefits3 from '../../../assests/image/advisory.svg'
import Benefits4 from '../../../assests/image/compare.svg'
import Benefits5 from '../../../assests/image/share.svg'
import Benefits6 from '../../../assests/image/track.svg'
import Benefits7 from '../../../assests/image/verfy.svg'


export default function Benefits() {
  return (
    <div className='benefits-section'>
        <div className='benefits-grid'>
            <div className='benefits-item'>
                <span>Why ESG IQ</span>
                <h2>Key Benefits</h2>
            </div>
            <div className='benefits-item'>
                <button>Request demo</button>
            </div>
        </div>

        <div className='benefits-card'>
            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits1} alt='Benefits1'></img>
                </div>
                <h3>Pre built workflow</h3>
                <p>Pre-built workflow to streamline the collection and aggregation of data</p>
            </div>

            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits2} alt='Benefits2'></img>
                </div>
                <h3>Pre-designed templates</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits3} alt='Benefits3'></img>
                </div>
                <h3>Access to advisory</h3>
                <p>Access to MJ Hudson Advisory expertise and ESG frameworks</p>
            </div>

            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits4} alt='Benefits4'></img>
                </div>
                <h3>Compare to benchmarks</h3>
                <p>Compare against benchmarks, set goals, define projects and track progress</p>
            </div>

            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits5} alt='Benefits5'></img>
                </div>
                <h3>Share output</h3>
                <p>Visualise ESG performance and share output with stakeholders</p>
            </div>

            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits6} alt='Benefits6'></img>
                </div>
                <h3>Track progress</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='card-item'>
                <div className='card-icon'>
                    <img src={Benefits7} alt='Benefits7'></img>
                </div>
                <h3>Verify data and mitigate greenwashing</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}
