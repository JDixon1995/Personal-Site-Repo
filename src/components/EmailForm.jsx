
const EmailForm = () => {
  return (
	<div class="email-container">
			<a href=""></a>
			<h4>Get In Touch</h4>
			<form className="form-control">
				<a name="contact"></a>
				<label>Name</label>
				<input class="input-field" type="text" name="name"></input>

				<label>Subject</label>
				<input class="input-field" type="text" name="subject"></input>

				<label>Email</label>
				<input class="input-field" type="text" name="email"></input>

				<label>Message</label>
				<textarea class="input-field" name="message"></textarea>
			</form>
			<button>Send</button>
		</div>
  )
}
export default EmailForm