const data = [
  {
    ranking: 6.3,
    year: 1998,
    name: "Monroe",
    gender: "Genderfluid",
    id: 1450,
    surname: "Jerde",
  },
  {
    ranking: 5.4,
    year: 1999,
    name: "Maxie",
    gender: "Bigender",
    id: 1652,
    surname: "Keebler",
  },
  {
    ranking: 8.7,
    year: 2000,
    name: "Emilee",
    gender: "Genderqueer",
    id: 4779,
    surname: "Ritchie",
  },
  {
    ranking: 6.5,
    year: 2001,
    name: "Rudy",
    gender: "Bigender",
    id: 7105,
    surname: "Gusikowski",
  },
  {
    ranking: 7.1,
    year: 1998,
    name: "Randy",
    gender: "Genderqueer",
    id: 5950,
    surname: "Lebsack",
  },
  {
    ranking: 4.9,
    year: 2000,
    name: "Esteban",
    gender: "Genderqueer",
    id: 7987,
    surname: "Fritsch",
  },
  {
    ranking: 5.3,
    year: 2001,
    name: "Leonard",
    gender: "Male",
    id: 6268,
    surname: "Frami",
  },
  {
    ranking: 8.8,
    year: 2002,
    name: "Lang",
    gender: "Polygender",
    id: 1033,
    surname: "Dietrich",
  },
  {
    ranking: 9.1,
    year: 2000,
    name: "Lettie",
    gender: "Agender",
    id: 6403,
    surname: "Gutmann",
  },
  {
    ranking: 6.0,
    year: 1998,
    name: "Shonda",
    gender: "Agender",
    id: 1324,
    surname: "Borer",
  },
  {
    ranking: 7.3,
    year: 2003,
    name: "Francene",
    gender: "Agender",
    id: 6836,
    surname: "Blanda",
  },
  {
    ranking: 6.8,
    year: 2003,
    name: "Everett",
    gender: "Polygender",
    id: 4937,
    surname: "O'Keefe",
  },
  {
    ranking: 5.3,
    year: 1998,
    name: "Bernardo",
    gender: "Agender",
    id: 8148,
    surname: "Baumbach",
  },
  {
    ranking: 9.3,
    year: 2003,
    name: "Brianna",
    gender: "Female",
    id: 7716,
    surname: "Schamberger",
  },
  {
    ranking: 9.7,
    year: 1998,
    name: "Douglass",
    gender: "Male",
    id: 4152,
    surname: "Hilpert",
  },
  {
    ranking: 4.8,
    year: 1998,
    name: "Angel",
    gender: "Female",
    id: 355,
    surname: "O'Hara",
  },
  {
    ranking: 5.7,
    year: 2000,
    name: "Hugh",
    gender: "Male",
    id: 9600,
    surname: "Hilll",
  },
  {
    ranking: 8.5,
    year: 1999,
    name: "Graciela",
    gender: "Agender",
    id: 871,
    surname: "Kerluke",
  },
  {
    ranking: 2.4,
    year: 2000,
    name: "Chassidy",
    gender: "Agender",
    id: 4313,
    surname: "Hegmann",
  },
  {
    ranking: 3.4,
    year: 1999,
    name: "Abdul",
    gender: "Agender",
    id: 367,
    surname: "Weimann",
  },
  {
    ranking: 7.1,
    year: 2002,
    name: "Coleen",
    gender: "Non-binary",
    id: 1428,
    surname: "Feil",
  },
  {
    ranking: 8.7,
    year: 2001,
    name: "Eleanora",
    gender: "Genderfluid",
    id: 984,
    surname: "Barton",
  },
  {
    ranking: 9.7,
    year: 2002,
    name: "Sean",
    gender: "Agender",
    id: 5689,
    surname: "Runolfsson",
  },
  {
    ranking: 4.5,
    year: 1999,
    name: "Ike",
    gender: "Female",
    id: 8445,
    surname: "Haag",
  },
  {
    ranking: 7.7,
    year: 2001,
    name: "Rachele",
    gender: "Genderqueer",
    id: 6978,
    surname: "Grady",
  },
  {
    ranking: 9.1,
    year: 2001,
    name: "Sam",
    gender: "Bigender",
    id: 1321,
    surname: "Fritsch",
  },
  {
    ranking: 9.0,
    year: 2000,
    name: "Eddy",
    gender: "Polygender",
    id: 8273,
    surname: "Kemmer",
  },
  {
    ranking: 4.6,
    year: 1999,
    name: "Jamar",
    gender: "Female",
    id: 6052,
    surname: "Grant",
  },
  {
    ranking: 9.3,
    year: 2001,
    name: "Dino",
    gender: "Genderfluid",
    id: 5671,
    surname: "Erdman",
  },
  {
    ranking: 7.6,
    year: 1999,
    name: "Ervin",
    gender: "Non-binary",
    id: 9945,
    surname: "Powlowski",
  },
];

const winnerByYear = (arr, year) => {
  const result = arr
    .filter((person) => person.year === year)
    .sort((a, b) => b.ranking - a.ranking)
    .slice(0, 3)
    .map((person) => person.name);
  return result;
};

console.log(winnerByYear(data, 1998)); // [ 'Douglass', 'Randy', 'Monroe' ]
console.log(winnerByYear(data, 1999)); // [ 'Graciela', 'Ervin', 'Maxie' ]
console.log(winnerByYear(data, 2000)); // [ 'Lettie', 'Eddy', 'Emilee' ]
console.log(winnerByYear(data, 2001)); // [ 'Dino', 'Sam', 'Eleanora' ]
console.log(winnerByYear(data, 2002)); // [ 'Sean', 'Lang', 'Coleen' ]
console.log(winnerByYear(data, 2003)); // [ 'Brianna', 'Francene', 'Everett' ]
console.log(winnerByYear(data, 2004)); // []
