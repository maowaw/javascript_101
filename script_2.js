var your_number = prompt("De quel nombre veux-tu calculer la factorielle ?")

function factorial(number) {
	if (number == 0 || number == 1) {
    return 1;
	}
  else if (number < 0) {
    return "impossible à calculer";
  }
  else return number * factorial(number - 1) ;
}


console.log(`Le résultat est : ${factorial(your_number)}`)