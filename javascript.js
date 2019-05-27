/*особенности программировнаия*/
//существуют функциональные языки программирования, такие как Scala или Erlang, которые запрещают изменять значения переменных.

/*=======================================================================================*/

/*полезное*/
//OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E.Gamma, R.Helm, R.Johnson, J.Vissides or “Object-Oriented Analysis and Design with Applications” by G.Booch, and more.

/*=======================================================================================*/

/*подключение*/
/*<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
<script src="/path/to/script.js"></script>*/

/*=======================================================================================*/

/*особенности js*/
//js не добавляет точки запятой перед квадратными скобками
//Для переменных можно использовать любой язык, включая буквы кириллицы или даже иероглифы,
//В некоторых языках есть специальный тип «символ» для одного символа. Например, в языке Си и в Java это так char.
//В JavaScript такого типа нет. Там только один тип: string.

//В JavaScript параметр по умолчанию оценивается каждый раз, когда функция вызывается без соответствующего параметра. В приведенном выше примере anotherFunction()вызывается каждый раз, когда showMessage()вызывается без textпараметра. Это отличается от некоторых других языков, таких как Python, где любые параметры по умолчанию оцениваются только один раз во время первоначальной интерпретации.

/*=======================================================================================*/

/*use strict*/
//можно ставить в начале функции, а не всего кода
//выше него можно стаивть только комментарии
//отменить use strict нельзя
//Function Declaration видно только внутри блока кода, в котором оно находится.

"use strict";

num = 5; // error: num is not defined

function sayHi() {
  alert(this);
}
sayHi(); // undefined
//В этом случае this находится undefined в строгом режиме. Если мы попытаемся получить доступ this.name, будет ошибка.

//В нестрогом режиме не возникает ошибок при записи в свойства только для чтения и тому подобное. Но операция все равно не удастся. Действия, нарушающие флаг, просто незаметно игнорируются.

/*=======================================================================================*/

/*встроенные функции*/
/*--alert--*/
/*alert автоматически преобразует любое значение в строку*/

/*--prompt--*/
let age = prompt('How old are you?', 100);
//возвращает текст из поля ввода или, null если ввод был отменен.

/*--confirm--*/
let isBoss = confirm("Are you the boss?");
//Возвращает true если нажата OK и в false противном случае.

/*--isNaN--*/
//преобразует свой аргумент в число, а затем проверяет его на наличие NaN
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

/*--isFinite--*/
//преобразует свой аргумент в число и возвращает, trueесли это обычное число, а не NaN/Infinity/-Infinity:
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

/*--Object.is--*/
//сравнивает значения как ===, но более надежен для двух крайних случаев:
Object.is(NaN, NaN) === true
Object.is(0, -0) === false
//технически это правда, потому что внутренне число имеет бит знака, который может отличаться, даже если все остальные биты равны нулю.
 
/*=======================================================================================*/

/*numbers*/
//есть так называемые «специальные числовые значения» , которые также принадлежат к этому типу данных: Infinity, -Infinity и NaN.

/*--преобразование к числу--*/
let num = Number(str); // becomes a number 123
alert(typeof num); // number
//Если строка не является допустимым числом, результатом такого преобразования является NaN.
undefined		NaN
null			0
true and false	1 а также 0
string			//Пробелы в начале и в конце удаляются. Если оставшаяся строка пуста, результат 0. В противном случае число «читается» из строки. Ошибку дает NaN.
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")

alert( +true ); // 1
alert( +"" );   // 0

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456

//При сравнении значений разных типов JavaScript преобразует значения в числа.

/*--встроенные методы чисел--*/
let n = 1.23456;
alert( n.toFixed(2) ); // 1.23

/*=======================================================================================*/

/*string*/

/*--обратные кавычки--*/
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
//позволяют нам встраивать переменные и выражения в строку

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

/*--преобразование в строку--*/
value = String(value); // now value is a string "true"
alert(typeof value); // string
alert(id.toString()); // Symbol(id), now it works

let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

/*--встроенные методы строк--*/
let str = "Hello";
alert( str.toUpperCase() ); // HELLO

alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H
// the last character
alert( str[str.length - 1] ); // o

//разница между [] и charAt
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)

alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z

let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
alert( str.indexOf('id', 2) ) // 12

alert( str.lastIndexOf('Widget') );

alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false
alert( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"

alert( "Widget".endsWith("get") );   // true, "Widget" ends with "get"

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
alert( str.slice(2) ); // ringify, from the 2nd position till the end
alert( str.slice(-4, -1) ); // gif

alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"
//Отрицательные аргументы (в отличие от слайса) не поддерживаются, они рассматриваются как 0.

alert( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters
alert( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters

let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
// второй необязательный числовой аргумент - ограничение на длину массива
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf
//
let str = "test";
alert( str.split('') ); // t,e,s,t

//сравнение строк
alert( 'Österreich'.localeCompare('Zealand') ); // -1

alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true

/*--встроенные свойства строк--*/
alert( `My\n`.length ); // 3

/*--for..of строки--*/
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

/*--...rest строки--*/

let str = "Hello";
alert( [...str] ); // H,e,l,l,o

/*=======================================================================================*/

/*boolean*/
//Булевы значения также появляются в результате сравнений:
let isGreater = 4 > 1;

/*--преобразование в булево--*/
/*0, null, undefined, NaN,""	false
любое другое значение	true*/

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

/*=======================================================================================*/

/*Symbol*/
/*--создание символа--*/
let id = Symbol();

/*--преобразование символа в строку--*/
let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works
alert(id.description); // id

/*--особенность символа--*/
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

//символы пропускаются в for..in
//Символы не преобразуются автоматически в строку
//Object.assign копирует свойства строки и символа

/*--скрытые свойства--*/
let user = { name: "John" };
let id = Symbol("id");
user[id] = "ID Value";
alert( user[id] ); // we can access the data using the symbol as the key

/*--символ в объекте--*/
//для использования нужны квадратные скобки
let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123 // not just "id: 123"
};

/*--Symbol.for(key)--*/
//Чтобы создать или прочитать символ в глобальном реестре
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again
let idAgain = Symbol.for("id");
// the same symbol
alert( id === idAgain ); // true

/*--Symbol.keyFor(sym)--*/
//возвращает имя по глобальному символу.
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// get name from symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

/*--Системные символы--*/
Symbol.hasInstance
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}
let obj = { canEat: true };
alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called
Symbol.isConcatSpreadable //объекты похожие на массив с этим свойством могут конкатинировать
Symbol.iterator//превращает объект в итерируемый для for..of
let str = "Hello";
// does the same as
// for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}
//
let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};
// Error (no Symbol.iterator)
for (let item of arrayLike) {}

Symbol.toStringTag
let user = {
  [Symbol.toStringTag]: "User"
};
alert( {}.toString.call(user) ); // [object User]
// toStringTag for the environment-specific object and class:
alert( window[Symbol.toStringTag]); // window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest
alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]

Symbol.toPrimitive
//https://tc39.github.io/ecma262/#sec-well-known-symbols

/*=======================================================================================*/

/*Array*/

/*--создание массива--*/
let arr = new Array();
//Если new Array вызывается с одним аргументом, который является числом, то он создает массив без элементов, но с заданной длиной .

let arr = [];

/*--встроенные методы массива--*/
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3

alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

//Возвращает массив удаленных элементов.
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]
//
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]
//
let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"
//
let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert( arr ); // 1,2,3,4,5

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s
alert( arr.slice(-2) ); // s,t

let arr = [1, 2];
// merge arr with [3,4]
alert( arr.concat([3, 4])); // 1,2,3,4
// merge arr with [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// merge arr with [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
//
//с массивоподобными
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,something,else
//если нет свойства [Symbol.isConcatSpreadable] то копирует полностью: 1,2,[object Object]

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.lastIndexOf(false) ); // 2

alert( arr.includes(1) ); // true

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
//Если он возвращается true, поиск останавливается, itemвозвращается. Если ничего не найдено, undefinedвозвращается.
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
//принимает необязательный дополнительный параметр this

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and iteration continues
  // returns empty array for complete falsy scenario
});
//фильтр продолжает повторяться для всех элементов массива, даже если trueон уже возвращен:
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
//принимает необязательный дополнительный параметр this

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
})
//вызывает функцию для каждого элемента массива и возвращает массив результатов.
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
//принимает необязательный дополнительный параметр this

//сортирует массив на месте
let arr = [ 1, 2, 15 ];
// the method reorders the content of arr (and returns it)
arr.sort();
alert( arr );  // 1, 15, 2

