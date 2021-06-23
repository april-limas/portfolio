import { useEffect } from 'react'
import moon from '../images/moon.png'
import mountain from '../images/mountains.png'
import cloud1 from '../images/cloud1.png'
import cloud2 from '../images/cloud2.png'
import cloud3 from '../images/cloud3.png'
import '../styles/intro-scene.css'


export const IntroScene = () => {

    useEffect (() => {
        stars()
    }, [])

    const stars = () => {
        let count = 500
        let scene = document.querySelector(".scene")
        if (typeof(scene) != 'undefined' && scene != null) {
            let i = 0
            while ( i < count ) {
                let star = document.createElement("i")
                let x = Math.floor(Math.random() * window.innerWidth)
                let y = Math.floor(Math.random() * window.innerHeight)
                let duration = Math.random() * 10
                let size = Math.random() * 2
    
                star.style.left = x + 'px'
                star.style.top = y + 'px'
                star.style.width = 1 + size + 'px'
                star.style.height = 1 + size + 'px'
    
                star.style.animationDuration = 5 + duration + 's'
                star.style.animationDelay = duration + 's'
    
                scene.appendChild(star)
                i++
            }
        }
    }

    return (
        <div className="scene">
                <img src={moon} alt='' className="moon"></img>
                <img src={mountain} alt='' className="mountain"></img>
                <img src={mountain} alt='' className=" mountain2"></img>
                <img src={cloud1} alt='' className="cloud1"></img>
                <img src={cloud2} alt='' className="cloud2"></img>
                <img src={cloud3} alt='' className="cloud3"></img>
                <img src={cloud1} alt='' className="cloud4"></img>
                <img src={cloud2} alt='' className="cloud5"></img>
                <img src={cloud3} alt='' className="cloud6"></img>
        </div>
    )
}