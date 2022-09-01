$(document).ready(handleReady);

function handleReady() {
 $('#submitButton').on('click', submitNumbers)
}

function submitNumbers (){
  let guessesObject = {
    player1:$('#input1').val(),
    player2:$('#input2').val(),
    player3:$('#input1').val(),
  };
  
  //will create post request below
  //also need to clear inputs
  $.ajax({
    method: 'POST',
    url: '/numbers',
    data: {guessesObject}
  }).then(function (response){
    console.log(response);
  })
}