let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';');
alert( str ); // Bilbo;Gandalf;Nazgul

let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, initial);
//
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

let arr = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr.reduceRight((sum, current) => sum + current);
alert( result ); // 15

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

/*--for..of массива--*/
let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

/*--Array.from--*/
Array.from(obj[, mapFn, thisArg])
//
//Необязательный второй аргумент mapFnможет быть функцией, которая будет применена к каждому элементу перед добавлением в массив и thisArgпозволяет установить thisего.
let arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25
//
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)

let str = "Hello";
// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o

/*--Деструктуризация массива--*/

// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]
// destructuring assignment
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstName, surname] = "Ilya Kantor".split(' ');

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
alert(user.name); // Ilya

let user = {
  name: "John",
  age: 30
};
// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

//значения по умолчанию

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)

/*--...rest массива--*/

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1); // Julius
alert(name2); // Caesar
// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

/*=======================================================================================*/

/*операторы*/

//Математические операции преобразовывают значения в числа.

/*--typeof--*/
typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

/*--запятая--*/
//возвращается последнее вычесленное выражение

/*--сравнение--*/
//возвращает логическое значение

/*--if--*/
//0, пустая строка "", null, undefinedи NaNвсе преобразуются в false.

/*--switch--*/
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

//сгруппировать case
let a = 2 + 2;
switch (a) {
  case 4:
    alert('Right!');
    break;
  case 3:                    // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}

/*--вопрос--*/
let result = condition ? value1 : value2;

/*--или--*/
//Для каждого операнда конвертирует его в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
//Если все операнды были оценены (т.е. все были false), возвращает последний операнд.

/*--и--*/
//Для каждого операнда преобразует его в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
//Если все операнды были оценены (то есть все были правдивыми), возвращает последний операнд.

/*--delete--*/
delete user.age;

/*--восклицательный знак--*/
//!! иногда используется для преобразования значения в логический тип:
alert( !!"non-empty string" ); // true
alert( !!null ); // false

//особенности с null и undefind
alert( null === undefined ); // false
alert( null == undefined ); // true
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


/*--таблица приоритетов--*/
20	Grouping	n/a	( … )
19	Member Access	left-to-right			… . …
	Computed Member Access	left-to-right	… [ … ]
	new (with argument list)	n/a			new … ( … )
	Function Call	left-to-right			… ( … )
18	new (without argument list)	right-to-left	new …
17	Postfix Increment			n/a	… ++
	Postfix Decrement			… --
16	Logical NOT	right-to-left	! …
	Bitwise NOT					~ …
	Unary Plus					+ …
	Unary Negation				- …
	Prefix Increment			++ …
	Prefix Decrement			-- …
	typeof						typeof …
	void						void …
	delete						delete …
	await						await …
15	Exponentiation	right-to-left	… ** …
14	Multiplication	left-to-right	… * …
	Division						… / …
	Remainder						… % …
13	Addition	left-to-right			… + …
	Subtraction							… - …
12	Bitwise Left Shift	left-to-right	… << …
	Bitwise Right Shift					… >> …
	Bitwise Unsigned Right Shift		… >>> …
11	Less Than	left-to-right	… < …
	Less Than Or Equal			… <= …
	Greater Than				… > …
	Greater Than Or Equal		… >= …
	in							… in …
	instanceof					… instanceof …
10	Equality	left-to-right	… == …
	Inequality					… != …
	Strict Equality				… === …
	Strict Inequality			… !== …
9	Bitwise AND	left-to-right	… & …
8	Bitwise XOR	left-to-right	… ^ …
7	Bitwise OR	left-to-right	… | …
6	Logical AND	left-to-right	… && …
5	Logical OR	left-to-right	… || …
4	Conditional	right-to-left	… ? … : …
3	Assignment	right-to-left	… = …
								… += …
								… -= …
								… **= …
								… *= …
								… /= …
								… %= …
								… <<= …
								… >>= …
								… >>>= …
								… &= …
								… ^= …
								… |= …
2	yield	right-to-left	yield …
			yield*			yield* …
1	Comma / Sequence	left-to-right	… , …

//Цепные задания оцениваются справа налево.

/*=======================================================================================*/

/*Math*/

Math.floor //Закручивается: 3.1становится 3и -1.1становится -2.
Math.ceil //Округляет: 3.1становится 4и -1.1становится -1.
Math.round //Округляет до ближайшего целого числа: 3.1становится 3, 3.6становится 4и -1.1становится -1.
Math.trunc //(не поддерживается Internet Explorer) Удаляет что-либо после десятичной точки без округления: 3.1становится 3, -1.1становится -1.

alert( Math.random() ); // 0.1234567894322
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

/*=======================================================================================*/

/*циклы*/

/*--while--*/
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

/*--do while--*/
//Цикл сначала выполнит тело, затем проверит условие
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

/*--for--*/
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

/*--break--*/
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );
//управление переходит к следующей строке после цикла

