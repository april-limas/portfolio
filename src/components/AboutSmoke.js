import { useEffect } from 'react'
import '../styles/about-smoke.css'

export const AboutSmoke = () => {

    useEffect (() => {
        const text = document.querySelector('.about-body__para')
        text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")

        const letters = document.querySelectorAll('span')
        for (let i=0; i<letters.length; i++) {
            letters[i].addEventListener("mouseover", () => {
                letters[i].classList.add('active')
            })
        }

        return () => {
            for (let i=0; i<letters.length; i++) {
                letters[i].removeEventListener("mouseover", () => {
                    letters[i].classList.add('active')
                })
            }
        }
    }, [])

    return (
        <section className="about-body">
            <p className="about-body__para">
                I am a multi-skilled junior full-stack software engineer who loves designing and building things from scratch and bringing ideas to life. I excelled in a twelve-month intensive program and graduated with a certification in Full-Stack Web Development. Being naturally curious, I have an insatiable appetite for learning and is continually working on improving my skills one web development project at a time. I have a serious passion in the entire front-end spectrum especially UI animations and creating intuitive and dynamic web designs but I'm also interested in backend processes as I believe both are integral for making the most optimal user experiences. 
            </p>
        </section>
    )
}