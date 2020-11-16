var btnGenerator = document.getElementById("btn_generator");
var btnCancel = document.getElementById("btn_cancel");

btnGenerator.addEventListener("click", function () {
  //Genera ticket
  console.log("Genera il ticket");

  //Selezionare valore degli input
  var userName = document.getElementById("user_name").value;
  var km = document.getElementById("km").value;
  var rangeAge = document.getElementById("range_age").value;
  console.log(userName, km, rangeAge);

  //Calcolo prezzo del biglietto
  var priceTicket = km * 0.21;
  var dicountUnder18 = (priceTicket - (priceTicket * 20)/ 100);
  var diocountOver65 = (priceTicket - (priceTicket * 40)/ 100);

  if (age < 18){


  }
})

btnCancel.addEventListener("click", function () {
  //Genera ticket
  console.log("Cancella");
})
