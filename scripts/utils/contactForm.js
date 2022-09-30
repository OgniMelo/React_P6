function displayModal() {
	const modal = document.getElementById('contact_modal')
	modal.style.display = 'inherit'
}

function closeModal() {
	const modal = document.getElementById('contact_modal')
	modal.style.display = 'none'
}

function sendMessage(event) {
	event.preventDefault()
	for (const element of event.target.elements) {
		if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
			console.log(element.value)
			element.value = ''
		}
	}
	closeModal()
}
