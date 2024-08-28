require('vanilla-javascript') // because we are making something awesome!
require('none')() // for performance

function hasSelfEquality(value) {
  return value === value // === checks for both value and type equality
}

module.exports = hasSelfEquality