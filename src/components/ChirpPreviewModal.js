import { useState } from 'react'
import '../styles/projects-modal.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import chirp1 from '../images/chirp1.png'
import chirp2 from '../images/chirp2.png'
import chirp3 from '../images/chirp3.png'
import chirp4 from '../images/chirp4.png'
import chirp5 from '../images/chirp5.png'
import chirp6 from '../images/chirp6.png'
import chirp7 from '../images/chirp7.png'
import chirp8 from '../images/chirp8.png'

export const ChirpPreviewModal = ({closeModal}) => {

    const [ current, setCurrent ] = useState(0)
    
    const images = [
        chirp1,
        chirp2,
        chirp3,
        chirp4,
        chirp5,
        chirp6,
        chirp7,
        chirp8,
    ] 

    const length = images.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const radioClick = (activeIndex) => {
        setCurrent(activeIndex)
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }


    return (
        <div id="chirpPreview" className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={closeModal} id="chirpPreviewSpan" className="closeBtn">&times;</span>
                    <h2>Chirp Screenshots</h2>
                </div>
                <div className="carousel-container">
                    
                    <IoIosArrowBack className="carousel__button carousel__button--left" onClick={prevSlide} />
                    
                    {images.map((image, index) => (
                        <div className={index === current ? ' slides active' : 'inactive' } key={index}>
                            {index === current && (
                                <img src={image} alt="" className="carousel__image" />
                            )}
                        </div>
                    ))}    
                    
                    <IoIosArrowForward className="carousel__button carousel__button--right" onClick={nextSlide} />
            
                    <div className="carousel__nav">
                        {images.map((image, index) => (
                            <span
                                className={index === current ? 'dot active-dot' : 'dot'}
                                key={index}
                                onClick={e => radioClick(e.target.value = index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}