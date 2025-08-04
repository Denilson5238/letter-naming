var name = prompt("what is your name");
var firstChar = name.slice(0,1);
var upperCasefirstChar = firstChar.toUpperCase();
var upperCase = name.toUpperCase();
var restOfname = name.slice(1,name.length);
// test
var restOfname = restOfname.toLowerCase();
var capitalisedName = upperCasefirstChar + restOfname;
console.log("Hello, " + capitalisedName)