/*--continue--*/
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}
//переход к следующей итерации цикла

/*--labelName--*/
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
alert('Done!');

//можем переместить метку на отдельную строку:
outer:
for (let i = 0; i < 3; i++) { ... }

//Вызов to break/continue возможен только из цикла, и метка должна находиться где-то выше директивы.

/*=======================================================================================*/

/*Functions*/

//Функция с пустым return или без него возвращает undefined

/*--Создание функций--*/

let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

/*--Function Declaration--*/
function showMessage() {
  alert( 'Hello everyone!' );
}

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

/*--Function expressions--*/
let sayHi = function() {
  alert( "Hello" );
};

/*--стрелочные функции--*/
let sum = (a, b) => a + b;
let double = n => n * 2;
let sayHi = () => alert("Hello!");
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, use return to get results
};

/*--Значение по умолчанию в функции--*/
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

/*--constructor--*/
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

//можем опустить скобки после new, если у него нет аргументов:
let user = new User; // <-- no parentheses
// same as
let user = new User();

function Rabbit(name) {
  this.name = name;
  alert(name);
}
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");

/*--прототип конструкторов--*/

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
alert( Rabbit.prototype.constructor == Rabbit ); // true

/*--классы--*/

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// Usage:
let user = new User("John");
user.sayHi();

//выражения класса:

let User = class {
  sayHi() {
    alert("Hello");
  }
};

//Если у выражения класса есть имя, оно видно только внутри класса:
// "Named Class Expression" (alas, no such term, but that's what's going on)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass is visible only inside the class
  }
};
new User().sayHi(); // works, shows MyClass definition
alert(MyClass); // error, MyClass not visible outside of the class

//в старом стиле

// rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// any function prototype has constructor property by default,
// so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};
// Usage:
let user = new User("John");
user.sayHi();

/*--классы наследование--*/

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}
// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

/*--super--*/

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}
class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    alert(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!


let animal = {
  name: "Animal",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  }
};
let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};
let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// works correctly
longEar.eat();  // Long Ear eats.

/*--static--*/

//методы
class User {
  static staticMethod() {
    alert(this === User);
  }
}
User.staticMethod(); // true

//свойства
class Article {
  static publisher = "Ilya Kantor";
}
alert( Article.publisher ); // Ilya Kantor

/*--instanceof--*/
//позволяет проверить , принадлежит ли объект к определенному классу
class Rabbit {}
let rabbit = new Rabbit();
// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

/*--mixin--*/

let eventMixin = {
  /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
  */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },
  /**
   * Cancel the subscription, usage:
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },
  /**
   * Generate the event and attach the data to it
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // no handlers for that event name
    }
    // call the handlers
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

//использование

// Make a class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
// call the handler on selection:
menu.on("select", value => alert(`Value selected: ${value}`));
// triggers the event => shows Value selected: 123
menu.choose("123"); // value selected

/*--target--*/
function User() {
  alert(new.target);
}
// without "new":
User(); // undefined
// with "new":
new User(); // function User { ... }

/*--рекурсия--*/
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
alert( pow(2, 3) ); // 8

function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

/*--...rest функции--*/
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar
  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}
showName("Julius", "Caesar", "Consul", "Imperator");

/*--arguments--*/

function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");
// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

/*--IIFE--*/
(function() {

  let message = "Hello";

  alert(message); // Hello

})();

// Как можно создать IIFE

