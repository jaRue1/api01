const candidates = require("./data.json")

const item = candidates.find((candidate) => candidate.classId === 14)
console.log(item)

const indexOfItem = candidates.indexOf(item)
console.log(indexOfItem)
