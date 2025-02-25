import LinkedList from "./src/LinkedList.js";

const list = LinkedList();

list.append(2);
list.append("wow");
list.prepend(666);
list.prepend("finally");
list.append("LAST");

console.log(list.toString());
list.pop();
console.log(list.toString());
