import LinkedList from "./src/LinkedList.js";

const list = LinkedList();

list.append(2);
list.append("wow");
list.prepend(666);
list.prepend("finally");
list.append("LAST");

console.log(list.toString());
console.log(`found: ${list.at(0)}`);
console.log(`found: ${list.at(3)}`);
console.log(`found: ${list.at(6)}`);
