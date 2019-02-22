var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'auth | Estro Chat' });
});

router.post('/rooms', function(req, res, next) {
  req.session.username = req.body.name
  res.render('rooms', { title: 'rooms | Estro Chat', name : req.session.username });
});

router.get('/session1', function(req, res, next) {
  res.render('session1', { title: 'session 1 | Estro Chat', name: req.session.username });
});

router.get('/session2', function(req, res, next) {
  res.render('session2', { title: 'session 2 | Estro Chat' });
});

module.exports = router;
