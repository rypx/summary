'use strict'

const summary = require('./libs/summary')

/**
 * Summarize your Content or Long String.
 * @param {string} title - Content Title
 * @param {string} content - Your very-very long content.
 */
module.exports = (title, content) => {
    try {
        const dict = summary.sentenceRank(content)
        const Summary = summary.getSummary(title, content, dict)

        return Summary
    } catch (err) {
        return console.error(err)
    }
}