const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];




// Est-ce que tous les livres ont été au moins empruntés une fois ? 
// ON UTILISE LA FONCTION .INCLUDES()

var rented = [] ;

books.forEach(book => {
rented.push(book.rented) 
})


function bookRented(rented) {

   if ((rented.includes(0)) == false) {
    console.log("Tous les livres ont été emprunté au moins une fois") ;
   } 

   else {
    console.log("Au moins un livre n'a jamais été emprunté") ;
   } 
}

bookRented(rented)


// Quel est livre le plus emprunté ? 
// ON UTILISE LA FONCTION .MATH.MAX

books.forEach(book => {
  if (book.rented == Math.max(...rented)) {
    console.log(`\nLe livre le plus emprunté est : ${book.title}`)
  }
})


// Quel est le livre le moins emprunté ?
// ON UTILISE LA FONCTION .MATH.MIN()

books.forEach(book => {
  if (book.rented == Math.min(...rented)) {
    console.log(`\nLe livre le moins emprunté est : ${book.title}`)
  }
})


// Trouve le livre avec l'ID: 873495 ;
var book_id_873495 = books.find(book => book.id == 873495)
console.log(`le livre avec l'ID: 873495 ${book_id_873495.title}`)



// Supprime le livre avec l'ID: 133712 ;

var books_without_133712 = books.filter(book => book.id != 133712);

console.log("\nVoici l'array de livre sans le livre avec l'ID: 133712 :")
console.log(books_without_133712)


// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log("\nVoici l'array de livre sans le livre avec l'ID: 133712, trié dans l'ordre alphabétique :")
console.log(books_without_133712.sort((a, b) => a.title.localeCompare(b.title)))

