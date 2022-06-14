import GithubIcon from '../images/github.jpeg'
import LinkedInIcon from '../images/linkedin.jpeg'
import ProfilePicture from '../images/profilePic.jpeg'

const Header = () => {
  return (
	<div className="header-section info-block">
		<div className="bio-info">
			<img src={ProfilePicture} alt="Me" />
			<h1>John Dixon</h1>
			<h4>Fullstack Web Developer</h4>
		</div>
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