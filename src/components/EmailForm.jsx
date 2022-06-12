import { useState } from 'react'
import { send } from 'emailjs-com'


const EmailForm = () => {

	const [toSend, setToSend] = useState({
		name: '',
		subject: '',
		email: '',
		text: '',
	})


	const onSubmit = (e) => {
		e.preventDefault()
		send(
			'SERVICE ID',
			'TEMPLATE ID',
			toSend,
			'User ID',
		)
		.then((response) => {
			console.log('SUCCESS!', response.status, response.text)
		})
		.catch((error) => {
			console.log('FAILED...', error)
		})
	}

	const handleChange = (e) => {
		e.preventDefault()
		setToSend({...toSend, [e.target.name]: e.target.value})
	}	

  return (
	<div className="email-container">
			<a href=""></a>
			<h4>Get In Touch</h4>
			<form className="form-control" onSubmit={onSubmit}>
				<a name="contact"></a>
				<label>Name</label>
				<input 
				type="text" 
				name="name"
				placeholder="Name here..."
				value={toSend.name}
				onChange={handleChange}
				></input>

				<label>Subject</label>
				<input 
				type="text" 
				name="subject"
				placeholder="Subject here..."
				value={toSend.subject}
				onChange={handleChange}
				></input>

				<label>Email</label>
				<input 
				type="text" 
				name="email"
				placeholder="Email Here..."
				value={toSend.email}
				onChange={handleChange}
				></input>

				<label>Message</label>
				<textarea
				type="text" 
				name="text"
				placeholder="Message here..."
				value={toSend.text}
				onChange={handleChange}
				></textarea>
			</form>
			<button type="submit">Send</button>
		</div>
  )
}
export default EmailForm