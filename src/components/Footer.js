import React from 'react';
import '../styles/Footer.css';
import { TiSocialInstagram } from 'react-icons/ti';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer__container">
                <div>
                    <a href="https://instagram.com/bibekacafe?igshid=iz7bgpt9tuxq">
                        <TiSocialInstagram style={{ fontSize: 55, color: 'black' }} /> 
                    </a> 
                </div>
                <p>Bibeka Cafe Inc. Ⓡ</p>
                <a rel="noreferrer" href="https://www.github.com/uitwaaien6" target="_blank"> {/* might direct the user to my github */}
                    <p id="footer__designer-signature">Designed by Mert Agca.</p>
                </a>

            </div>
        );
    };
}

export default Footer;