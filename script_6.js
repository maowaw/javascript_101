// Transformer un ARN présenté sous forme de string "UUACGCAGUAGA" en une suite d'acides aminés que tu imprimeras en console : "Leucine-Arginine-Sérine-Arginine"


function transformARNToAA (string) {

//.match permet de séparer une chaine de caractères, tous les n caractères, ici 3
var array_ARN = string.match(/.{3}/g) ;

console.log(array_ARN)

var array_AA = []

array_ARN.forEach(ARN => {

	switch (ARN) {

		case ("UCU") : 
		case( "UCC") : 
		case("UCA") : 
		case( "UCG") : 
		case( "AGU") : 
		case( "AGC") :
		ARN = "Sérine";
		console.log(ARN)
		array_AA.push(ARN)
		break;

		case ("CCU") : 
		case( "CCC") : 
		case("CCA") : 
		case( "CCG" ) :
		ARN = "Proline";
		console.log(ARN);
		array_AA.push(ARN)
		break;

		case ("UUA") : 
		case( "UUG" ) :
		ARN = "Leucine";
		console.log(ARN);
		array_AA.push(ARN)
		break;

		case ("UUU") : 
		case( "UUC" ) :
		ARN = "Phénylalanine";
		console.log(ARN);
		array_AA.push(ARN)
		break;

		case ("CGU") : 
		case( "CGC") : 
		case("CGA") : 
		case( "CGG") : 
		case( "AGA") : 
		case( "AGG" ) :
		ARN = "Arginine";
		console.log(ARN);
		array_AA.push(ARN)
		break;

		case ("UAU") : 
		case( "UAC" ) :
		ARN = "Proline";
		console.log(ARN);
		array_AA.push(ARN)
		break;

		default:
    console.log("Cette entrée n'est pas reconnue");
    break;
	}
	}
)

string_AA = array_AA.join("-")

console.log(`La chaine d'acide aminés correspondant à ${string} est donc ${string_AA}`)

}


verif_1 = "CCGUCGUUGCGCUACAGC"

console.log(transformARNToAA(verif_1))

verif_2 = "CCUCGCCGGUACUUCUCG"

console.log(transformARNToAA(verif_2))