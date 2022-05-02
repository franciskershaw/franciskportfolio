const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted!');
	}

	return (
		<div id='contact' className='page contact'>
			<h2 className='page__heading'>Get in touch!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="">Name</label>
				<input type="text" />
				<label htmlFor="">Email address</label>
				<input type="email" />
				<label htmlFor="">What's on your mind?</label>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<button type="submit">Send Message</button>
			</form>
		</div>
	)
}

export default Contact;