import '../styles/projects-modal.css'

export const ChirpDetailModal = ({closeModal}) => {

    return (
        <div id="chirpDetail" className="modal-container">
            <div className="modal-content-smaller">
                <div className="modal-header">
                    <span onClick={closeModal} id="chirpDetailSpan" className="closeBtn">&times;</span>
                    <h1>Chirp</h1>
                </div>
                <div className="detail-wrapper">
                    <p>A social media application created for a capstone project which was inspired by the Twitter app. A user can create an account and post to the Chirp community as well as interact with other app users by liking or unliking their posts. A third-party back-end API was used to retrieve, post and delete user information.</p>
            
                    <div className="detail-container">
                        <div className="detail-technologies">
                            <h2>Technologies Used</h2>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Third-Party API</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}