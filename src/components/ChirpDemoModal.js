import '../styles/projects-modal.css'
export const ChirpDemoModal = ({closeModal}) => {

    return (
        <div id="chirpDemo" className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={closeModal} id="chirpDemoSpan" className="closeBtn">&times;</span>
                    <h2>Chirp Demo</h2>
                </div>
                <div className="media-container">
                    <iframe src="https://www.youtube.com/embed/al2u8U2wT3M?modestbranding=1&rel=0&showinfo=0&loop=1&autoplay=1&mute=1" className="demo-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}