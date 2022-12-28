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
router.get('/', function(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages:messages });
});
/* GET form page */
router.get("/new",function(req,res){
  res.render('form', { title: 'Fill Out The Form' });
});

router.post("/new",function(req,res,next){  
  const nameText = req.body.userText;
  const messageText = req.body.messageText;
  messages.push({
    text: messageText,
    user: nameText,
    added: new Date() 
  });
  res.redirect("/")
});

module.exports = router;