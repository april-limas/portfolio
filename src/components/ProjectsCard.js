import { useEffect } from 'react'
import { IMDbPreviewModal } from './IMDbPreviewModal'
import { IMDbDemoModal } from './IMDbDemoModal'
import { IMDbDetailModal } from './IMDbDetailModal'
import { ChirpDetailModal } from './ChirpDetailModal'
import { ChirpDemoModal } from './ChirpDemoModal'
import { ChirpPreviewModal } from './ChirpPreviewModal'
import imdb from "../images/imdb.png"
import chirp from "../images/chirp.png"
import "../styles/projects-card.css"

export const ProjectsCard = () => {

    useEffect (() => {
        window.addEventListener("click", outsideClick)

        return () => window.removeEventListener('click', outsideClick);
    }, [])

    const outsideClick = (e) => {
        let imdbDemo = document.getElementById('imdbDemo')
        let imdbPreview = document.getElementById('imdbPreview')
        let imdbDetail = document.getElementById('imdbDetail')
        let chirpDemo = document.getElementById('chirpDemo')
        let chirpDetail = document.getElementById('chirpDetail')
        let chirpPreview = document.getElementById('chirpPreview')
        if (e.target === imdbDemo) {
            imdbDemo.style.display = 'none'
        } else if (e.target === imdbPreview) {
            imdbPreview.style.display = 'none'
        } else if (e.target === imdbDetail) {
            imdbDetail.style.display = 'none'
        } else if (e.target === chirpDemo) {
            chirpDemo.style.display = 'none'
        } else if (e.target === chirpPreview) {
            chirpPreview.style.display = 'none'
        } else if (e.target === chirpDetail) {
            chirpDetail.style.display = 'none'
        } else {
            return
        }
    }

    const toggleModal = (e) => {
        let imdbDemoBtn = document.getElementById('imdbDemoBtn')
        let imdbPreviewBtn = document.getElementById('imdbPreviewBtn')
        let imdbDetailBtn = document.getElementById('imdbDetailBtn')
        let chirpDemoBtn = document.getElementById('chirpDemoBtn')
        let chirpPreviewBtn = document.getElementById('chirpPreviewBtn')
        let chirpDetailBtn = document.getElementById('chirpDetailBtn')
        if (e.target === imdbDemoBtn) {
            let modal = document.getElementById('imdbDemo')
            modal.style.display = 'block'
        } else if (e.target === imdbPreviewBtn) {
            let modal = document.getElementById('imdbPreview')
            modal.style.display = 'block'
        } else if (e.target === imdbDetailBtn) {
            let modal = document.getElementById('imdbDetail')
            modal.style.display = 'block'
        } else if (e.target === chirpDemoBtn) {
            let modal = document.getElementById('chirpDemo')
            modal.style.display = 'block'
        } else if (e.target === chirpPreviewBtn) {
            let modal = document.getElementById('chirpPreview')
            modal.style.display = 'block'
        } else if (e.target === chirpDetailBtn) {
            let modal = document.getElementById('chirpDetail')
            modal.style.display = 'block'
        } else {
            return
        }
    };

    const closeModal = (e) => {
        let imdbDemoSpan = document.getElementById('imdbDemoSpan')
        let imdbPreviewSpan = document.getElementById('imdbPreviewSpan')
        let imdbDetailSpan = document.getElementById('imdbDetailSpan')
        let chirpDemoSpan = document.getElementById('chirpDemoSpan')
        let chirpPreviewSpan = document.getElementById('chirpPreviewSpan')
        let chirpDetailSpan = document.getElementById('chirpDetailSpan')
        if (e.target == imdbDemoSpan) {
            let modal = document.getElementById('imdbDemo')
            modal.style.display = 'none'
        } else if (e.target == imdbPreviewSpan) {
            let modal = document.getElementById('imdbPreview')
            modal.style.display = 'none'
        } else if (e.target == imdbDetailSpan) {
            let modal = document.getElementById('imdbDetail')
            modal.style.display = 'none'
        } else if (e.target == chirpDemoSpan) {
            let modal = document.getElementById('chirpDemo')
            modal.style.display = 'none'
        } else if (e.target == chirpPreviewSpan) {
            let modal = document.getElementById('chirpPreview')
            modal.style.display = 'none'
        } else if (e.target == chirpDetailSpan) {
            let modal = document.getElementById('chirpDetail')
            modal.style.display = 'none' 
        } else {
            return
        }
    }

    return (
        <>
            <div className="projects-card">
                <div className="projects-box">
                    <img src={imdb} alt="" className="projects-pic" />
                </div>
                <div className="projects-details">
                    <div className="projects-content">
                        <div>
                            <span
                                onClick={toggleModal}
                                id="imdbDemoBtn">Demo</span>
                        </div>
                        <div>
                            <span
                                onClick={toggleModal} 
                                id="imdbPreviewBtn">Preview</span>
                        </div>
                        <div>
                            <a href="#">Live Site</a>
                        </div>
                        <div>
                            <a href="https://github.com/april-limas/imdb-reimagined" target="_blank">Github</a>
                        </div>
                        <div>
                            <span
                                onClick={toggleModal}
                                id="imdbDetailBtn">Details</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects-card">
                <div className="projects-box">
                    <img src={chirp} alt="" className="projects-pic" />
                </div>
                <div className="projects-details">
                    <div className="projects-content">
                        <div>
                            <span
                                onClick={toggleModal}
                                id="chirpDemoBtn">Demo</span>
                        </div>
                        <div>
                            <span
                                onClick={toggleModal} 
                                id="chirpPreviewBtn">Preview</span>
                        </div>
                        <div>
                            <a href="#">Live Site</a>
                        </div>
                        <div>
                            <a href="https://github.com/april-limas/chirp" target="_blank">Github</a>
                        </div>
                        <div>
                            <span
                                onClick={toggleModal}
                                id="chirpDetailBtn">Details</span>
                        </div>
                    </div>
                </div>
            </div>

            <IMDbDemoModal closeModal={closeModal} />
            <IMDbPreviewModal closeModal={closeModal} />
            <IMDbDetailModal closeModal={closeModal} />
            <ChirpDetailModal closeModal={closeModal} />
            <ChirpPreviewModal closeModal={closeModal} />
            <ChirpDemoModal closeModal={closeModal} />
        </>
    )
}