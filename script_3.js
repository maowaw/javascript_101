function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

//verif que la fonction pour répéter une string fonctionne :
console.log(repeatStringNumTimes("abc", 3));

function pyramid(num) {
  let number = 0;

  for (let i = 1; i <= num; i++) {
    console.log(repeatStringNumTimes(" ", (num -= 1)) + repeatStringNumTimes("*", (number += 1)));
  }
}


var my_number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

console.log(pyramid(my_number))