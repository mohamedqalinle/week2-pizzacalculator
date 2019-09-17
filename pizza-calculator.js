const klein= 4;
const medium= 7;
const groot= 10;
var kleinAantal;
var mediumAantal;

alert('een kleine pizza kost 4 euro');
alert('een medium pizza kost 7 euro');
alert('een grote pizza kost 10 euro');
var kleinAantal=prompt('hoeveel kleine pizzas');
var totaalklein= kleinAantal * klein;
document.write(totaalklein);
document.write('euro aan kleine pizzas')
document.write('<br/>');
var mediumAantal=prompt('hoeveel medium pizzas');
var totaalmedium= mediumAantal*medium;
document.write(totaalmedium);
document.write('euro aan medium pizzas')
document.write('<br/>');
var grootAantal=prompt('hoeveel grote pizzas');
var totaalgroot= grootAantal*groot;
document.write(totaalgroot);
document.write('euro aan grote pizzas')
document.write('<br/>');
var totaal= totaalklein+totaalmedium+totaalgroot;
document.write(totaal);
document.write('euro totale prijs');

