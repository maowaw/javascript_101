const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// fonction qui permet de voir la classe d'un objet
function getClass(obj) {
  if (typeof obj === "undefined")
    return "undefined";
  if (obj === null)
    return "null";
  return Object.prototype.toString.call(obj)
    .match(/^\[object\s(.*)\]$/)[1];
}



// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

console.log("-----------Les personnes nées dans les 70s : -----------")

entrepreneurs.forEach(personne=> {
if (personne.year > 1970 && personne.year < 1980) {
console.log(`${personne.first} ${personne.last}`)
}
})

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("\n----------- Tous les entrepreneurs dans un array : -----------")


var names = []

entrepreneurs.forEach(personne => {
names.push(personne.first + " " + personne.last) 
})

console.log(names)
console.log(getClass(names))




// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("\n----------- L'âge des entrepreneurs en 2019 : -----------")
entrepreneurs.forEach(personne=> {
  console.log(`${personne.first} ${personne.last} aurait ${2019- personne.year} ans`)
})


// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("\n----------- Entrepreneurs triés par ordre alphabétique : -----------\n (n'oubliez pas de cliquer sur la petite flèche grise pour voir le tableau trié)")

console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)))