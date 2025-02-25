import LinkedList from "./src/LinkedList.js";

const list = LinkedList();

list.append(2);
list.append("wow");
list.prepend(666);
list.prepend("finally");
list.append("LAST");

console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
