'use strict';

const chartService = require('../services/chartService')

module.exports = {
  chart: chart
}

function chart (req, res) {

  res.setHeader('content-type', 'image/svg+xml')

  res.status(200).send(chartService.buildChart())

}