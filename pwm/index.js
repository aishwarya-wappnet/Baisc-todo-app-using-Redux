 // all its utility functions for functional programmming are defined in this package 
var _ = require('lodash/fp')
// Functional Composition
let input = "    Javascript    ";
let output = "div" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
// const wrapInSpan = str => `<span>${str}</span>`
// the only difference between the above to constants is the type of element. It would be nice if we could parameterize the function.
// const wrap = (type, str)  => `<${type}>${str}</${type}>`
// const wrap = (type, str)  => `<${type}>${str}</${type}>`
// currying
const wrap = type => str => `<${type}>${str}</${type}>`

const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

// compose is another example of higher order functions
const transform = _.compose(wrapInDiv, toLowerCase, trim)
const transform2 = _.pipe(trim, toLowerCase, wrap("span"))
// pipe is a function with single parameter. We cannot pass multiple. This is the problem that currying solves
console.log(transform(input))
console.log(transform2(input))
