import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const ProjectCard = ( {projectTitle} ) => {
  return (
	<Card className="project-card">
  		<Card.Img variant="top" src="holder.js/100px180" />
  		<Card.Body>
    		<Card.Title>{projectTitle}</Card.Title>
    		<Card.Text>
      		Some quick example text to build on the card title and make up the bulk of
      		the card's content.
    		</Card.Text>
    	<Button variant="primary">View Project</Button>
  		</Card.Body>
	</Card>
  )
}
export default ProjectCard