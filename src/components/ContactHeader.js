import '../styles/contact-header.css'
import { FaEnvelopeOpenText, FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ContactBody } from './ContactBody'


export const ContactHeader = () => {

    return (
        <>
            <div className="contact-top">
                <div className="contact-top__body">
                    <h2 className="contact-title">Contact Me</h2>
                    <div className="contact-banner">
                        <div className="contact-banner-icons">
                            <div className="banner-icon">
                                <a href="https://www.facebook.com/aprilj.limas/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                            </div>
                            <div className="banner-icon">
                                <a href="https://twitter.com/aprilj_limas" target="_blank" rel="noreferrer"><FaTwitter /></a>
                            </div>
                            <div className="banner-icon">
                                <a href="https://www.instagram.com/posh_chic04/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
                            </div>
                            <div className="banner-icon">
                                <a href="https://www.linkedin.com/in/aprillimas/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                            <div className="banner-icon">
                                <a href="https://github.com/april-limas" target="_blank" rel="noreferrer"><FaGithub className="github-a"/></a>
                                
                            </div>
                        </div>
                        <div className="contact-banner-image">
                            <a href="#contact-form"><FaEnvelopeOpenText /></a>
                        </div>
                    </div>
                </div>  
                <ContactBody />
            </div>
        </>
    )
}