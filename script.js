import LinkedList from "./src/LinkedList.js";

const list = LinkedList();

list.append(2);
list.append("wow");
list.append(666);
list.append("finally");

console.log(list.toString());
