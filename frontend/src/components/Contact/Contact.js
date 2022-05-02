import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [thankYou, setThankYou] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
		
		setUserName('')
		setEmail('')
		setMessage('')
    setThankYou(true);
  };

  return (
    <div id="contact" className="page contact">
      <h2 className="page__heading">Get in touch!</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="user_name">Name</label>
        <input
          value={userName}
          type="text"
          id="user_name"
          name="user_name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="user_email">Email address</label>
        <input
          value={email}
          type="email"
          id="user_email"
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">What's on your mind?</label>
        <textarea
          value={message}
          name="message"
          id="message"
          cols="30"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Send Message</button>
        {thankYou && (
          <span>Thanks for your message, I'll get back to you ASAP :)</span>
        )}
      </form>
    </div>
  );
};

export default Contact;
