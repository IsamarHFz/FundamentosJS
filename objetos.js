// Objeto es una colección de datos
// a travéz de key/value llave/valor
/*
objeto = {
    key: 'valor'
    'key': 'valor'
}
objeto.key
objeto.['key']
*/

const alumno = {
    name: 'Steve', 
    age: 21,
    city: 'Milan',
    califications: [10, 10, 8],
    career: 'TIADSM',
    'last name': 'Jobs',
    'gender': 'Male'
}

console.log(alumno);
console.log(alumno.name);
console.log(alumno.city);
console.log(alumno['califications']);
console.log(alumno['last name']);

alumno.height =1.75;
console.log(alumno);

const group = {
    name: '4A DSM', 
    career: 'TIADSM',
    classroom: 'Lab Redes1',
    subjects: ['Aplicaciones', 'Modelado', 'Data Bases'],
    alumns: [alumno, alumno, alumno]
}

console.log(group);
console.log(group.subjects[1]);
console.log(group.alumns[0].califications[1
]);