(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();

/*--встроенные свойства функций--*/
function sayHi() {
  alert("Hi");
}
alert(sayHi.name); // sayHi
//
let user = {
  sayHi() {
    // ...
  },
  sayBye: function() {
    // ...
  }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}
alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

/*--встроенные методы функций--*/

func.call(context, arg1, arg2, ...)
func(1, 2, 3);
func.call(obj, 1, 2, 3)
//
let args = [1, 2, 3];
func.call(context, ...args); // pass an array as list with spread operator

func.apply(context, args)
func(1, 2, 3);
func.apply(context, [1, 2, 3])
//
let args = [1, 2, 3];
func.apply(context, args);   // is same as using apply

let boundFunc = func.bind(context);

/*--NFE--*/
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

/*--декораторы--*/
function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) { // if the result is in the map
      return cache.get(x); // return it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) is cached
alert( "Again: " + slow(1) ); // the same

alert( slow(2) ); // slow(2) is cached
alert( "Again: " + slow(2) ); // the same as the previous line

/*--карринг--*/
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
// usage
function sum(a, b) {
  return a + b;
}
let carriedSum = curry(sum);
alert( carriedSum(1)(2) ); // 3

//продвинутая реализация
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6, still callable normally
alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
alert( curriedSum(1)(2)(3) ); // 6, full currying

/*=======================================================================================*/

/*Objects*/
//Зарезервированные слова допускаются как имена свойств

/*--создание объектов--*/

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

/*--вычисленные свойства--*/
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

/*--сокращенные свойства--*/
function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
    // ...
  };
}

let user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};

/*--"key" in object--*/
let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

/*--перебор свойств--*/
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

/*--Object.assign--*/
Object.assign(dest, [src1, src2, src3...])
//Аргументы dest и src1, ..., srcN(могут быть сколько угодно) являются объектами.
//Копирует свойства всех объектов src1, ..., srcNв dest. Другими словами, свойства всех аргументов, начиная со второго, копируются в первый. Тогда это возвращается dest.
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }

//Если принимающий объект ( user) уже имеет такое же именованное свойство, оно будет перезаписано

/*--примитивное значение--*/
/*let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

/*conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500*/

//В отсутствие Symbol.toPrimitiveи valueOf, toString будет обрабатывать все примитивные преобразования.*/

/*--встроенные методы объектов--*/

Object.keys (obj) / Object.values ​​(obj) / Object.entries (obj) // возвращает массив пар перечисляемых имен / значений / ключей / значений собственных строковых свойств.
Object.getOwnPropertySymbols (obj) // возвращает массив всех собственных символических ключей.
Object.getOwnPropertyNames (obj) //возвращает массив всех собственных строковых ключей.
Reflect.ownKeys (obj) // возвращает массив всех собственных ключей.
obj.hasOwnProperty (key) //он возвращает, trueесли objимеет свое собственное (не унаследованное) имя ключа keytt key.

Object.keys (obj) // возвращает массив ключей.
Object.values ​​(obj) // возвращает массив значений.
Object.entries (obj) // возвращает массив [key, value]пар.

Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

let user = {
  name: "John",
  age: 30
};
// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}

/*--Деструктуризация объекта--*/

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {title, width, height} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
//Порядок не имеет значения.
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;
// width -> w
// height -> h
// title -> title
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

let options = {
  title: "Menu"
};
let {width = 100, height = 200, title} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

let options = {
  title: "Menu"
};
let {width: w = 100, height: h = 200, title} = options;
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

/*--...rest объекта--*/

let options = {
  title: "Menu",
  height: 200,
  width: 100
};
let {title, ...rest} = options;
// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100

/*--дескрипторы свойств--*/

//флаги
writable //если true, может быть изменено, иначе это только для чтения.
enumerable // если true, то указан в циклах, в противном случае не указан.
configurable // если trueсвойство можно удалить и эти атрибуты можно изменить, иначе нет.

//позволяет запрашивать полную информацию о свойстве.
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
  name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}*/

//Чтобы изменить флаги, мы можем использовать:
Object.defineProperty(obj, propertyName, descriptor)
let user = {};
Object.defineProperty(user, "name", {
  value: "John"
});
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

//позволяет определять много свойств одновременно
 Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

 //Чтобы получить все дескрипторы свойств одновременно
 let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

 Object.preventExtensions (OBJ) //Запрещает добавление новых свойств к объекту.
