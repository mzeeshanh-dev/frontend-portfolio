import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const form = e.currentTarget;

        setTimeout(() => {
            setStatusMessage('✅ Message sent successfully!');
            form.reset();

            setTimeout(() => setStatusMessage(''), 3000);

            setIsSending(false);
        }, 1000);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-heading">
                <h2 className='heading'>Contact Me</h2>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Work Together</h3>
                    <p>Feel free to reach out. I’m always open to discussing new projects or opportunities.</p>

                    <div className="contact-details">
                        <div className="detail">
                            <FaEnvelope className="icon" />
                            <span>m.zeeshan.haider.dev@gmail.com</span>
                        </div>
                        <div className="detail">
                            <FaPhone className="icon" />
                            <span>+92 344 6864785</span>
                        </div>
                        <div className="detail">
                            <FaMapMarkerAlt className="icon" />
                            <span>Islamabad, Pakistan</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows={5} required></textarea>

                    <button type="submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>

                    {statusMessage && <p className="form-status">{statusMessage}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
