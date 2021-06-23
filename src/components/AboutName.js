import { useState, useEffect, useRef } from 'react'
import '../styles/about-name.css'

export const AboutName = () => {

    const [ divClass , setDivClass ] = useState('about-text')
    const typeRef = useRef()

    useEffect (() => {
        window.addEventListener('scroll', animateText);

        return () => window.removeEventListener('scroll', animateText);
    }, [])

    const animateText = () => {
        // checking whether fully visible or partial visibility
        if (typeRef.current) {
            const position = typeRef.current.getBoundingClientRect(); 
            if (position.top < window.innerHeight && position.bottom >= 0) {
                setDivClass('about-text about-animate')
            }
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                setDivClass('about-text about-animate')
            }
        }
    }

    return (
        <div ref={typeRef} id="about-name" className={divClass}>
            <h2>Hello, my name is April Limas</h2>
        </div>
    )
}