import ReactIcon from '../images/react.jpeg'
import ExpressIcon from '../images/express.jpeg'
import NodeIcon from '../images/node.jpeg'
import MongoIcon from '../images/mongodb.jpeg'
import ReduxIcon from '../images/react-redux.jpeg'
import GitIcon from '../images/git.jpeg'
import BootstrapIcon from '../images/bootstrap.jpeg'

const ToolSection = () => {

  return (
	<div className='tool-section info-block'>
		<div className="tool-bar">
			<img src={ReactIcon} alt={'React'}></img>
			<img src={ExpressIcon} alt={'Express'}></img>
			<img src={NodeIcon} alt={'Node'}></img>
			<img src={MongoIcon} alt={'Mongo'}></img>
			<img src={BootstrapIcon} alt={'Bootstrap'}></img>
			<img src={GitIcon} alt={'Git'}></img>
			<img src={ReduxIcon} alt={'Redux'}></img>
		</div>
		<h5>Tools I Use</h5>
	</div>
  )
}
export default ToolSection