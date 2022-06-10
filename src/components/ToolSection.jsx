const ToolSection = () => {

	const toolArray = [
		{text: 'html'}, 
		{text: 'css'}, 
		{text: 'js'}, 
		{text: 'React'}, 
		{text: 'Express'}, 
		{text: 'Mongo'}, 
		{text: 'Node.js'}];

  return (
	<div className="tool-section">
		{toolArray.map(tool => (
			<p>{tool.text}</p>
		))}
	</div>
  )
}
export default ToolSection