// variables
var people = [
  {
    firstName: 'Finka',
    lastName: 'Takenaka',
    age: 57
  },
  {
    firstName: 'Tiriaq',
    lastName: 'Fenstermacher',
    age: 46
  },
  {
    firstName: 'Amel',
    lastName: 'Flipse',
    age: 86
  },
  {
    firstName: 'Clara',
    lastName: 'Schwartz',
    age: 27
  },
  {
    firstName: 'Vivyan',
    lastName: 'Mah',
    age: 35
  }

]
// Use map() to get an array of first and last names

function getFirstAndLastNames (obj) {
  return (obj.firstName + ' ' + obj.lastName)
}

var fullName = people.map(getFirstAndLastNames)
console.log(fullName)

// Use map() to create a new array of objects that only contain fullName and age properties. The fullName property should be set to the concatenation of the firstName and lastName properties. EG: [{fullName: "Finka Takenaka", age: 57}, {fullName: "Tiriaq Fenstermacher", age: 46}, ...]

function getNameAndAge (obj) {
  return {fullName: obj.firstName + ' ' + obj.lastName,
    age: obj.age}
}
var nameAndAge = people.map(getNameAndAge)
console.log(nameAndAge)
