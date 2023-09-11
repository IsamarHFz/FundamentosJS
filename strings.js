// Strings en JavaScript 

let miString ="Este Es uN TeXto" + ' de PrUeBa';
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith('a'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

console.log("I'm Isabel");

console.log('i\'m Isabel');

// Strings Multilínea 
const menu = ` 
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;
// `` Comilla francesa o backticks
console.log(menu);

// Strings Templates 
// placeholder ${}

const name =  'Peter';
const superhero = 'Spiderman';
const age = 20;

console.log("Soy " + name + "soy" + superhero + 'y tengo' + age + 'años');
console.log(`Soy $ { name } soy $ { superhero } y tengo $ { age } años`);