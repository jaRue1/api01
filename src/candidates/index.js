
  const candidates = [
    {
      name: "Vitoria Roas",
      classId : 0001,
      favColor: "blue",
      hobby: " painting ",
    },
    {
      name: "Jonah Allen",
      classId : 0002,
      favColor: "blue",
      hobby: "Sleeping ",
    },
    {
      name: "Kevin Choi",
      classId : 0003,
      favColor: "blue",
      hobby: "reading ",
    },
    {
      name: "Jarue Johnson",
      classId : 0004,
      favColor: "blue",
      hobby: " Making Beats",
    },
    {
      name: "Nikki Allen",
      classId : 0005,
      favColor: "purple",
      hobby: "planting",
    },
    {
      name: "Adrian Pedromo",
      classId : 0006,
      favColor: "blue",
      hobby: "Cooking",
    }]
    exports.getCandidates = (request, response) => {
      response.status(200).json({
        status: 200,
        data: candidates,
        message : " Gets all the candidates "
      })
    }
    exports.getSingleCandidate = (request, response) => {
      response.status(200).json({
        status: 200,
        data: candidates[0],
        message : "Gets the first candidate from the array "
      })
    }
    exports.getSingleCandidates = (request, response) => {
      const {candidateId} = request.params
      if (candidateId < 0 || candidateId >= candidates.length) {
        response.status(403).send({
          status: 403,
          message: 'Invalid Candidate ID',
          data: null
        })
      }
      console.log ({params : request.params})
      response.status(200).json({
        status: 200,
        data: candidates[candidateId],
        message : "Uses the index of the array to get candidates"
      })
    }
    exports.getFavoriteColor = (request, response) => {
      console.log ({params : request.params})
      const {myColor} = request.params
      const myCandidates = candidates.filter(candidate => candidate.favColor === myColor)
      response.status(200).json({
        status: 200,
        data: myCandidates,
        message : " Show's the color "
      })
    }
    exports.getAlphabeticalOrder = (request, response) => {
      console.log ({params : request.params})
      const sortedCandidates = candidates.sort((x,y) => {
        let first = x.name.toLowerCase()
        let last = y.name.toLowerCase()
        if (first < last) {
          return -1
        }
        if (first > last) {
          return 1
        }
        return 0
      })
      response.status(200).json({
        status: 200,
        data: sortedCandidates,
        message : " Sorts the candidates "
      })
    }
    exports.getCandidatesHobbies = (request, response) => {
      const candidateHobbies = []
      for (let i = 0; i < candidates.length; i++) {
        const element = candidates[i].hobby;
        candidateHobbies.push(element)
      }
      response.status(200).json({
        status: 200,
        data: candidateHobbies,
        message : "Gets the candidates hobbies"
      })
    }