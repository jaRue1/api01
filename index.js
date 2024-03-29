const express = require("express")
const cors = require("cors")
const {
  getCandidates,
  getSingleCandidate,
  getFavoriteColor,
  getAlphabeticalOrder,
  getCandidatesHobbies,
  createCandidate,
  updateCandidate,
  deleteSingleCandidate,
} = require("./src/candidates")

const port = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/candidates", getCandidates)
app.get("/candidate/:classId", getSingleCandidate)
app.get("/candidates/hobbies/", getCandidatesHobbies)
app.get("/candidates/ordered/", getAlphabeticalOrder)
app.get("/candidate/color/:myColor", getFavoriteColor)

// posts
app.post("/candidate", createCandidate)

// patch routes updateCandidate
app.put("/candidate", updateCandidate)

// delete routes deleteCandidate
app.delete("/candidate/:classId", deleteSingleCandidate)

app.listen(port, console.log("listening on", port))
