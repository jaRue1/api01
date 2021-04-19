const { request } = require("express")
const express = require("express")
const { getCandidates, getSingleCandidate ,getSingleCandidates, getFavoriteColor, getAlphabeticalOrder, getCandidatesHobbies} = require('./src/candidates')
const port = 3000
const app = express()

app.get("/candidates/hobbies/", getCandidatesHobbies)
app.get("/candidates/ordered/", getAlphabeticalOrder)
app.get("/candidate/color/:myColor", getFavoriteColor)
app.get("/candidate/id/:candidateId", getSingleCandidates)
app.get("/candidate", getSingleCandidate)
app.get("/candidates", getCandidates)
// app.get('/', (request,response) => getCandidates((request,response)))
app.listen(port, console.log("listening on http://localhost:", port))