Object.seal (OBJ) //Запрещает добавление / удаление свойств. Наборы configurable: falseдля всех существующих свойств.
Object.freeze (OBJ) //Запрещает добавление / удаление / изменение свойств. Наборы configurable: false, writable: falseдля всех существующих свойств. А также есть тесты для них:
Object.isExtensible (OBJ) //Возвращает, falseесли добавление свойств запрещено, в противном случае true.
Object.isSealed (OBJ) //Возвращает, trueесли добавление / удаление свойств запрещено, и все существующие свойства имеют configurable: false.
Object.isFrozen (OBJ) //Возвращает, trueесли добавление / удаление / изменение свойств запрещено, и все текущие свойства являются configurable: false, writable: false.

/*--getters and setters--*/

let obj = {
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper

let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};
user.name = "Pete";
alert(user.name); // Pete
user.name = ""; // Name is too short...

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}
let john = new User("John", new Date(1992, 6, 1));
alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age

/*--прототипы--*/

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// walk is taken from the prototype
rabbit.walk(); // Animal walk

let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

/*--методы прототипов--*/

Object.create (proto [, descriptors]) // создает пустой объект с заданными дескрипторами protoas [[Prototype]]и необязательными свойствами.
Object.getPrototypeOf (объект) // возвращает [[Prototype]]из obj.
Object.setPrototypeOf (объект, прото) // устанавливает [[Prototype]]из objв proto.

let animal = {
  eats: true
};
// create a new object with animal as a prototype
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

let animal = {
  eats: true
};
let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});
alert(rabbit.jumps); // true

//Мы можем использовать Object.createдля клонирования объекта более мощное, чем копирование свойств в for..in:
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

/*=======================================================================================*/

/*Map*/
//В Map допускаются ключи любого типа.

/*--создание Map--*/

new Map() // создает карту.
let map = new Map(Object.entries({
  name: "John",
  age: 30
})); //[ ["name","John"], ["age", 30] ].
//
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

/*--встроенные методы Map--*/

map.set(key, value) // сохраняет значение по ключу.
map.get(key)// возвращает значение по ключу, undefinedесли keyего нет на карте.
map.has(key)// возвращает, trueесли keyсуществует, в falseпротивном случае.
map.delete(key) // удаляет значение по ключу.
map.clear() // очищает карту
map.size // возвращает текущее количество элементов.

let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

map.keys() // возвращает итерацию для ключей,
map.values() // возвращает итерацию для значений,
map.entries()// возвращает итерацию для записей [key, value], по умолчанию она используется в for..of.

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

/*--WeakMap--*/

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // works fine (object key)
// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference
// john is removed from memory!

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)

/*=======================================================================================*/

/*Set*/
//представляет собой набор значений, где каждое значение может встречаться только один раз.

/*--создание Set--*/
new Set(iterable) // создает набор, необязательно из массива значений (подойдет любой итеративный).

/*--встроенные методы Set--*/
set.add(value) // добавляет значение, возвращает сам набор.
set.delete(value)// удаляет значение, возвращает, trueесли оно valueсуществовало на момент вызова, в противном случае false.
set.has(value)// возвращает, trueесли значение существует в наборе, в противном случае false.
set.clear() // удаляет все из набора.
set.size // количество элементов.

let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
alert( set.size ); // 3
for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

let set = new Set(["oranges", "apples", "bananas"]);=
for (let value of set) alert(value);=
// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});

set.keys() // возвращает итеративный объект для значений,
set.values()// так же, как set.keys, для совместимости с Map,
set.entries()// возвращает итеративный объект для записей [value, value], существует для совместимости с Map.

/*--WeakSet--*/

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
// fill it with array elements (3 items)
let unreadSet = new WeakSet(messages);
// use unreadSet to see whether a message is unread
alert(unreadSet.has(messages[1])); // true
// remove it from the set after reading
unreadSet.delete(messages[1]); // true
// and when we shift our messages history, the set is cleaned up automatically
messages.shift();
// no need to clean unreadSet, it now has 2 items
// (though technically we don't know for sure when the JS engine clears it)

/*=======================================================================================*/

/*Date and time*/

/*--создание Date--*/
let now = new Date();
alert( now ); // shows current date/time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

