import LinkedList from "./src/LinkedList.js";

const list = LinkedList();

list.append(2);
list.append("wow");
list.prepend(666);
list.prepend("finally");
list.append("LAST");

console.log(list.toString());

list.insertAt("firstest", 0);
list.insertAt("latest", 6);
list.insertAt("middle", 3);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
