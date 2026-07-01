// ??

console.log(null >= 0); // null ==0 or null>0
console.log(null === 0);

// ?? Nullish
let amul = null;
let milk_required = amul ?? "Nandini Milk";
console.log(milk_required); // Nandini Milk, because amul is undefined, so the nullish operator returns the right-hand side value

// vla ="which milk" 00> " +val;
//console.log(val); // Nandini Milk, because amul is undefined, so the nullish operator returns the right-hand side value