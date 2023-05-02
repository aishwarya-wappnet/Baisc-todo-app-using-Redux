import { Map } from 'immutable'

const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};

// person.name = "Bob";

// Deep Copying
const updatedPerson = {
    name: "Bob",
    address: {
        ...person.address,
        city: "Seattle"
    }
}
updatedPerson.address.city = "Seattle"

console.log(person);
console.log(updatedPerson);

// Map object

let Book = Map({title: "Harry Potter"});
console.log(Book)