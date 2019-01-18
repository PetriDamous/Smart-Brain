import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './smartbrain.gif';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pv4"><img alt='logo' src={brain}></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;