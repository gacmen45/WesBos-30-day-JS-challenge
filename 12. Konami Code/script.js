const pressed = []
const secretCode = 'pimp'

window.addEventListener('keyup', e => {
	//console.log(e.key)
	pressed.push(e.key)
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
	if (pressed.join('').includes(secretCode)) {
		console.log(`Super tajne hasło`)
	}
	//console.log(pressed);
})
