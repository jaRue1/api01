
  const candidates = [
    {
      name: "Vitoria Roas",
      favColor: "blue",
      hobby: " painting ",
    },
    {
      name: "Jonah Allen",
      favColor: "blue",
      hobby: "Sleeping ",
    },
    {
      name: "Kevin Choi",
      favColor: "blue",
      hobby: "reading ",
    },
    {
      name: "Jarue Johnson",
      favColor: "blue",
      hobby: " Making Beats",
    },
    {
      name: "Nikki Allen",
      favColor: "purple",
      hobby: "planting",
    },
    {
      name: "Adrian Pedromo",
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
      const {favColor} = request.params
      const myCandidates = candidates.filter(candidate => candidate.favColor === favColor)
      response.status(200).json({
        status: 200,
        data: myCandidates,
        message : " Show's the color "
      })
    }