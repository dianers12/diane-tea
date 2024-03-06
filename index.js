const count = require('text-count');

function diane() {
  const text = "D I A N E"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Diane
