import { useEffect, useRef } from 'react'
import { AboutName } from './AboutName'
import { AboutTyping } from './AboutTyping'
import { AboutSmoke } from './AboutSmoke'
import girl from '../images/girl.png'
import '../styles/about-parallax.css'


export const AboutParallax = () => {

    const titleRef = useRef()
    const sunRef = useRef()

    useEffect (() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        // const sun = document.querySelector(".sun")
        // const title = document.querySelector(".parallax-title")

        let scrollValue = window.scrollY
        if (titleRef.current && sunRef.current) {
            titleRef.current.style.marginTop = scrollValue * 0.8 + 'px'
            sunRef.current.style.marginLeft = scrollValue * 1.2 + 'px'
            sunRef.current.style.marginTop = scrollValue * 1.2 + 'px'
        }
        

    }

    return (
        <div className="parallax">
            <section className="parallax-section">
                <img src={girl} alt="" className="girl" />
                <div ref={sunRef} className="sun"></div>

            <h1 ref={titleRef} className="parallax-title">About Me</h1>
            </section>
            <div className="parallax-body">
                <AboutName />
                <AboutTyping />
                <AboutSmoke />
            </div>
            
        </div>
    )
}