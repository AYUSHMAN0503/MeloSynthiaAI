function requestParamsGuard(req, res, requiredParameters) {
  if (requiredParameters.some((item) => req.body[item.name] === undefined)) {
    console.log("-> requestParamsGuard: missing required parameters");
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Missing required parameters',
      missing_paramerters: requiredParameters.filter((item) => req.body[item.name] === undefined)
    });
  } else {
    return {
      body: req.body,
    }
  }
}

module.exports = { requestParamsGuard }