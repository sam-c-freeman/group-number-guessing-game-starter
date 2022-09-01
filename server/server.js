const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

let numbersGuessed;

app.post('/numbers', (req, res) => {
  // console.log('got a request')
  // console.log('req.body should be array?!?', req.body);
  numbersGuessed = req.body.guessesObject;
  console.log(numbersGuessed);
  console.log(typeof numbersGuessed);

  res.sendStatus(200);
})

//next work on random number function
//create comparison function