const shift = require('./shift');
const reorder = require('./reorder');

const coolCharacters = ['#~~~morb~~~#', '#~~~crypt~~~#'];

/**
 * @param {string} unencryptedString The unencrypted string.
 * @returns {string} An encrypted string.
 */
function encrypt(string) {
	const shiftedString = shift(string, 1);
	const reorderedString = reorder(shiftedString);
	const coolifiedString = coolCharacters[0] + reorderedString + coolCharacters[1];
	return coolifiedString;
}

/**
 * @param {string} encryptedString The encrypted string.
 * @returns {string} A decrypted string.
 */
function decrypt(string) {
	const decoolifiedString = string.replace(coolCharacters[0], '').replace(coolCharacters[1], '');
	const reorderedString = reorder(decoolifiedString);
	const unshiftedString = shift(reorderedString, -1);
	return unshiftedString;
}

/**
 * @param {string} unencryptedString The unencrypted string you want to validate.
 * @param {string} encryptedString The encrypted string you are comparing it with.
 * @returns {boolean} 
 */
 function verify(unencryptedString, encryptedString) {
	if (encrypt(unencryptedString) === encryptedString) return true;
	return false;
}

module.exports = { encrypt, decrypt, verify };