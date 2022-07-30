import ProjectCard from './ProjectCard'
import BudgetAppPreview from '../images/BudgetTrackerPreview.jpeg'
import MemoriesAppPreview from '../images/MemoriesAppPreview.png'
import PokeDexPreview from '../images/PokedexPreview.jpeg'
import CalculatorPreview from '../images/CalculatorPreview.jpeg'

const ProjectSection = () => {
  return (
	<div className="project-section info-block">
		<h6>My Personal Projects</h6>
		<div className="project-card-section">
		<ProjectCard 
		projectTitle={'Memories App'}
		projectUrl={'https://jdixon1995.github.io/Memories-App-Client/'}
		previewImage={MemoriesAppPreview}
		previewBlurb={'An app that serves user-created content. Using the MERN stack, this app has CRUD functionality.'}
		/>
		<ProjectCard 
		projectTitle={'Budget Tracker App'}
		projectUrl={'https://jdixon1995.github.io/React-Budget-App/'}
		previewImage={BudgetAppPreview}
		previewBlurb={'A sleek budget tracker app built w/ React, Hooks, and styled w/ Bootstrap.'}
		/>
		<ProjectCard 
		projectTitle={'PokeDex App'}
		projectUrl={'https://jdixon1995.github.io/PokeAPI-w-React/'}
		previewImage={PokeDexPreview}
		previewBlurb={'This displays my first app built to consume an external API. This app features searching, and pagination of results.'}
		/>
		<ProjectCard 
		projectTitle={'JS Calculator'}
		projectUrl={'https://jdixon1995.github.io/My-Calculator-JS/'}
		previewImage={CalculatorPreview}
		previewBlurb={'A simple app I built to get my toes wet with Javascript. It works just like one on your desk.'}
		/>
		</div>
	</div>
	
  )
}
export default ProjectSection