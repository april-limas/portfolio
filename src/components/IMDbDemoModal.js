import '../styles/projects-modal.css'

export const IMDbDemoModal = ({closeModal}) => {

    return (
        <div id="imdbDemo" className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={closeModal} id="imdbDemoSpan" className="closeBtn">&times;</span>
                    <h2>Reel Reviews Demo</h2>
                </div>
                <div className="media-container">
                    <iframe src="https://www.youtube.com/embed/Q8xSoqvRykU?modestbranding=1&rel=0&showinfo=0&loop=1&autoplay=1&mute=1" title="Reel Reviews Demo" className="demo-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}