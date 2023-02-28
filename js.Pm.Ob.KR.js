/* №1 */
let obj1 = {
	'1a': 1, /* кавычки обязательны */
	'b2': 2, /* нет */
	'с-с': 3, /* кавычки обязательны */
	'd 4': 4, /* кавычки обязательны */
	'e5': 5  /* нет */
};

/* №2 */

let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);
