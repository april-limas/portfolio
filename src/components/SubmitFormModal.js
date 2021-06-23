import '../styles/projects-modal.css'

export const SubmitFormModal = ({closeModal}) => {

    return (
        <div id="submitForm" className="modal-container">
            <div className="submit-content">
                <div className="modal-header submit-header">
                    <span onClick={closeModal} id="submitFormSpan" className="closeBtn">&times;</span>
                </div>
                <div className="submit-container">
                    <h1 className="form-response">Thank you for getting in touch!</h1>
                    <h3 className="form-response form-reponse__body">
                        Your message has been succesfully sent and I will get back to you shortly.
                    </h3>
                    <h3 className="form-response form-reponse__body">
                        Have a great day!
                    </h3>
                </div>
            </div>
        </div>
    )
}