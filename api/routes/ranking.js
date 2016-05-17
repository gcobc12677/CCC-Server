const express = require("express");
const router = express.Router();
const db = require('../db.js').models;
const debug = require('debug')('CCCServer');

router.get("/ranking", (req, res) => {
  debug('GET /ranking');

  db.Ranking.findAll({
    attributes: [
      'id',
      'name',
      'point'
    ],
    order: [
      ['point', 'DESC']
    ],
    limit: 10}).then((rankings) => {
    debug(`rankings=${rankings}`);
    res.status(200).json(rankings).end;
  });
});

router.post("/ranking", (req, res) => {
  debug('POST /ranking');

  const jobj = req.body;
  debug(`jobj=${jobj}`);

  db.Ranking.create({
    name: jobj.name,
    point: jobj.point
  }).then((ranking) => {
    res.status(204).end();
  });
});

module.exports = router;
