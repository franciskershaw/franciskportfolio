

export const fetchProjects = async () => {
	try {
		const response = await fetch(`http://localhost:5000/api/projects`)
		console.log(response);
	} catch (err) {
		console.log(err)
	}
}