module.exports = function sum(list) {
  let result = 0

  for (let a = 0; a < list.length; a++) {
    result = result + list[a]
  }
  return result
}