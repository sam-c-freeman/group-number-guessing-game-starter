$(document).ready(handleReady);

function handleReady() {
 $('#submitButton').on('click', submitNumbers)
}

function submitNumbers (){
  let guessesObject = {
    player1:$('#input1').val(),
    player2:$('#input2').val(),
    player3:$('#input3').val(),
  };
  $('#input1').val('');
  $('#input2').val('');
  $('#input3').val('');
  
  //will create post request below
 
  $.ajax({
    method: 'POST',
    url: '/numbers',
    data: {guessesObject}
  }).then(function (response){
    console.log(response);
  })
}


