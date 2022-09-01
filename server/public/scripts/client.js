$(document).ready(handleReady);

function handleReady() {
 $('#submitButton').on('click', submitNumbers)
}

function submitNumbers (){
  let guessesArray = [];
  guessesArray.push($('#input1').val());
  guessesArray.push($('#input2').val());
  guessesArray.push($('#input3').val());
  
  //will create post request below
  //also need to clear inputs
  $.ajax({
    method: 'POST',
    url: '/numbers',
    data: guessesArray
  }) //paused here to work on server side
}

