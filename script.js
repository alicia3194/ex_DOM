let ulH = document.querySelector("ul");
let arra = ["comprar", "barrer", "alimentar gato", "colada"];

for (let i = 0; i < arra.length; i++) {
  let li = document.createElement("li");
  ulH.appendChild(li);
  let node = document.createTextNode(arra[i]);
  li.appendChild(node);
}
