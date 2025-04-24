
## Task 3:Reasing Values
 whene we  try  to reassign a const variable, you get an error.Because const means the variable cannot be reassigned after it's been given a value.
 ## What’s the difference between var, let, and const?
 var: Old way to declare variables. It's function-scoped and can be re-declared and updated. Avoid using it now.

let: Modern way. It's block-scoped and can be updated, but not re-declared in the same scope.

const: Also block-scoped, but cannot be updated or re-declared. Use it for values that shouldn’t change.

## When should we use const over let? 
Use const when you don’t need to change the value.

Use let when the value might change later.
##  Why should we avoid using var in modern JavaScript?
 1 It’s function-scoped, not block-scoped — can cause confusing bugs.

 2 It allows re-declaring variables — can overwrite values by accident.

 3 let and const are safer and more predictable.