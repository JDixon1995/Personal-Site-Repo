import GithubIcon from '../images/github.jpeg'
import LinkedInIcon from '../images/linkedin.jpeg'

const Header = () => {
  return (
	<div className="header-section">
		<h1>John Dixon</h1>
		<p>Fullstack Web Developer</p>
		<div className="contact-icon-div">
			<a href='https://github.com/JDixon1995'><img 
			src={GithubIcon} 
			alt={'Github'}></img></a>
			<a href='https://www.linkedin.com/in/john-dixon-452266203/'>
				<img src={LinkedInIcon} alt={'LinkedIn'}></img></a>
		</div>
	</div>
  )
}
export default Header