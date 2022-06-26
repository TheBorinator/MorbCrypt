/**
 * @param {string} string The string that you want to secure to the morbillionth degree.
 * @returns {string} A reordered string.
 */
 function reorder(string) {
	let forwardsCharacterArray = [];
	for (let index = 0; index < string.length; index++) {
		forwardsCharacterArray.push(string.charAt(index));
	}
	const backwardsCharacterArray = forwardsCharacterArray.reverse();
	const result = backwardsCharacterArray.toString().replace(new RegExp(',', 'g'), '');
	return result;
}

module.exports = reorder;