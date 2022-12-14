'use strict';

/**
 * Check whether a word is a variable i.e var(--custom-property).
 *
 * @param {string} word
 * @returns {boolean}
 */
module.exports = function isVariable(word) {
	return word.toLowerCase().startsWith('var(');
};
