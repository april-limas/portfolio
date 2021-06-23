import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
import '../styles/navbar.css'

export const Navbar = () => {

    useEffect (() => {
        document.addEventListener('mousemove', mouseMove)

        return () => document.removeEventListener('mousemove', mouseMove);
    }, [])

    const mouseMove = (e) => {
        const cursor = document.querySelector('.cursor')
        cursor.style.left = e.pageX + 'px'
        cursor.style.top = e.pageY + 'px'
    }

    const navToggle = () => document.body.classList.toggle('nav-open')

    const removeToggle = () => document.body.classList.remove('nav-open')

    return (
        <>
            <div className="logo-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="logo-container2" >
                <Link to="/" className="logo">
                    <img src={logo2} alt="" />
                </Link>
            </div>
            
        
            <button className="nav-toggle" aria-label="toggle navigation" onClick={navToggle}>
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link
                            to="/"
                            data-text="Home"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                                home
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/about"
                            data-text="About"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                                about
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/projects"
                            data-text="Projects"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                            projects
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/contact"
                            data-text="Contact"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                            contact
                        </Link>
                    </li>
                    <div className="cursor"></div>
                </ul>
            </nav>  
            <div className="nav-two-container">
            <div className="nav-two">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link
                            to="/"
                            data-text="Home"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                                home
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/about"
                            data-text="About"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                                about
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/projects"
                            data-text="Projects"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                            projects
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/contact"
                            data-text="Contact"
                            className="nav__link"
                            onClick={removeToggle}
                        >
                            contact
                        </Link>
                    </li>
                    <div className="cursor"></div>
                </ul>
                </div>
            </div>  
        </>
    )
}