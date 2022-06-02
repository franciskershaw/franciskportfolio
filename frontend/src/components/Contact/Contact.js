import { useRef, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [thankYou, setThankYou] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { windowDimensions } = useContext(AppContext);
  const winHeight = windowDimensions.winHeight;

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2cbbr3y',
        'template_zo0nvji',
        formRef.current,
        'G3J6XdzvcbtYXlZIO'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUserName('');
    setEmail('');
    setMessage('');
    setThankYou(true);
  };

  return (
    <div id="contact" className="page contact">
      <div className="page__heading--container">
        <h2 className="page__heading">Get in touch!</h2>
      </div>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <h3>
          I'm always keen to take on freelance work, so get in touch and let me
          know how I might be able to help.
        </h3>
        <div className="form__group">
          <input
            value={userName}
            type="text"
            id="user_name"
            name="user_name"
            onChange={(e) => setUserName(e.target.value)}
            className="form__input"
            placeholder="Name"
            required
          />
        </div>
        <div className="form__group">
          <input
            value={email}
            type="email"
            id="user_email"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            className="form__input"
            placeholder="Email address"
            required
          />
        </div>
        <div className="form__group">
          <textarea
            value={message}
            name="message"
            id="message"
            cols="30"
            rows={
              winHeight < 650
                ? '3'
                : '7'
            }
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="form__input"
            required></textarea>
        </div>
        <div className="form__group form__group--buttons">
          <button className="btn btn--small btn--primary" type="submit">
            Send Message
          </button>
        </div>
        {thankYou && (
          <span>Thanks for your message, I'll get back to you ASAP :)</span>
        )}
      </form>
    </div>
  );
};

export default Contact;
