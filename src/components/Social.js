import React from 'react';
import WhatsappIcon from "../UI/icon/WhatsappIcon";
import ViberIcon from "../UI/icon/ViberIcon";
import TelegramIcon from "../UI/icon/TelegramIcon";

const Social = () => {



    return (
        <ul className='social'>
            <li className="social-item">
                <WhatsappIcon/>
            </li>
            <li className="social-item">
                <ViberIcon/>
            </li>
            <li className="social-item">
                <TelegramIcon/>
            </li>
        </ul>
    );
};

export default Social;
