import React, { Fragment, useState } from "react";
import Header from "../components/header";
import Profile from "../components/profile";
import Footer from "../components/footer";

const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});

    const validEmail = (email) => {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return emailRegex.test(email);
    }


    const handleChange = (e) => {
        let field = e.target.name;
        let value = e.target.value;

        if(field == 'email') {
            setEmail(value.toLowerCase());
        }

        if(field == 'message') {
            setMessage(value);
        }

        if(error[field]?.length && value?.length) {
            setError({
                ...error,
                [field]: ''
            })
        }
    }

    const onSubmit = values => {
        setLoading(true);

        let scriptURL = 'https://script.google.com/macros/s/AKfycbyba6KIVFroZEBa7CnNsTkMqPADaehhrHHAC23IGGJmofSNVBV1D-mixIAT4-7VOSzkMQ/exec'
        let formData = new FormData();
        formData.append('email_id', values.email);
        formData.append('message', values.message);
        formData.append('created_on', values.created_at);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then((response) => {
                setEmail('');
                setMessage('');
                setError({}); 
                setLoading(false);
                setSuccess(true);
            })
            .catch((error) => {
                setLoading(false);
                alert("Something went wrong!!!");
            });
    }

    const submitForm = (e) => {
        e.preventDefault();
        let hasErrors = Object.keys(error).filter(ma => error[ma]).length;
        if(email && validEmail(email) && message && !hasErrors) {
            let created_at = new Date();
            onSubmit({
                email,
                message,
                created_at 
            });

        } else if(!email || !validEmail(email)) {
            setError({
                ...error,
                email: 'Please enter valid email address'
            });
        } else if (!message) {
            setError({
                ...error,
                message: 'Message cannot be empty'
            });
        } else {
            setError({
                email: 'Email cannot be empty',
                message: 'Message cannot be empty'
            });
        }
    }

    return (
        <Fragment>
            <Header />
            <div className="innerwrap">
                <Profile />
                <div className="exp-section">
                    <div className="subtitle">
                    </div>
                    <div className="content">
                        {!success ? <form id="contactform" onSubmit={submitForm}>
                            <div className="contactform-header">
                                <h2>Let's Connect</h2>
                                <p>Feel free to drop a message or connect with me on social platforms !!!</p>
                                <br/><br/>
                            </div>
                            <div className="contactform">
                                <div className="row">
                                    <div className="field">
                                        <label> Email Id : </label>
                                        <input type="text" name="email" data-testid="email-field"  placeholder="Enter your email id" onChange={handleChange} disabled={loading} />
                                        {error && error['email'] ? <span className="error">{error['email']}</span> : null}
                                    </div>
                                    <div className="field">
                                        <label> Message Here : </label>
                                        <textarea name="message" data-testid="message-field" placeholder="Message..." onChange={handleChange} disabled={loading}></textarea>
                                        {error && error['message'] ? <span className="error">{error['message']}</span> : null}
                                    </div>
                                    <div className="field">
                                        <button type="submit" disabled={loading}> {loading ? "Submitting..." : "Submit Now"} </button>
                                    </div>
                                </div>
                            </div>
                        </form> : <div className="thankyou">
                            <span className="icon">🎉</span>
                            <h2>Awesome...!</h2>
                            <p> Thank you very much for your enquiry. <br/> I will come back to you with a response in a couple of days. </p>
                        </div>}
                        
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Contact;
