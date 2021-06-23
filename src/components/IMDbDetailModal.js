import '../styles/projects-modal.css'

export const IMDbDetailModal = ({closeModal}) => {

    return (
        <div id="imdbDetail" className="modal-container">
            <div className="modal-content-smaller">
                <div className="modal-header">
                    <span onClick={closeModal} id="imdbDetailSpan" className="closeBtn">&times;</span>
                    <h1>Reel Reviews</h1>
                </div>
                <div className="detail-wrapper">
                    <p>A social media application for movie lovers inspired by the IMDB app. A user can browse the website without creating an account and see basic movie details. By creating an account, a user can customize personal movie watchlists, read movie reviews by website users as well as post their own movie reviews.</p>
                    
                    <div className="detail-container">
                        <div className="detail-technologies">
                            <h2>Technologies Used</h2>
                            <ul>
                                <li>Django</li>
                                <li>Materialize CSS</li>
                                <li>The Movie Database API (TMDb)</li>
                                <li>The Open Movie Database (OMDb)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}