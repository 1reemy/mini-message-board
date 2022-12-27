var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },  
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }  
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages });
  next()
});
/* GET form page */
router.get("/new",function(req,res,next){
  res.render("form")
  next()
});

router.post("/new",function(res,req,next){
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date() 
  })
  res.redirect("/")
  next()
});

module.exports = router;
