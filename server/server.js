const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let randomNumber = 0;
// here is where we generate the first random number
numberGenerator();
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
  numberComparison(numbersGuessed);
  res.sendStatus(200);
})

//next work on random number function

function numberGenerator (){
  randomNumber = Math.floor(Math.random()* (25-1)+1).toString();
  return randomNumber;
  
}
//create comparison function
let results = [];

function numberComparison(){
  let guessArray = Object.values(numbersGuessed);
  console.log(guessArray);
  results = []
  for (let guess of guessArray){
    if (guess === randomNumber){
      results.push('win');
    }
    else if (guess > randomNumber){
      results.push('high');
    }
    else if (guess < randomNumber){
      results.push('low');
    }
  }
  console.log(results);
}

console.log(randomNumber);
// numberComparison();