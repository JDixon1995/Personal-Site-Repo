import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
	<div className="project-section">
		<h6>My Personal Projects</h6>
		<div className="project-card-section">
		<ProjectCard 
		projectTitle={'Budget Tracker App'}
		projectUrl={'https://jdixon1995.github.io/React-Budget-App/'}
		/>
		<ProjectCard 
		projectTitle={'PokeDex App'}
		projectUrl={'https://jdixon1995.github.io/PokeAPI-w-React/'}
		/>
		<ProjectCard 
		projectTitle={'JS Calculator'}
		projectUrl={'https://jdixon1995.github.io/My-Calculator-JS/'}
		/>
		</div>
	</div>
	
  )
}
export default ProjectSection