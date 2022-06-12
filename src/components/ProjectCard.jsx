import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const ProjectCard = ( {projectTitle, projectUrl, previewImage, previewBlurb} ) => {
  return (
	<Card className="project-card">
  		<Card.Img 
		  variant="top" 
		  src={previewImage} 
		  style={{ width: '150px', height: '100px', border: '3px solid blue' }} />
  		<Card.Body>
    		<Card.Title>{projectTitle}</Card.Title>
    		<Card.Text>{previewBlurb}</Card.Text>
    	<Button className="btn" variant="primary" href={projectUrl} >View Project</Button>
  		</Card.Body>
	</Card>
  )
}
export default ProjectCard