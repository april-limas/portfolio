import { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import '../styles/projects-modal.css'
import imdb1 from '../images/imdb1.png'
import imdb2 from '../images/imdb2.png'
import imdb3 from '../images/imdb3.png'
import imdb4 from '../images/imdb4.png'
import imdb5 from '../images/imdb5.png'
import imdb6 from '../images/imdb6.png'
import imdb7 from '../images/imdb7.png'
import imdb8 from '../images/imdb8.png'
import imdb9 from '../images/imdb9.png'

export const IMDbPreviewModal = ({closeModal}) => {

    const [ current, setCurrent ] = useState(0)

    const images = [
        imdb1,
        imdb2,
        imdb3,
        imdb4,
        imdb5,
        imdb6,
        imdb7,
        imdb8,
        imdb9
    ] 

    const length = images.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }

    return (
        <div id="imdbPreview" className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={closeModal} id="imdbPreviewSpan" className="closeBtn">&times;</span>
                    <h2>Reel Reviews Screenshots</h2>
                </div>
                <div className="carousel-container">
                    
                    <IoIosArrowBack className="carousel__button carousel__button--left" onClick={prevSlide} />
                    
                    {images.map((image, index) => (
                        <div className={index === current ? 'slides active' : 'inactive'} key={index}>
                            {index === current && (
                                <img src={image} alt="" className="carousel__image" />
                            )}
                        </div>
                    ))}
                    
                    <IoIosArrowForward className="carousel__button carousel__button--right" onClick={nextSlide} />
            
                    <div className="carousel__nav">
                        {images.map((image, index) => (
                            <span name={index} className={index === current ? 'dot active-dot' : 'dot'} key={index}></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}