import React from 'react'
import './footer.css';
import SocialImage1 from '../../../assests/image/twitter.svg'
import SocialImage2 from '../../../assests/image/linkdin.svg'
import ArrowImage from '../../../assests/image/arrow.svg';

export default function Footer() {
    return (
        <div className='footer-section'>
            <div className='footer-grid'>
                <div className='footer-grid-item-1'>
                    <div className='footer-logo'>
                        <h2>Brighterday</h2>
                    </div>
                    <div className='footer-social-flex'>
                        <div className='footer-social-icon'>
                            <img src={SocialImage1} alt='SocialImage1'></img>
                        </div>
                        <div className='footer-social-icon'>
                            <img src={SocialImage2} alt='SocialImage2'></img>
                        </div>
                    </div>
                </div>
                <div className='footer-grid-item-2'>
                    <div className='footer-sub-grid'>
                        <div className='footer-sub-grid-item'>
                            <h5>ESGIQ</h5>
                            <div className='footer-menu'>
                                <p>About</p>
                                <p>Features</p>
                                <p>Pricing</p>
                                <p>Feedback</p>
                            </div>
                        </div>
                        <div className='footer-sub-grid-item'>
                            <h5>Company</h5>
                            <div className='footer-menu'>
                                <p>About Us</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-grid-item-3'>
                    <div className='footer-grid-item-logo'>
                        <h6>Request a demo to try the product</h6>
                    </div>

                    <div className='footer-input'>
                        <input type='text' placeholder='Email'></input>
                        <button>Request demo</button>
                        <div className='footer-input-img'><img src={ArrowImage} alt='ArrowImage'></img></div>
                        
                    </div>

                    <div className='footer-text'>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium</p>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Brighterday © 2021</p>
            </div>
        </div>
    )
}
