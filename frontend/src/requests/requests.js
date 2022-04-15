

export const fetchProjects = () => {
	try {
		fetch('/api/projects').then(
			response => response.json()
		).then(
			data => {
				console.log(data)
				return(data)
			}
		)
	} catch (err) {
		console.log(err)
	}
}