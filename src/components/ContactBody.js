import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { FaMapMarkerAlt, FaLinkedinIn, FaTwitter, FaInstagramSquare, FaFacebookF, FaGithub } from 'react-icons/fa'
import { FiDownload } from "react-icons/fi"
import { MdEmail } from 'react-icons/md'
import { CgPhone } from "react-icons/cg"
import resume from '../data/april-limas-resume.pdf'
import "../styles/contact-body.css"
import { SubmitFormModal } from './SubmitFormModal'

export const ContactBody = () => {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")

    useEffect (() => {
        window.addEventListener("click", outsideClick)

        return () => window.removeEventListener('click', outsideClick);
    }, [])

    const handleChange = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        } else if (e.target.name == "email") {
            setEmail(e.target.value)
        } else {
            setMessage(e.target.value)
        }
    }

    const handleFocus = (e) => {
        if (e.target.name == "name") {
            let name = document.getElementById('inputName')
            name.classList.add("focus")
        } else if (e.target.name == "email") {
            let email = document.getElementById('inputEmail')
            email.classList.add("focus")
        } else {
            let message = document.getElementById('inputMessage')
            message.classList.add("focus")
        }
    }

    const handleBlur = (e) => {
        if (e.target.value == "") {
            if (e.target.name == "name") {
                let name = document.getElementById('inputName')
                name.classList.remove("focus")
            } else if (e.target.name == "email") {
                let email = document.getElementById('inputEmail')
                email.classList.remove("focus")
            } else {
                let message = document.getElementById('inputMessage')
                message.classList.remove("focus")
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ncwygce', 'template_1jfne2s', e.target, 'user_A05t8Wf2ruaeZSgcARPUA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            openModal()
            setName("")
            setEmail("")
            setMessage("")
    }

    const outsideClick = (e) => {
        let submitForm = document.getElementById('submitForm')
        if (e.target === submitForm) {
            submitForm.style.display = 'none'
        }
    }

    const openModal = () => {
        let submitForm = document.getElementById('submitForm')
        submitForm.style.display = 'block'
    }

    const closeModal = () => {
        let submitForm = document.getElementById('submitForm')
        submitForm.style.display = 'none'
    }

    return (
        <>
            <section className="contact-wrapper">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-intro">
                            <h2>Let's Get In Touch</h2>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-text">
                                <h3>Address</h3>
                                <p>Bloomfield, NJ</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">
                                <CgPhone />
                            </div>
                            <div className="contact-text">
                                <h3>Phone</h3>
                                <p>310-962-8246</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">
                                <MdEmail />
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>aprilj.limas@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">
                                <a href={resume} target="_blank" className="link link-icon"><FiDownload /></a>
                            </div>
                            <div className="contact-text">
                                <h3>Resume</h3>
                                <p>Download <a href={resume} target="_blank" className="link link-here">here</a> or click the icon</p>
                            </div>
                        </div>
                        <div className="contact-box social-media">
                            <p>Connect with me:</p>
                            <ul className="social-icons">
                                <li><a href="https://www.facebook.com/aprilj.limas/" target="_blank"><FaFacebookF /></a></li>
                                <li><a href="https://www.instagram.com/posh_chic04/" target="_blank"><FaInstagramSquare /></a></li>
                                <li><a href="https://twitter.com/aprilj_limas" target="_blank"><FaTwitter /></a></li>
                                <li><a href="https://www.linkedin.com/in/aprillimas/" target="_blank"><FaLinkedinIn /></a></li>
                                <li><a href="https://github.com/april-limas" target="_blank"><FaGithub className="github-b"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="contact-form" className="contact-form-box">
                        <div className="square" style={{'--i':1}}></div>
                        <div className="square" style={{'--i':1}}></div>
                        <div className="square" style={{'--i':2}}></div>
                        <div className="square" style={{'--i':3}}></div>
                        <div className="square" style={{'--i':4}}></div>
                        <div className="contact-form-container">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <h2>Send Message</h2>
                                    <div id="inputName" className="inputBox">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={name}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                        <label for="">Full Name</label>
                                    </div>
                                    <div id="inputEmail" className="inputBox">
                                        <input
                                            type="text"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                        <label for="">Email</label>
                                    </div>
                                    <div id="inputMessage" className="inputBox textarea">
                                        <textarea
                                            required
                                            value={message}
                                            name="message"
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        ></textarea>
                                        <label for="">Type you message . . .</label>
                                    </div>
                                    <div className="inputBox">
                                        <input type="submit" name="" value="Send"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <SubmitFormModal closeModal={closeModal} />
        </>
    )
}