// Funzione Bottoni
var btnGenerator = document.getElementById("btn_generator");
var btnCancel = document.getElementById("btn_cancel");

// Genera ticket
btnGenerator.addEventListener("click", function () {
  console.log("Genera il ticket");

  /// Selezionare valore degli input
  var userName = document.getElementById("user_name").value;
  var km = parseInt(document.getElementById("km").value);
  var rangeAge = document.getElementById("range_age").value;

  /// Generare prezzo e dati del biglietto

  //// Prezzo del biglietto
  var priceTicket = km * 0.21;
  var dicountUnder18 = (priceTicket - (priceTicket * 20)/ 100);
  var diocountOver65 = (priceTicket - (priceTicket * 40)/ 100);


  //// Numero della carrozza
  var numberCarriage = Math.floor(Math.random() * 9) +1;

  //// Codice CP
  var cpCode = Math.floor(Math.random() * (100000 - 90000)) + 90000;
  console.log(userName, km, rangeAge, priceTicket, dicountUnder18, diocountOver65, numberCarriage, cpCode);


  /// Mostra dati del biglietto
  document.getElementById("ticket").style.display = "block";
  document.getElementById("id_user").innerHTML = userName;
  document.getElementById("offert").innerHTML = "Prezzo Standard";
  document.getElementById("carriage").innerHTML = numberCarriage;
  document.getElementById("cp_code").innerHTML = cpCode;
  document.getElementById("price_ticket").innerHTML = priceTicket.toFixed(2);

  if (rangeAge == "under18") {
    document.getElementById("offert").innerHTML = "Sconto Minorenni";
    document.getElementById("price_ticket").innerHTML = dicountUnder18.toFixed(2);
  } else if (rangeAge == "over65") {
    document.getElementById("offert").innerHTML = "Sconto Silver";
    document.getElementById("price_ticket").innerHTML = diocountOver65.toFixed(2);
  }
})

//Cancella form
btnCancel.addEventListener("click", function () {
  console.log("Cancella");
  document.getElementById("ticket").style.display = "none";

  var userName = document.getElementById("user_name").value = "";
  var km = document.getElementById("km").value = "";
  var rangeAge = document.getElementById("range_age").value = "";
})