let date = new Date("2017-01-26");
alert(date);
// The time portion of the date is assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(year, month, date, hours, minutes, seconds, ms)
/*Создайте дату с указанными компонентами в местном часовом поясе. Только два первых аргумента являются обязательными.
Замечания:
year олжен иметь 4 цифры: все 2013в порядке, 98нет.
month Отсчет начинается с 0(январь) до 11(декабрь).
date Параметр фактически день месяца, если отсутствует , то 1предполагается.
Если hours/minutes/seconds/msотсутствует, они считаются равными 0.
Например:*/
new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

date.getFullYear () //Получить год (4 цифры)
date.getMonth () //Получите месяц от 0 до 11 .
date.getDate () //Получите день месяца, от 1 до 31, название метода выглядит немного странно.
date.getHours () , getMinutes () , getSeconds () , getMilliseconds () //Получить соответствующие компоненты времени.
date.getDay () //получить день недели:

let start = Date.now(); //возвращает текущую метку времени.

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)

//зона локализации
// the hour in UTC+0 time zone (London time without daylight savings)
alert( date.getUTCHours() );
getUTCFullYear () , getUTCMonth () , getUTCDay () .

//не имеют UTC варианта
//Возвращает временную метку для даты - количество миллисекунд, прошедших с 1 января 1970 года по UTC + 0.
getTime ()
//Возвращает разницу между местным часовым поясом и UTC в минутах:
getTimezoneOffset ()

setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) // (устанавливает целую дату в миллисекундах с 01.01.1970 UTC)

setUTCHours()

let today = new Date();
today.setHours(0);
alert(today); // still today, but the hour is changed to 0
today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

/*--операции с Date--*/

let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()

let start = new Date(); // start counting
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // done
alert( `The loop took ${end - start} ms` );

/*=======================================================================================*/

/*JSON*/

/*--stringify--*/

JSON.stringify //конвертировать объекты в JSON.

let json = JSON.stringify(value[, replacer, space])

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
let json = JSON.stringify(student);
alert(typeof json); // we've got a string!
alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

alert( JSON.stringify(1) ) // 1
// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"
alert( JSON.stringify(true) ); // true
alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

//replacer
//Если мы передадим ему массив свойств, будут закодированы только эти свойства.
let room = {
  number: 23
};
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};
room.occupiedBy = meetup; // room references meetup
alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
//или
alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`); // to see what replacer gets
  return (key == 'occupiedBy') ? undefined : value;
}));

//space

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};
alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/
/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

/*--Пользовательский toJSON--*/

let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};
alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

/*--parse--*/

JSON.parse //преобразовать JSON обратно в объект.

let value = JSON.parse(str[, reviver]);

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1

//reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
alert( meetup.date.getDate() ); // now works!

/*=======================================================================================*/

/*Таймеры*/

/*--setTimeout--*/
//позволяет запускать функцию один раз после интервала времени.

let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi() {
  alert('Hello');
}
setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

setTimeout("alert('Hello')", 1000);

/*--clearTimeout--*/

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

/*--setInterval--*/
//позволяет регулярно выполнять функцию с интервалом между запусками.

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


/*=======================================================================================*/

/*try...catch*/

try {
  alert('Start of try runs');  // (1) <--
  lalala; // error, variable is not defined!
  alert('End of try (never reached)');  // (2)
} catch(err) {
  alert(`Error has occurred!`); // (3) <--
}
alert("...Then the execution continues");

/*--err--*/

name //Название ошибки. Для неопределенной переменной это "ReferenceError".
message //Текстовое сообщение об ошибках.
//В большинстве сред доступны другие нестандартные свойства. Одним из наиболее широко используемых и поддерживаемых является:
stack //Текущий стек вызовов: строка с информацией о последовательности вложенных вызовов, приведших к ошибке. Используется в целях отладки.

try {
  lalala; // error, variable is not defined!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at ...

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined

/*--throw--*/

let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json); // <-- no errors
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  alert( user.name );
} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);

//обрабатывать только SyntaxError:
let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
  blabla(); // unexpected error
  alert( user.name );

} catch(e) {
  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // rethrow (*)
  }

}

/*--finally--*/

try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

/*--custom error--*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No property: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it
  }
}

/*=======================================================================================*/

/*window*/

/*--onerror--*/

window.onerror = function(message, url, line, col, error) {
  // ...
};
message //Сообщение об ошибке.
url //URL скрипта, где произошла ошибка.
line, col //Номера строк и столбцов, где произошла ошибка.
error //Ошибка объекта.

  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();