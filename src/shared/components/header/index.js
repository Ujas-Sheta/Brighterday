import React from 'react'
import './header.css';
import HeaderMenu from '../../../assests/image/menu.svg';

export default function Header() {
    return (
        <div className='header-section'>
            <div className='header-flex'>
                <div className='header-logo'>
                    <img src={HeaderMenu} alt='HeaderMenu'></img>
                    <h2>Brighterday</h2>
                </div>
                <div className='header-menu'>
                    <a>Home</a>
                    <a>Products</a>
                    <a>Pricing</a>
                    <a>About Us</a>
                    <p className='ml'>Contact</p>
                </div>
                <div className='header-btn'>
                    <div className='header-btn-req'>
                        <button>Request demo</button>
                    </div>
                    <div className='header-btn-login'>
                        <button >Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
