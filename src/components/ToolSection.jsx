import ReactIcon from '../images/react.jpeg'
import ExpressIcon from '../images/express.jpeg'
import NodeIcon from '../images/node.jpeg'
import MongoIcon from '../images/mongodb.jpeg'
import ReduxIcon from '../images/react-redux.jpeg'
import GitIcon from '../images/git.jpeg'
import BootstrapIcon from '../images/bootstrap.jpeg'

const ToolSection = () => {

  return (
	<div className='tool-section'>
		<div className="top-level-row">
		</div>
		<div className="tool-bar">
			<img src={ReactIcon}></img>
			<img src={ExpressIcon}></img>
			<img src={NodeIcon}></img>
			<img src={MongoIcon}></img>
			<img src={BootstrapIcon}></img>
			<img src={GitIcon}></img>
			<img src={ReduxIcon}></img>
		</div>
		<h5>Tools I Use</h5>
	</div>
  )
}
export default ToolSection