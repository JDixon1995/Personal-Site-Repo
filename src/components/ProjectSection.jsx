import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
	<div className="project-section">
		<h6>My Personal Projects</h6>
		<div className="project-card-section">
		<ProjectCard projectTitle={'Budget Tracker App'} />
		<ProjectCard projectTitle={'PokeDex App'}/>
		<ProjectCard projectTitle={'JS Calculator'} />
		<ProjectCard projectTitle={'React Task Tracker App'} />
		</div>
	</div>
	
  )
}
export default ProjectSection