import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [message, setMessage] = useState(false)

	const formRef = useRef()
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		emailjs.sendForm('service_2cbbr3y', 'template_zo0nvji', formRef.current, 'G3J6XdzvcbtYXlZIO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

		setMessage(true);
	}

	return (
		<div id='contact' className='page contact'>
			<h2 className='page__heading'>Get in touch!</h2>
			<form ref={formRef} onSubmit={handleSubmit}>
				<label htmlFor="user_name">Name</label>
				<input type="text" id="user_name" name="user_name" />
				<label htmlFor="user_email">Email address</label>
				<input type="email" id="user_email" name="user_email" />
				<label htmlFor="message">What's on your mind?</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
				<button type="submit">Send Message</button>
				{message && <span>Thanks for your message, I'll get back to you ASAP :)</span>}
			</form>
		</div>
	)
}

export default Contact;