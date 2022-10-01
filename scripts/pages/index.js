// Get the data from the json file and return it
async function getPhotographers() {
	try {
		const response = await fetch('./data/photographers.json')
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		const errorElement = document.createElement('h2')
		errorElement.classList.add('photographers_error')
		errorElement.textContent = 'Erreur lors de la récupération des données des photographes.'
		main.appendChild(errorElement)
		return { photographers: [] }
	}
}

// Display photographers with the factory
async function displayData(photographers) {
	const photographersSection = document.querySelector('.photographer_section')

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer)
		const userCardDOM = photographerModel.getUserCardDOM()
		photographersSection.appendChild(userCardDOM)
	})
}

async function init() {
	const { photographers } = await getPhotographers()
	displayData(photographers)
}

init()
