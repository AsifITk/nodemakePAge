let visited = require("../main");
console.log(visited);

let count = document.querySelector(".visited");

count.innerHTML = `Website Visited ${visited.visited}`;
