var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    session: req.session.currentUser
 });
});

/* GET home page. */
router.get('/secret', function(req, res, next) {
  if (req.session.currentUser) {
    console.log(req.session.currentUser);
    res.render('secret', {
      title: 'Express',
      session:req.session.currentUser
    });
  }else{
    res.render('index', {
      title: 'Express',
      errorMessage: "ESTO ES SECRETO, no puedes pasar!"
     });
  }
});

module.exports = router;
