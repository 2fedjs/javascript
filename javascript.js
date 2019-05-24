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

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H
// the last character
alert( str[str.length - 1] ); // o

//разница между [] и charAt
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)

/*--встроенные свойства строк--*/
alert( `My\n`.length ); // 3

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
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
//https://tc39.github.io/ecma262/#sec-well-known-symbols

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

//Функция с пустым returnили без него возвращаетundefined

/*--Function Declaration--*/
function showMessage() {
  alert( 'Hello everyone!' );
}

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

/*--target--*/
function User() {
  alert(new.target);
}
// without "new":
User(); // undefined
// with "new":
new User(); // function User { ... }

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

//В отсутствие Symbol.toPrimitiveи valueOf, toStringбудет обрабатывать все примитивные преобразования.*/