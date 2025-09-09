import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const form = e.target;
        const formData = new FormData(form);
        formData.append('access_key', '30be1a22-e735-4a43-8df4-b41933360678');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setStatusMessage('✅ Message sent successfully!');
                form.reset();

                // Hide message after 3 seconds
                setTimeout(() => {
                    setStatusMessage('');
                }, 3000);
            } else {
                setStatusMessage('❌ Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending form:', error);
            setStatusMessage('❌ Something went wrong. Try again later.');
        }

        setIsSending(false);
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
                    <input type="hidden" name="access_key" value="30be1a22-e735-4a43-8df4-b41933360678" />
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

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
