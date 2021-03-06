import { FaWhatsappSquare, FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import Image from '../Image';
import Heading2 from '../Heading2';

import profileImageRoot from '../../images/profile-image.jpg';
import StyledProfile from './styles';

export default function Profile(){
    return (
        <StyledProfile id="sobre-mim">
            <figure>
                <Image
                    imageRoot={profileImageRoot}
                    description="profile-image"
                />
            </figure>

            <div className="Profile-info">
                <Heading2 text="WILLIAM BERG ARAUJO DIOGO" />

                <p>Desenvolvedor Frontend - React</p>
                <div className="Profile-medias">
                    <a href="https://github.com/williamberg123" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/william-berg-124826230/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:williamberg567@gmail.com" target="_blank" rel="noreferrer">
                        <SiGmail />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5588997830537" target="_blank" rel="noreferrer">
                        <FaWhatsappSquare />
                    </a>
                    <a className="instagram-link" href="https://www.instagram.com/wi_diogo/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </div>
            </div>
        </StyledProfile>
    );
}
