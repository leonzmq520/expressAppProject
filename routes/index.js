var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Home Page'});
});

/* GET/POST login page. */
router.get('/login', function(req, res) {
  if(req.session.isVisit !== 0){
    console.log('you have been ' + req.session.isVisit + ' time to come to this page');
    req.session.isVisit++;
    res.render('index',{ title: 'Profile Page'});
  }else{
    req.session.isVisit = 1;
    console.log('you have been ' + req.session.isVisit + ' time to come to this page');
    res.render('login', { title: 'Login' });
  }
});

router.post('/login',function(req, res){
  //out print
  console.log('username :'+req.body.username);
  console.log('psw :'+req.body.password);

  if(req.body.username && req.body.password){
    req.session.isVisit++;
    res.render('index',{ title: 'Profile Page'});
  }
});

/* GET logout page. */
router.get('/logout', function(req, res) {
  req.session.isVisit = 0;
  res.render('index', { title: 'come back the Home Page!' });
});

module.exports = router;
