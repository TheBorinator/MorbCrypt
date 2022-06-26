/**
 * @param {string} string The string that you want to secure to the morbillionth degree.
 * @param {number} displacement The shift displacement. Use 1 to go forwards -1 to go back. 🚀
 * @returns {string} A shifted string.
 */
function shift(string, displacement) {
	let result = '';
	for (let index = 0; index < string.length; index++) {
		const shiftedCharacterCode = string.charCodeAt(index) + index * displacement; // This is where true Morbius security comes in.
		const shiftedCharacter = String.fromCharCode(shiftedCharacterCode);
		result += shiftedCharacter;
	}
	return result;
}

module.exports = shift;