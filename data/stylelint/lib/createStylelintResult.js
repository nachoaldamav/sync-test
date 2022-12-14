'use strict';

const createPartialStylelintResult = require('./createPartialStylelintResult');
const getConfigForFile = require('./getConfigForFile');

/** @typedef {import('stylelint').PostcssResult} PostcssResult */
/** @typedef {import('stylelint').LintResult} StylelintResult */

/**
 * @param {import('stylelint').InternalApi} stylelint
 * @param {PostcssResult} [postcssResult]
 * @param {string} [filePath]
 * @param {import('stylelint').CssSyntaxError} [cssSyntaxError]
 * @return {Promise<StylelintResult>}
 */
module.exports = async function createStylelintResult(
	stylelint,
	postcssResult,
	filePath,
	cssSyntaxError,
) {
	let stylelintResult = createPartialStylelintResult(postcssResult, cssSyntaxError);

	const configForFile = await getConfigForFile(stylelint, filePath, filePath);

	const config = configForFile === null ? {} : configForFile.config;
	const file = stylelintResult.source || (cssSyntaxError && cssSyntaxError.file);

	if (config.resultProcessors) {
		for (const resultProcessor of config.resultProcessors) {
			// Result processors might just mutate the result object,
			// or might return a new one
			const returned = resultProcessor(stylelintResult, file);

			if (returned) {
				stylelintResult = returned;
			}
		}
	}

	return stylelintResult;
};
