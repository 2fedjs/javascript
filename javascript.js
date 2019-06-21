/*особенности программировнаия*/
//существуют функциональные языки программирования, такие как Scala или Erlang, которые запрещают изменять значения переменных.

/*=======================================================================================*/

/*полезное*/
//OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E.Gamma, R.Helm, R.Johnson, J.Vissides or “Object-Oriented Analysis and Design with Applications” by G.Booch, and more.

/*=======================================================================================*/

/*подключение*/
/*<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
<script src="/path/to/script.js"></script>*/

// загрузить сценарий «в фоновом режиме», а затем запустить скрипт при загрузке.
/*<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>*/

//Что бы ни загружалось первым - запускается первым:
/*<script async src="https://javascript.info/article/script-async-defer/long.js"></script>*/

//<link rel=”preload” href=”external.js” as=”script”>

function addScript(src){ 
  var script = document.createElement('script'); 
  script.src = src; 
  script.async = false; // чтобы гарантировать порядок 
  document.head.appendChild(script); 
}
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
//У функций в режиме use strict для this вместо глобального объекта this будет undefined.

//В нестрогом режиме не возникает ошибок при записи в свойства только для чтения и тому подобное. Но операция все равно не удастся. Действия, нарушающие флаг, просто незаметно игнорируются.

function f(x) {
 "use strict"; // для браузеров с поддержкой строгого режима 
arguments[0] = 5; 
alert( x ); // не 5, а 1! Переменная "отвязана" от arguments 
} 
f(1);

arguments.callee //при use strict оно не работает. хранит в свойстве ссылку на функцию, которая выполняется в данный момент.
arguments.callee.caller //при use strict оно не работает. хранит ссылку на функцию, которая вызвала данную.

//При use strict код внутри eval по-прежнему сможет читать и менять внешние переменные, однако переменные и функции, объявленные внутри eval, не попадут наружу.

// попытаемся записать свойство в строку:
var user = "Вася";
user.age = 30;
alert( user.age ); // undefined
/*Свойство age было записано во временный объект, который был тут же уничтожен, так что смысла в такой записи немного. Пример выше выполняется без use strict, в строгом режиме была бы ошибка, и это хорошо, так как такая запись, по большому счету, не имеет смысла.*/

//В современном JavaScript от with отказались. С use strict она не работает.
with(obj) { 
  //...код...
}

/*=======================================================================================*/

/*встроенные функции*/
/*--alert--*/
/*alert автоматически преобразует любое значение в строку
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

//точная проверка на число, которая не считает числом строку из пробелов, логические и специальные значения, а также отсекает Infinity
isNumeric(n)

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

alert( 0xFF ); // 255 в шестнадцатиричной системе

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456

 // после обрезания пробельных символов останется "123"
alert( +"   \n  123   \n  \n" ); // 123

//При сравнении значений разных типов JavaScript преобразует значения в числа.

alert( '2' > 1 ); // true, сравнивается как 2 > 1
alert( '01' == 1 ); // true, сравнивается как 1 == 1
alert( false == 0 ); // true, false становится числом 0
alert( true == 1 ); // true, так как true становится числом 1.

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
/*Сравнения (1) и (2) дают false потому, что undefined при преобразовании к числу даёт NaN. А значение NaN по стандарту устроено так, что сравнения ==, <, >, <=, >= и даже === с ним возвращают false.
Проверка равенства (3) даёт false, потому что в стандарте явно прописано, что undefined равно лишь null или себе и ничему другому.*/

/*--встроенные методы чисел--*/
let n = 1.23456;
alert( n.toFixed(2) ); // 1.23
alert( n.toFixed(0) ); // "12"
alert( n.toFixed(5) ); // "12.34500"

n.toExponential(4); //5.0000е+3 для перевод к экспонтенциальной формы с количеством цифр после запятой
n.toPrecision(8); //5000.0000 для задания точности

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

alert( number.toLocaleString() ); // 123 456 789


/*--встроенные методы строк--*/
let str = "Hello";
alert( str.toUpperCase() ); // HELLO

alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H
// the last character

//charAt выдает пустую строку, а скобки – undefined

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
alert( "testme".substring(4, -1) ); // "test"
alert(str.substring(2)); // ringify, символы с позиции 2 до конца
//Отрицательные аргументы (в отличие от слайса) не поддерживаются, они рассматриваются как 0.

alert( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters
alert( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters
//Если параметр start является отрицательным, метод substr() использует его как индекс символа, начиная с конца строки. Если параметр start отрицателен и по модулю больше длины строки, метод substr() будет использовать 0 в качестве начального индекса.

alert( String.fromCharCode(1072) ); // 'а'
alert( "абрикос".charCodeAt(0) ); // 1072, код 'а'

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

.replace('x','y') // заменяет по первому вхождению в строке

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

/*--Специальные символы--*/
/*Специальные символы
Символ  Описание
\b      Backspace
\f      Form feed
\n      New line
\r      Carriage return
\t      Tab
\uNNNN  Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например, `\u00A9` -- юникодное представление символа копирайт ©*/

//Функции шаблонизации
function f(strings, ...values) {
  alert(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
  alert(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
  alert(JSON.stringify(values));      // [3,5,8]
}
let apples = 3;
let oranges = 5;
//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;

/*--метод raw--*/
//В нём находятся строки в точности как в оригинале. Это влияет на спец-символы, например в strings символ \n – это перевод строки, а в strings.raw – это именно два символа \n.
//В отличие от strings, в strings.raw содержатся участки строки в «изначально введённом» виде.
//То есть, если в строке находится \n или \u1234 или другое особое сочетание символов, то оно таким и останется.

// один символ с "длинным" (более 2 байт) unicode-кодом
alert( '𝒳'.codePointAt(0) ); // 119987




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

!!value 

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

// доступ к свойству через глобальный символ — работает
alert( user[Symbol.for("isAdmin")] );

//свойство-символ недоступно, если обратиться к его названию: user.isAdmin не существует.
Symbol.toPrimitive // идентификатор для свойства, задающего функцию преобразования объекта в примитив.
Symbol.iterator // идентификатор для свойства, задающего функцию итерации по объекту.

//Пример
let s = Symbol("id");
user[s] = 123;

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

// символ уже есть, чтение из реестра
alert( Symbol.for("name") == name ); // true

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
//этот код получает итератор для строки и вызывает его полностью «вручную»:

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
//Операции с массивами также оптимизируются, особенно если массив хранит только один тип данных, например только числа. Порождаемый набор инструкций для процессора получается очень эффективным.

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

// изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
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

//Создает новый массив
//Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется.
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s
alert( arr.slice(-2) ); // s,t


//создаёт новый массив, в который копируются элементы из arr, а также value1, value2, ... valueN
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

//для каждого элемента массива вызывает функцию callback.
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
//Второй, необязательный аргумент forEach позволяет указать контекст this

//Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement в массиве arr или -1, если его нет.
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

//Метод «arr.lastIndexOf(searchElement[, fromIndex])» ищет справа-налево: с конца массива или с номера fromIndex, если он указан.
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

//используется для фильтрации массива через функцию. создаёт новый массив
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

//создаёт новый массив
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

function compareNumeric(a, b) { // return a - b;
  if (a > b) return 1;
  if (a < b) return -1;
}
var arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

//изменяет массив 
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';');
alert( str ); // Bilbo;Gandalf;Nazgul



/*#------------Метод every------------*/
//возвращает true, если вызов callback вернёт true для каждого элемента arr
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

/*#------------Метод some------------*/
//возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

//применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, initial);
//
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
/*Аргументы функции callback(previousValue, currentItem, index, arr):
previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.*/

let arr = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let result = arr.reduceRight((sum, current) => sum + current);
alert( result ); // 15
//сворачивает все элементы справа налево в одно значение
var a = ['h','e','l','l','o',]; 
var as = a.reduceRight((sum,elem)=>sum+elem,0); //ноль для работы с пустыми массивами

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

/*--for..of массива--*/
let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

/*--Array.from--*/
//создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
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


//Массив из Set
var s = new Set(['foo', window]); 
Array.from(s); 
// ['foo', window]

//Массив из Map
var m = new Map([[1, 2], [2, 4], [4, 8]]); 
Array.from(m); 
// [[1, 2], [2, 4], [4, 8]]

//Массив из массивоподобного объекта (arguments)
function f() {
  return Array.from(arguments);
}

f(1, 2, 3); 
// [1, 2, 3]

// манипулирования элементами
Array.from([1, 2, 3], x => x + x); 
// [2, 4, 6] 

// Генерирования последовательности чисел
Array.from({ length: 5 }, (v, k) => k); 
// [0, 1, 2, 3, 4]

/*--Деструктуризация массива--*/

// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]
// destructuring assignment
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstName, surname] = "Ilya Kantor".split(' ');

var str = "тест";
alert( str.split('') ); // т,е,с,т

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
// превращает объкты iterable в массивы
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

valueOf // возвращает примитивное значение указанного объекта.

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

/*#побитовые операции*/

/*#------------операции------------*/
/*операции

Побитовое И (AND) 
a & b Ставит 1 на бит результата, для которого соответствующие биты операндов равны 1.
Побитовое ИЛИ (OR)  
a | b Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.
Побитовое исключающее ИЛИ (XOR) 
a ^ b Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).
Побитовое НЕ (NOT)  
~a  Заменяет каждый бит операнда на противоположный.
Левый сдвиг 
a << b  Сдвигает двоичное представление a на b битов влево, добавляя справа нули.
Правый сдвиг, переносящий знак  
a >> b  Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.
Правый сдвиг с заполнением нулями 
a >>> b Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.*/

parseInt("11000", 2) //переводит строку с двоичной записью числа в число.

n.toString(2) //получает для числа n запись в 2-ной системе в виде строки.

/*#------------& (Побитовое И)------------*/
/*a b a & b
0 0   0
0 1   0
1 0   0
1 1   1*/

/*#------------& (Побитовое И)------------*/
/*a b a | b
0 0   0
0 1   1
1 0   1
1 1   1*/

/*#------------^ (Исключающее ИЛИ)------------*/
/*a b a ^ b
0 0   0
0 1   1
1 0   1
1 1   0*/

/*#------------~ (Побитовое НЕ)------------*/

 9 //(по осн. 10)
  = 00000000000000000000000000001001 //(по осн. 2)
             //  --------------------------------
~9 //(по осн. 10)
  = 11111111111111111111111111110110 //(по осн. 2)
  = -10 //(по осн. 10)
//Из-за внутреннего представления отрицательных чисел получается так, что ~n == -(n+1).
alert( ~3 ); // -4
alert( ~-1 ); // 0

/*#------------<< (Битовый сдвиг влево)------------*/

9 //(по осн.10)
  = 00000000000000000000000000001001 //(по осн.2)
               //   --------------------------------
9 << 2 //(по осн.10)
  = 00000000000000000000000000100100 //(по осн.2)
  = 36 //(по осн.10)

  //побитовые операторы работают только с 32-битными числами

  alert(10000000000 << 1); // -1474836480, отброшен крайний-левый бит
  alert(10000000000 * 2); // 20000000000, обычное умножение

/*#------------>> (Правый битовый сдвиг, переносящий знак)------------*/

9 //(по осн.10)
  = 00000000000000000000000000001001 //(по осн.2)
          //       --------------------------------
9 >> 2 //(по осн.10)
  = 00000000000000000000000000000010 //(по осн.2)
  = 2 //(по осн.10)

/*#------------>>> (Правый сдвиг с заполнением нулями)------------*/
/*Для неотрицательных чисел правый сдвиг с заполнением нулями >>> и правый сдвиг с переносом знака >> дадут одинаковый результат, т.к в обоих случаях слева добавятся нули.
Для отрицательных чисел – результат работы разный. Например, -9 >>> 2 даст 1073741821, в отличие от -9 >> 2 (дает -3):*/
-9 //(по осн.10)
  = 11111111111111111111111111110111 //(по осн.2)
              //      --------------------------------
-9 >>> 2 //(по осн.10)
  = 00111111111111111111111111111101 //(по осн.2)
  = 1073741821 //(по осн.10)

//Пример
  // найти пользователей с правами на изменение товаров или администраторов
findUsers(ACCESS_GOODS_EDIT | ACCESS_ADMIN);


var str = "Проверка";

if (~str.indexOf("верка")) { // Сочетание "if (~...indexOf)" читается как "если найдено"
  alert( 'найдено!' );
}

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

Math.acos(x)
//Возвращает арккосинус x (в радианах)
Math.asin(x)
//Возвращает арксинус x (в радианах)
Math.atan(x)
//Возвращает арктангенс x (в радианах)
Math.atan2(y, x)
//Возвращает угол до точки (y, x). Описание функции: Atan2.
Math.sin(x)
//Вычисляет синус x
Math.cos(x)
//Вычисляет косинус x
Math.tan(x)
//Возвращает тангенс x
Math.sqrt(x)
//Возвращает квадратный корень из x.
Math.log(x)
//Возвращает натуральный (по основанию e) логарифм x.

Math.abs(x)
//Возвращает абсолютное значение числа
Math.exp(x)
//Возвращает ex, где e – основание натуральных логарифмов.

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

/*Директива continue прекращает выполнение текущей итерации цикла.
Она – в некотором роде «младшая сестра» директивы break: прерывает не весь цикл, а только текущее выполнение его тела, как будто оно закончилось.
Её используют, если понятно, что на текущем повторе цикла делать больше нечего.*/
//Например, цикл ниже использует continue, чтобы не выводить чётные значения:

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
//Метка имеет вид "имя:", имя должно быть уникальным. Она ставится перед циклом, вот так:
//можем переместить метку на отдельную строку:
outer:
for (let i = 0; i < 3; i++) { ... }

//Вызов to break/continue возможен только из цикла, и метка должна находиться где-то выше директивы.
//Вызов break outer ищет ближайший внешний цикл с такой меткой и переходит в его конец.

/*=======================================================================================*/

/*Functions*/

//Функция с пустым return или без него возвращает undefined

/*--Создание функций--*/
// создавать функцию полностью «на лету» из строки, вот так:
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

/*--Function Declaration--*/
function showMessage() {
  alert( 'Hello everyone!' );
}

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello
//функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.

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



/*#------------[[Scope]]------------*/

//При создании функция получает скрытое свойство [[Scope]], которое ссылается на лексическое окружение, в котором она была создана.
sayHi.[[Scope]] = window
//При создании функции с использованием new Function, её свойство [[Scope]] ссылается не на текущий LexicalEnvironment, а на window.

/*--Значение по умолчанию в функции--*/
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}


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

//В rest попадёт массив всех аргументов, начиная с третьего.
//rest – настоящий массив, с методами map, forEach и другими, в отличие от arguments.


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

// то же, что обычный вызов func(a, b...), но с явно указанным this(=context).
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
var g = f.bind("Context");
setTimeout(user.sayHi.bind(user), 1000); // аналог через встроенный метод
//Методы call/apply вызывают функцию с заданным контекстом и аргументами.
//А bind не вызывает функцию. Он только возвращает «обёртку», которую мы можем вызвать позже, и которая передаст вызов в исходную функцию, с привязанным контекстом.

//Привязать всё: bindAll
for (var prop in user) {
  if (typeof user[prop] == 'function') {
    user[prop] = user[prop].bind(user);
  }
}

/*--NFE--*/
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

var f = function sayHi(name) {
  alert( sayHi ); // изнутри функции - видно (выведет код функции)
};

alert( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')
//Внутреннее имя позволяет функции надёжно обращаться к самой себе, где бы она ни находилась.
//Попробуем перенести её в другую переменную g:
function f(n) {
  return n ? n * f(n - 1) : 1;
};

var g = f;
f = null;

alert( g(5) ); // запуск функции с новым именем - ошибка при выполнении!

//Для того, чтобы функция всегда надёжно работала, объявим её как Named Function Expression:
 var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;

alert( g(5) ); // 120, работает!

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


/*#------------eval------------*/
//позволяет выполнить код, переданный ей в виде строки.
 eval(' alert(a) '); // 2

 //возвращает последнее вычисленное выражение, например:
 alert( eval('1+1') ); // 2

 //Параметры по умолчанию
 function showMenu(title = "Без заголовка", width = 100, height = 200) {
  alert(title + ' ' + width + ' ' + height);
}

//Параметры по умолчанию могут быть не только значениями, но и выражениями.
function sayHi(who = getCurrentUser().toUpperCase()) {
  alert('Привет, ' + who);
}

/*#------------Деструктуризация в параметрах------------*/
function showMenu({title, width, height}) {
  alert(title + ' ' + width + ' ' + height); // Меню 100 200
}

function showMenu({title="Заголовок", width:w=100, height:h=200}) {
  alert(title + ' ' + w + ' ' + h);
}

//чтобы функция могла быть вызвана вообще без аргументов 
function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
  alert(title + ' ' + w + ' ' + h);
}


/*=======================================================================================*/

/*Objects*/
//Зарезервированные слова допускаются как имена свойств

/*--создание объектов--*/

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

//создаёт новый объект с указанными объектом прототипа и свойствами.
Object.create(Shape.prototype);

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

let user = {
  name: "John",
  age: 30
};
// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}

/*--Object.assign--*/

//получает список объектов и копирует в первый target свойства из остальных.
//При этом последующие свойства перезаписывают предыдущие.

Object.assign(dest, [src1, src2, src3...])
//Аргументы dest и src1, ..., srcN(могут быть сколько угодно) являются объектами.
//Копирует свойства всех объектов src1, ..., srcNв dest. Другими словами, свойства всех аргументов, начиная со второго, копируются в первый. Тогда это возвращается dest.
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }

// user <- visitor <- admin
alert( JSON.stringify(user) ); // name: Вася, visits: true, isAdmin: true
//для 1-уровневого клонирования объекта:
let user = { name: "Вася", isAdmin: false };
// clone = пустой объект + все свойства user
let clone = Object.assign({}, user);


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



var keys = Object.keys(user);
alert( keys ); // name, age

let name = "Вася";
let user = {
  name,
  // вместо "sayHi: function() {...}" пишем "sayHi() {...}"
  sayHi() {
    alert(this.name);
  }
};

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

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

//флаги
/*В нём могут быть следующие поля:

value – значение свойства, по умолчанию undefined
writable – значение свойства можно менять, если true. По умолчанию false.
configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
enumerable – если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
get – функция, которая возвращает значение свойства. По умолчанию undefined.
set – функция, которая записывает значение свойства. По умолчанию undefined.*/
//Чтобы избежать конфликта, запрещено одновременно указывать значение value и функции get/set. Либо значение, либо функции для его чтения-записи, одно из двух. Также запрещено и не имеет смысла указывать writable при наличии get/set-функций.

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

 var user = {
  firstName: "Вася",
  surname: "Петров"
}

Object.defineProperty(user, "fullName", {
  get: function() {
    return this.firstName + ' ' + this.surname;
  },
   set: function(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
});

alert(user.fullName); // Вася Петров
//Если мы создаём объект при помощи синтаксиса { ... }, то задать свойства-функции можно прямо в его определении.
var user = {
  firstName: "Вася",
  surname: "Петров",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
};

//Позволяет объявить несколько свойств сразу:
Object.defineProperties(user, {
  firstName: {
    value: "Петя"
  },

  surname: {
    value: "Иванов"
  },

  fullName: {
    get: function() {
      return this.firstName + ' ' + this.surname;
    }
  }
});


//возвращает только enumerable-свойства.
var obj = {
  a: 1,
  b: 2,
  internal: 3
};
alert( Object.keys(obj) ); // a,b

//возвращает все:
alert( Object.getOwnPropertyNames(obj) ); // a, b, internal

Reflect.owmKeys(user) //возвращает в том числе символы

//Возвращает дескриптор для свойства obj[prop].
var obj = {
  test: 5
};
var descriptor = Object.getOwnPropertyDescriptor(obj, 'test');

// заменим value на геттер, для этого...
delete descriptor.value; // ..нужно убрать value/writable
delete descriptor.writable;
descriptor.get = function() { // и поставить get
  alert( "Preved :)" );
};

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

//При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
//Свойство prototype имеет смысл только у конструктора
//Свойство с именем prototype можно указать на любом объекте, но особый смысл оно имеет, лишь если назначено функции-конструктору.
//Само по себе, без вызова оператора new, оно вообще ничего не делает, его единственное назначение – указывать __proto__ для новых объектов.

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true

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

//Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

alert( rabbit.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit

alert( rabbit.hasOwnProperty('eats') ); // false: eats не принадлежит

//Object.create(null)
var data = Object.create(null);
//не имеет прототипа, а значит в нём нет лишних свойств

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
//Эта возможность бывает полезна, когда, получив объект, мы не знаем в точности, какой у него был конструктор (например, сделан вне нашего кода), а нужно создать такой же.

// при перезаписи гарантировать наличие constructor вручную:
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

//Иногда функцию-конструктор объявляют и тут же используют, вот так:

var animal = new function() {
  this.name = "Васька";
  this.canWalk = true;
};

/*--прототип конструкторов--*/

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
alert( Rabbit.prototype.constructor == Rabbit ); // true

//ровно такой же – генерируется автоматически.
function Rabbit(name) {
  this.name = name;
  alert( name );
}
//Наследование в наших классах
Rabbit.prototype.__proto__ = Animal.prototype;

// в IE10- задаём наследование
Rabbit.prototype = Object.create(Animal.prototype); //присваивается сразу после объявления конструктора, иначе он перезатрёт уже записанные в прототип методы.
Rabbit.prototype.constructor = Rabbit;

//Вызов конструктора родителя
function Rabbit(name) {
  Animal.apply(this, arguments);
}

//Расширить метод родителя
 Rabbit.prototype.run = function() {
   // вызвать метод родителя, передав ему текущие аргументы
   Animal.prototype.run.apply(this, arguments);
   this.jump();
 }


/*--классы--*/

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// нельзя вызывать без new, будет ошибка.
// видно только в текущем блоке и только в коде, который находится ниже объявления (Function Declaration видно и до объявления).

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

//Если у потомка свой constructor, то, чтобы в нём вызвать конструктор родителя – используется синтаксис super() с аргументами для родителя.

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


/*=======================================================================================*/

/*Map*/
//В Map допускаются ключи любого типа.

//Map – коллекция для хранения записей вида ключ:значение.
//В отличие от объектов, в которых ключами могут быть только строки, в Map ключом может быть произвольное значение, например:

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

//В качестве ключей map можно использовать и объекты:
let user = { name: "Вася" };
// для каждого пользователя будем хранить количество посещений
let visitsCountMap = new Map();
// объект user является ключом в visitsCountMap
visitsCountMap.set(user, 123);
alert( visitsCountMap.get(user) ); // 123

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

weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);
weakMap.set('Katya', 4); //Будет ошибка TypeError: "Katya" is not a non-null object

alert( weakMap.get(activeUsers[0]) ); // 1

activeUsers.splice(0, 1); // Вася более не активный пользователь

// weakMap теперь содержит только 2 элемента

activeUsers.splice(0, 1); // Петя более не активный пользователь

// weakMap теперь содержит только 1 элемент
//Таким образом, WeakMap избавляет нас от необходимости вручную удалять вспомогательные данные, когда удалён основной объект.

/*У WeakMap есть ряд ограничений:

Только объекты в качестве ключей.
Нет свойства size.
Нельзя перебрать элементы итератором или forEach.
Нет метода clear().*/

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

//WeakSet – особый вид Set, не препятствующий сборщику мусора удалять свои элементы. То же самое – WeakMap для Map.
//То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.
//Если поместить такие данные в WeakMap, а объект сделать ключом, то они будут автоматически удалены из памяти, когда удалится элемент.
// текущие активные пользователи

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

let start = Date.now(); //возвращает текущую метку времени. Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)

//С таймзоной -07:00 GMT:
 var ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert( ms ); // 1327611110417 (число миллисекунд)

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
d.setDate(1); // поставить первое число месяца
d.setDate(0); // нулевого числа нет, будет последнее число предыдущего месяца
d.setDate(-1); // предпоследнее число предыдущего месяца
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

/*--Автоисправление--*/
var d = new Date(2013, 0, 32); // 32 января 2013 ?!?
alert(d); // ... это 1 февраля 2013!

var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);

alert( d ); // 2 марта, 2011

//получим дату на 70 секунд большую текущей:

 var d = new Date();
d.setSeconds(d.getSeconds() + 70);

alert( d ); // выведет корректную дату

/*--Форматирование и вывод дат--*/

var date = new Date(2014, 11, 31, 12, 30, 0);

var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM

//без локализации:

toString(), toDateString(), toTimeString() //Возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. 

var d = new Date();
alert( d.toString() ); // вывод, похожий на 'Wed Jan 26 2011 16:40:50 GMT+0300'

toUTCString() //То же самое, что toString(), но дата в зоне UTC.

toISOString() //Возвращает дату в формате ISO

var d = new Date();

alert( d.toISOString() ); // вывод, похожий на '2011-01-26T13:51:50.417Z'

/*=======================================================================================*/

/*JSON*/

/*--stringify--*/
// превращает объекты в строку в формате JSON, используется, когда нужно из JavaScript передать данные по сети.
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

//Обработка ошибок

throw new Error(‘Unknown direction ’ + direction + ‘. Valid directions are between 0..’ + NAMES.length) // выведет в консоль новое сформированное сообщение об ошибке

//Обработка исключений

try{  
console.log(JSON.parse(xhr.responseText))   
}
catch (err){      // если ошибка произошла
  console.error(err.message); 
}
//Создается объект err
err.name //имя ошибки

//JSONP - способ отправки callback через запрос | JSON with Padding (с набивкой) | способ загрузки данных из JS, который вызывает заранее определенную функцию.

//Создается элемент скрипт и вставляется на страницу с вызовом функций.

function addScript(src) {
  var elem = document.createElement("script");
  elem.src = src;
  document.head.appendChild(elem);
}

addScript('user?id=123');

//Пример работы с двумя файлами

//Файл data.js
window.__jsonpCallback([
{“name”: “object 1”},
{“name”: “object 2”},
{“name”: “object 3”}
])

//Файл main.js
var renderItem = function (item){
var dataDiv = document.createElement(‘div’);
datadiv.textContent = item.name;
document.body.appendChild(dataDiv);
}

window.__jsonpCallback = function(data) {
  for(var i = 0; i < data.length; i++){
    renderItem(data[i]);
}
}

var loader = document.createElement(‘script’);
loader.src=’data.js’;
document.body.append(loader);

/*=======================================================================================*/

/*Таймеры*/

/*--setTimeout--*/
//позволяет запускать функцию один раз после интервала времени.

let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
/*Параметры:

func/code
Функция или строка кода для исполнения. Строка поддерживается для совместимости, использовать её не рекомендуется.
delay
Задержка в миллисекундах, 1000 миллисекунд равны 1 секунде.
arg1, arg2…
Аргументы, которые нужно передать функции.*/

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


/*#------------Рекурсивный setTimeout------------*/

var timerId = setTimeout(function tick() {
  alert( "тик" );
  timerId = setTimeout(tick, 2000);
}, 2000);
//Рекурсивный setTimeout – более гибкий метод тайминга, чем setInterval, так как время до следующего выполнения можно запланировать по-разному, в зависимости от результатов текущего.


console.time(метка) // включить внутренний хронометр браузера с меткой.
console.timeEnd(метка) // выключить внутренний хронометр браузера с меткой и вывести результат.

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

/*#------------Оборачивание исключений------------*/

function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("Ошибка в URI", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Синтаксическая ошибка в данных", e);
    } else {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}

/*=======================================================================================*/

/*Promise*/
//Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

/*--создание Promise--*/
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")

  // В ней можно делать любые асинхронные операции,
  // А когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке
});

//изначально state - pending
resolve(value) // указать, что работа успешно завершена:
/*устанавливает state на "fulfilled",
устанавливает result в value.*/

reject(error) // чтобы указать, что произошла ошибка:
/*устанавливает state на "rejected",
устанавливает result в error.*/

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(onFulfilled, onRejected)

//onFulfilled – функция, которая будет вызвана с результатом при resolve.
//onRejected – функция, которая будет вызвана с ошибкой при reject.

//Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected) можно написать .catch(onRejected) – это то же самое.

//Если в функции промиса происходит синхронный throw (или иная ошибка), то вызывается reject:
 'use strict';

let p = new Promise((resolve, reject) => {
  // то же что reject(new Error("o_O"))
  throw new Error("o_O");
})

p.catch(alert); // Error: o_O


// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);

/*--catch--*/

//для перехвата только ошибок
promise.catch(alert); // shows "Error: Whoops!" after 1 second
//либо
.then(null, errorHandlingFunction)

/*--finally Promise--*/

new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)); // <-- .then handles the result

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready"))
  .catch(err => alert(err));  // <-- .catch handles the error object

/*--цепочка Promise--*/

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
}).then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});

//по цепочке передается сразу, если возвращаемое значение не Promise

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  alert(result); // 1
  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) { // (**)
  alert(result); // 2
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) {
  alert(result); // 4
});

/*--fetch Promise--*/
fetch('/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when we finish downloading it
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", isAdmin: true}
  });

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => alert(user.name)); // iliakan

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));

/*--error Promise--*/

//Обработчик (*)ловит ошибку и просто не может ее обработать (например, он знает, как ее обработать URIError), поэтому он выдает ее снова:

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* never runs here */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way

});
//Затем выполнение прыгает с первого .catch (*)на следующий (**)по цепочке.

/*--ответы с серваера Promise--*/

class HttpError extends Error { // (1)
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
function loadJson(url) { // (2)
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}
loadJson('no-such-user.json') // (3)
  .catch(alert); // HttpError: 404 for .../no-such-user.json


function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err; // (*)
      }
    });
}
demoGithubUser();

/*--встроенные методы Promise--*/

let promise = Promise.resolve(value); //Возвращает разрешенное обещание с учетом value.
let promise = new Promise(resolve => resolve(value));

let promise = Promise.reject(error); //Создает отклоненное обещание с error.
let promise = new Promise((resolve, reject) => reject(error));

PromiseState // состояние, вначале «pending».
PromiseResult // результат, при создании значения нет.
PromiseFulfillReactions // список функций-обработчиков успешного выполнения.
PromiseRejectReactions// список функций-обработчиков ошибки.*/

let promise = Promise.all([...promises...]); // подождать, пока все обещания будут готовы.
//
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
//
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];
// map every url to the promise fetch(github url)
let requests = urls.map(url => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
//
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

//Promise.all(iterable)
//получает массив (или другой итерируемый объект) промисов и возвращает промис, который ждёт, пока все переданные промисы завершатся, и переходит в состояние «выполнено» с массивом их результатов.
Promise.all(requests)
  .then(responses => {
    // all responses are ready, we can show HTTP status codes
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }
    return responses;
  })
  // map array of responses into array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));
/*Если какое-либо из обещаний отклонено, Promise.allнемедленно отклоняется с этой ошибкой.

Например:*/

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!

//Promise.race(iterable)
// как и Promise.all, получает итерируемый объект с промисами, которые нужно выполнить, и возвращает новый промис.
let promise = Promise.race(iterable);
//он принимает итерацию обещаний, но вместо того, чтобы ждать завершения всех из них, он ждет первого результата (или ошибки) и продолжает с ним.
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

/*#------------Promise.resolve------------*/

//Promise.resolve(value)
/*создаёт успешно выполнившийся промис с результатом value.

Он аналогичен конструкции:*/

new Promise((resolve) => resolve(value))

//используют, когда хотят построить асинхронную цепочку, и начальный результат уже есть.

 Promise.resolve(window.location) // начать с этого значения
  .then(httpGet) // вызвать для него httpGet
  .then(alert) // и вывести результат

/*#------------Promise.reject------------*/

//Promise.reject(error)
//создаёт уже выполнившийся промис, но не с успешным результатом, а с ошибкой error.

 Promise.reject(new Error("..."))
  .catch(alert) // Error: ...

/*--async  Promise--*/

// функция всегда возвращает обещание. Даже если функция на самом деле возвращает значение без обещания, добавление определения функции с ключевым словом «async» заставляет JavaScript автоматически переносить это значение в разрешенное обещание.
async function f() {
  return 1;
}
f().then(alert); // 1


async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}
f();

let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);

/*--асинхронные методы Promise--*/

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}
new Waiter()
  .wait()
  .then(alert); // 1

/*--await  Promise--*/

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait till the promise resolves (*)
  alert(result); // "done!"
}
f();
//Выполнение функции «останавливается» в строке (*)и возобновляется после выполнения обещания, resultстановясь его результатом. 
//
async function showAvatar() {
  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();
  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);
  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();
  return githubUser;
}
showAvatar();

/*=======================================================================================*/

/*Генераторы*/

//новый вид функций в современном JavaScript. Они отличаются от обычных тем, что могут приостанавливать своё выполнение, возвращать промежуточный результат и далее возобновлять его позже, в произвольный момент времени.

//возвращает специальный объект, называемый «генератор».
//код такой функции не выполняется. Вместо этого она возвращает специальный объект, который как раз и называют «генератором».
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

//next()
//При вызове он возобновляет выполнение кода до ближайшего ключевого слова yield. По достижении yield выполнение приостанавливается, а значение – возвращается во внешний код:
let generator = generateSequence();
let one = generator.next(); //1
alert(JSON.stringify(one)); // {value: 1, done: false}
//done: false если код еще не закончен, в противном случае true.

for(let value of generator) {
  alert(value); // 1, then 2
}

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let sequence = [0, ...generateSequence()];
alert(sequence); // 0, 1, 2, 3

/*--генераторы передача значений--*/

function* gen() {
  let ask1 = yield "2 + 2?";

  alert(ask1); // 4

  let ask2 = yield "3 * 3?"

  alert(ask2); // 9
}

let generator = gen();

alert( generator.next().value ); // "2 + 2?"

alert( generator.next(4).value ); // "3 * 3?"

alert( generator.next(9).done ); // true

/*--generator.throw--*/

function* generate() {
  let result = yield "2 + 2?"; // Error in this line
}

let generator = generate();

let question = generator.next().value;

try {
  generator.throw(new Error("The answer is not found in my database"));
} catch(e) {
  alert(e); // shows the error
}

/*--асинхронные генераторы--*/

async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // yay, can use await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, then 2, then 3, then 4, then 5
  }

})();


async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github requires user-agent header
    });

    const body = await response.json(); // (2) parses response as JSON (array of commits)

    // (3) the URL of the next page is in the headers, extract it
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage && nextPage[1];

    url = nextPage;

    for(let commit of body) { // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}

/*#------------Композиция генераторов------------*/
function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {
    yield i;
  }

}

// Используем оператор … для преобразования итерируемого объекта в массив
let sequence = [...generateSequence(2,5)];

alert(sequence); // 2, 3, 4, 5



function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

/*=======================================================================================*/

/*модули*/
/*Ключевое слово export можно ставить:

перед объявлением переменных, функций и классов.
отдельно, при этом в фигурных скобках указывается, что именно экспортируется.*/

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export {sayHi as hi, sayBye as bye};

export default class Animal{

}

// 📁 main.js
import {sayHi} from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // Hello, John!

import {user} from './user.js';
document.body.innerHTML = user; // John

import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');

import {sayHi as hi, sayBye as bye} from './say.js';
hi('John'); // Hello, John!
bye('John'); // Bye, John!

let modulePath = prompt("Module path?");
import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, no such module?>)
  //
/*  <!doctype html>
<script>*/
  async function load() {
    let say = await import('./say.js');
    say.hi(); // Hello!
    say.bye(); // Bye!
    say.default(); // Module loaded (export default)!
  }
/*</script>
<button onclick="load()">Click me</button>*/


//<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
//</script>

/*#------------Модули------------*/
module foo from "foo";
module bar from "bar";

console.log(
  bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO

////////////////////////////////////////////////////////////////

/*#proxy*/

//особый объект, смысл которого – перехватывать обращения к другому объекту и, при необходимости, модифицировать их.

let proxy = new Proxy(target, handler)
/*target – объект, обращения к которому надо перехватывать.
handler – объект с «ловушками»: функциями-перехватчиками для операций к target.*/

/*#------------get/set------------*/

/*get(target, property, receiver)
Срабатывает при чтении свойства из прокси. Аргументы:
target – целевой объект, тот же который был передан первым аргументом в new Proxy.
property – имя свойства.
receiver – объект, к которому было применено присваивание. Обычно сам прокси, либо прототипно наследующий от него. Этот аргумент используется редко.
set(target, property, value, receiver)
Срабатывает при записи свойства в прокси.

Аргументы:

target – целевой объект, тот же который был передан первым аргументом в new Proxy.

property – имя свойства.

value – значение свойства.

receiver – объект, к которому было применено присваивание, обычно сам прокси, либо прототипно наследующий от него.

Метод set должен вернуть true, если присвоение успешно обработано и false в случае ошибки (приведёт к генерации TypeError).

Пример с выводом всех операций чтения и записи:*/

'use strict';

let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    alert(`Чтение ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    alert(`Запись ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});

proxy.firstName = "Ilya"; // запись

proxy.firstName; // чтение

alert(user.firstName); // Ilya

/*#------------has------------*/
//Ловушка has срабатывает в операторе in и некоторых других случаях, когда проверяется наличие свойства.
let dictionary = {
  'Hello': 'Привет'
};

dictionary = new Proxy(dictionary, {
  has(target, phrase) {
    return true;
  }
});

alert("BlaBlaBla" in dictionary); // true

/*#------------deleteProperty------------*/
//Ловушка deleteProperty по синтаксису аналогична get/has.
//Срабатывает при операции delete, должна вернуть true, если удаление было успешным.

let dictionary = {
  'Hello': 'Привет'
};

let proxy = new Proxy(dictionary, {
  deleteProperty(target, phrase) {
    return true; // ничего не делаем, но возвращает true
  }
});

// не удалит свойство
delete proxy['Hello'];

alert("Hello" in dictionary); // true

// будет то же самое, что и выше
// так как нет ловушки has, операция in сработает на исходном объекте
alert("Hello" in proxy); // true

//apply
/*Если аргумент target прокси – функция, то становится доступна ловушка apply для её вызова.

Метод apply(target, thisArgument, argumentsList) получает:

target – исходный объект.
thisArgument – контекст this вызова.
argumentsList – аргументы вызова в виде массива.
Она может обработать вызов сама и/или передать его функции.*/

'use strict';

function sum(a, b) {
  return a + b;
}

let proxy = new Proxy(sum, {
  // передаст вызов в target, предварительно сообщив о нём
  apply: function(target, thisArg, argumentsList) {
    alert(`Буду вычислять сумму: ${argumentsList}`);
    return target.apply(thisArg, argumentsList);
  }
});

// Выведет сначала сообщение из прокси,
// а затем уже сумму
alert( proxy(1, 2) );

/*#------------construct------------*/
//Ловушка construct(target, argumentsList) перехватывает вызовы при помощи new.
function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

let UserProxy = new Proxy(User, {
  // передаст вызов new User, предварительно сообщив о нём
  construct: function(target, argumentsList) {
    alert(`Запуск new с аргументами: ${argumentsList}`);
    return new target(...argumentsList);
  }
});

let user = new UserProxy("Ilya", "Kantor");

alert( user.name ); // Ilya

/*#------------Другие методы------------*/
/*getPrototypeOf – перехватывает обращение к методу getPrototypeOf.
setPrototypeOf – перехватывает обращение к методу setPrototypeOf.
isExtensible – перехватывает обращение к методу isExtensible.
preventExtensions – перехватывает обращение к методу preventExtensions.
getOwnPropertyDescriptor – перехватывает обращение к методу getOwnPropertyDescriptor.
defineProperty – перехватывает обращение к методу defineProperty.
has – перехватывает проверку существования свойства, которая используется в операторе in и в некоторых других методах встроенных объектов.
get – перехватывает чтение свойства.
set – перехватывает запись свойства.
deleteProperty – перехватывает удаление свойства оператором delete.
enumerate – срабатывает при вызове for..in или for..of, возвращает итератор для свойств объекта.
ownKeys – перехватывает обращения к методу getOwnPropertyNames.
apply – перехватывает вызовы target().
construct – перехватывает вызовы new target().
Каждый перехватчик запускается с handler в качестве this. Это означает, что handler кроме ловушек может содержать и другие полезные свойства и методы.

Каждый перехватчик получает в аргументах target и дополнительные параметры в зависимости от типа.

Если перехватчик в handler не указан, то операция совершается, как если бы была вызвана прямо на target.*/

/*=======================================================================================*/

/*window*/

/*--события window--*/

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


window.onload = function() {
    alert('Page loaded');

    // image is loaded at this time
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };

window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});

window.onscroll 


window.addEventListener("unload", function() {
  navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
};

//Если посетитель инициировал переход на другую страницу или нажал «закрыть окно», то обработчик onbeforeunload может приостановить процесс и спросить подтверждение.
 window.onbeforeunload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };

  //Когда человек уходит со страницы или закрывает окно
 window.onunload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };

  onresize

/*--размеры и скроллинг узлов в Window--*/

window.innerWidth/innerHeight // хранят текущий размер окна браузера. игнорируют наличие полосы прокрутки.
//игнорируйте полосу прокрутки.

alert('Current scroll from the top: ' + window.pageYOffset);
alert('Current scroll from the left: ' + window.pageXOffset);

scrollBy(x,y) //прокручивает страницу относительно ее текущей позиции. Например, scrollBy(0,10)прокручивает страницу 10pxвниз.
window.scrollBy (0,10)

scrollTo(pageX,pageY) //прокручивает страницу относительно верхнего левого угла документа. Это как установка scrollLeft/scrollTop.
//Чтобы прокрутить до самого начала, мы можем использовать scrollTo(0,0).

win.moveBy(x,y)//Перемещает окно относительно текущего положения на x пикселей вправо и y пикселей вниз. Допускаются отрицательные значения.
win.moveTo(x,y)//Передвигает окно в заданную координатами x и y точку экрана монитора.
win.resizeBy(width,height)//Изменяет размер окна на заданную величину width/height (ширина/высота). Допускаются отрицательные значения.
win.resizeTo(width,height)//Изменяет размер окна на заданное значение.

 alert( "Браузер находится на " + window.screenX + "," + window.screenY );

 /*--методы window--*/

//Метод для открытия нового окна
// открыть новое окно/вкладку с URL http://ya.ru 
window.open('http://ya.ru');
window.open(‘about:blank’,’’,’width=300, height=300’) // открыть с параметрами
var w = window.open(‘about:blank’,’’,’width=300, height=300’)// ссылка на открытое
w.document.write("Привет, мир!");

win = window.open(url, name, params)
/*url URL для загрузки в новое окно.
name Имя нового окна. Может быть использовано в параметре target в формах. Если позднее вызвать window.open() с тем же именем, то браузеры (кроме IE) заменяют существующее окно на новое.
params Строка с конфигурацией для нового окна. Состоит из параметров, перечисленных через запятую. Пробелов в ней быть не должно.*/

//Свойства окна:
menubar (yes/no) //Скрыть или показать строку меню браузера.
toolbar (yes/no) //Показать или скрыть панель навигации браузера (кнопки назад, вперед, обновить страницу и остальные) в новом окне.
location (yes/no) //Показать/скрыть поле URL-адреса в новом окне. По умолчанию Firefox и IE не позволяют скрывать строку адреса.
status (yes/no) //Показать или скрыть строку состояния. С другой стороны, браузер может в принудительном порядке показать строку состояния.
resizable (yes/no) //Позволяет отключить возможность изменять размеры нового окна. Значение no обычно неудобно посетителям.
scrollbars (yes/no) //Разрешает убрать полосы прокрутки для нового окна. Значение no обычно неудобно посетителям.


 w.focus //передать фокус окну
w.blur() // убрать фокус с окна
w.closed // вернет булево
w.close // закрыть окно
.moveTo(200,300)
.moveBy(200,300)
.resizeTo(200,300)
.resizeBy(200,300)

/*=======================================================================================*/

/*document*/



/*=======================================================================================*/

/*DOM*/

/*--навигация по DOM--*/

var headings = document.evaluate("/html/body//h2", document, null, XPathResult.ANY_TYPE, null); 

// последний выбранный элемент доступен как
$0.style.background = 'red'
$("#айди_одного")
$$("div")

document.documentElement //<html>
document.body //<body>
document.head //<head>

document.documentURI //возвращает строку с текущим адресом документа.

document.links // выбрать все ссылки
document.images

document.body.childNodes.length // предоставляет доступ ко всем дочерним узлам, включая текстовые узлы.
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild



 // parent of <body> is <html>
  alert( document.body.parentNode === document.documentElement ); // true

  // after <head> goes <body>
  alert( document.head.nextSibling ); // HTMLBodyElement

  // before <body> goes <head>
  alert( document.body.previousSibling ); // HTMLHeadElement

alert( document.documentElement.parentElement ); // null Родительский элемент.

document.documentElement.children // только те дочерние элементы, которые являются узлами элемента.
document.documentElement.firstElementChild, document.documentElement.lastElementChild // первый и последний элемент детей.
document.documentElement.previousElementSibling, document.documentElement.nextElementSibling // соседние элементы.

var elCount = Node.childElementCount; //возвращает число дочерних элементов узла.

var result = nodeA.compareDocumentPosition(nodeB); //предоставляет одновременно информацию и о содержании и об относительном порядке элементов.

/*Возвращаемое значение – битовая маска (см. Побитовые операторы), биты в которой означают следующее:

Биты  Число Значение
000000  0   nodeA и nodeB -- один и тот же узел
000001  1   Узлы в разных документах (или один из них не в документе)
000010  2   nodeB предшествует nodeA (в порядке обхода документа)
000100  4   nodeA предшествует nodeB
001000  8   nodeB содержит nodeA
010000  16  nodeA содержит nodeB
100000  32  Зарезервировано для браузера
*/
//Понятие «предшествует» – означает не только «предыдущий сосед при общем родителе», но и имеет более общий смысл: "раньше встречается в порядке прямого обхода дерева документа.

  // 1. <ul> находится после <p>
  alert( ul.compareDocumentPosition(p) ); // 2 = 10

  // 2. <p> находится до <ul>
  alert( p.compareDocumentPosition(ul) ); // 4 = 100

  // 3. <ul> родитель <li>
  alert( ul.compareDocumentPosition(li) ); // 20 = 10100

  // 4. <ul> потомок <body>
  alert( ul.compareDocumentPosition(document.body) ); // 10 = 1010
/*Узлы не вложены один в другой, поэтому стоит только бит «предшествования», отсюда 10.
То же самое, но обратный порядок узлов, поэтому 100.
Здесь стоят сразу два бита: 10100 означает, что ul одновременно содержит li и является его предшественником, то есть при прямом обходе дерева документа сначала встречается ul, а потом li.
Аналогично предыдущему, 1010 означает, что document.body содержит ul и предшествует ему.*/
//Проверить конкретное условие, например, "nodeA содержит nodeB", можно при помощи битовых операций, в данном случае: 
nodeA.compareDocumentPosition(nodeB) & 16

/*<table>*/

table.rows // коллекция <tr>элементов таблицы.
table.caption/tHead/tFoot // ссылки на элементы <caption>, <thead>, <tfoot>.
table.tBodies // набор <tbody>элементов (может быть много по стандарту).
<thead>, <tfoot>,<tbody> //Элементы обеспечивают rowsсвойство:

tbody.rows // коллекция <tr>изнутри

/*<tr>*/

tr.cells // коллекция <td>и <th>клетки внутри данного <tr>.
tr.sectionRowIndex // положение (индекс) данного <tr>внутри корпуса <thead>/<tbody>/<tfoot>.
tr.rowIndex // номер <tr>таблицы в целом (включая все строки таблицы).

/*<td>и <th>:*/

td.cellIndex //номер ячейки внутри ограждения <tr>.

/*<div id="elem">
  <div id="elem-content">Element</div>
</div>
<script>*/
  alert(elem); // DOM-element with id="elem"
  alert(window.elem); // accessing global variable like this also works
  // for elem-content things are a bit more complex
  // that has a dash inside, so it can't be a variable name
  alert(window['elem-content']); // ...but accessible using square brackets [...]
/*</script>*/

 let elem = document.getElementById('elem');

 elem.querySelector(css)
 let elements = document.querySelectorAll('ul > li:last-child');

  alert(chapter.closest('.book')); // ищет ближайшего предка, который соответствует CSS-селектору

elem.getElementsByTagName(tag) //ищет элементы с данным тегом и возвращает их коллекцию. tagПараметр может также быть звездой "*"для «любых тегов».

// получить все элементы документа
document.getElementsByTagName('*');
// получить всех потомков элемента elem:
elem.getElementsByTagName('*');

elem.getElementsByClassName(className) //возвращает элементы, которые имеют данный класс CSS.
document.getElementsByName(name) //возвращает элементы с заданным nameатрибутом, для всего документа. очень редко используется.

//Результаты поиска getElementsBy* – живые! При изменении документа – изменяется и результат запроса. результат запросов getElementsBy* – это не массив, а специальный объект, имеющий тип NodeList или HTMLCollection. Он похож на массив, так как имеет нумерованные элементы и длину, но внутри это не готовая коллекция, а «живой поисковой запрос».

 /*--проверка наличия в DOM--*/

 elem.hasChildNodes() //для проверки наличия дочерних узлов.

// проверяет на соответствие данному CSS-селектор. 
 if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }

/*--вид узлов в DOM--*/

console.dir(elem) //показывает элемент в виде объекта DOM, хорошо для изучения его свойств.

elem.nodeType == 1 //для узлов элементов,
elem.nodeType == 3 //для текстовых узлов,
elem.nodeType == 9 //для объекта документа,
 let elem = document.body;
  // let's examine what it is?
  alert(elem.nodeType); // 1 => element
  // and the first child is...
  alert(elem.firstChild.nodeType); // 3 => text
  // for the document object, the type is 9
  alert( document.nodeType ); // 9


alert( document.body.nodeName ); // BODY
alert( document.body.tagName ); // BODY

/*--содержание узлов в DOM--*/

document.body.innerHTML = 'The new BODY!'; // replace it
chatDiv.innerHTML += "How goes?";

alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>

/*<body>
  Hello
  <!-- Comment -->
  <script>*/
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
/*  </script>
</body>*/

value = node.nodeValue; //возвращает или устанавливает значение текущего узла.

 alert(news.textContent); //Обеспечивает доступ к тексту внутри элемента: только текст, минус все <tags>.

 link.innerText = 'grapes'; //это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков.

//textContent получает содержимое всех элементов, включая <script> и <style>, тогда как innerText этого не делает. innerText умеет считывать стили и не возвращает содержимое скрытых элементов, тогда как textContent этого не делает. Метод innerText позволяет получить CSS, а textContent — нет.



 /*--стили узлов в DOM--*/

/* <div hidden>With the attribute "hidden"</div>
<div id="elem">JavaScript assigned the property "hidden"</div>
<script>*/
  elem.hidden = true;
/*</script>*/

alert(div.style); // [object CSSStyleDeclaration]
  alert(div.style.color); // red

elem.style.left = left; // e.g '123px'
elem.style.top = top; // e.g '456px'

elem.style.backgroundColor
elem.style.zIndex
elem.style.borderLeftWidth
elem.style.width
 document.body.style.margin = '20px';
alert(document.body.style.marginTop); // 20px
    alert(document.body.style.marginLeft); // 20px

document.body.style.display = "none"; // hide
setTimeout(() => document.body.style.display = "", 1000); // back to normal

div.style.cssText=`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

element.style.height = `${element.scrollHeight}px`;

document.body.style.overflow = "hidden". 

style.position.left/top

lastDiv.hidden = true; //предусмотрен специальный атрибут и свойство для отображения элементов
elem.style.borderLeftWidth
elem.style.cssFloat

elem.style.width="" //сбросить поставленный стиль

elem.style.display = "none"

document.body.style.overflow = "hidden".

//с префиксом

button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';

//currentStyle

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem, "") : elem.currentStyle;
}

//getComputedStyle

var style = window.getComputedStyle(element [, pseudoElt]);

let computedStyle = getComputedStyle(document.body);
// now we can read the margin and the color from it
alert( computedStyle.marginTop ); // 5px
alert( computedStyle.color ); // rgb(255, 0, 0)

//добраться до псевдоэлементов
var computedStyle = getComputedStyle(document.body); //Для того, чтобы получить текущее используемое значение свойства
var result = getComputedStyle(h3, ':after').content;
var result = getComputedStyle(h3, ':after').getPropertyValue('color');


/*--свойства и методы узлов в DOM--*/

//если тег есть 
<body id="page">// то объект DOM имеет 
body.id="page".

document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator

document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)

//currentScript
if (document.currentScript.async) {
  console.log("Executing asynchronously");
} else {
  console.log("Executing synchronously");
}

/*--атрибуты узлов в DOM--*/

/*<body id="body" type="...">
  <input id="input" type="text">
  <script>*/
    alert(input.type); // text
    alert(body.type); // undefined: DOM property not created, because it's non-standard
/*  </script>
</body>*/

alert(elem.type); // "text"
  alert(elem.id); // "elem"
  alert(elem.value); // value

 alert( 'свойство:' + a.href );  // полный URL

elem.hasAttribute(name) // проверяет существование.
elem.getAttribute(name) // получает значение.
elem.setAttribute(name, value) // устанавливает значение.
elem.removeAttribute(name) // удаляет атрибут.

elem.attributes //коллекция объектов
input.toggleAttribute("readonly"); //Метод Element интерфейса переключает логический атрибут (удаление его , если он присутствует , и добавление его , если его нет) на данном элементе.

//Их имя не чувствительно к регистру (так idже, как ID).

alert(input.checked); // the property value is: true

/*<body data-about="Elephants">
<script>*/
  alert(document.body.dataset.about); // Elephants
/*</script>*/

/*--классы узлов в DOM--*/

div.className = "alert alert-success";

alert(document.body.className); // main page

elem.classList.add/remove("class") - добавляет / удаляет класс.
elem.classList.toggle("class") - если класс существует, то удаляет его, в противном случае добавляет его.
elem.classList.contains("class")- возвращает true/false, проверяет данный класс.
parent.contains(child);  //Возвращает true, если parent содержит child или parent == child.
//является итеративным, поэтому мы можем перечислить все классы

/*--изменение DOM--*/

//создание элемента
let div = document.createElement('div');

//создание текстового узла
let textNode = document.createTextNode('Here I am');

var fragment = document.createDocumentFragment(); //чтобы вставить пачку узлов единовременно

//вставка элемента в ДОМ
document.body.appendChild(div);

parentElem.insertBefore(node, nextSibling)
//Вставляет nodeперед nextSiblingв parentElem.
list.insertBefore(newLi, list.children[1]);
list.insertBefore(newLi, list.firstChild);

parentElem.replaceChild(node, oldChild)
//Заменяет oldChildс nodeсреди детей parentElem.

node.append(...nodes or strings)// добавлять узлы или строки в конце node,
node.prepend(...nodes or strings)// вставьте узлы или строки в начало node,
node.before(...nodes or strings)//вставьте узлы или строки перед node,
node.after(...nodes or strings)//вставьте узлы или строки после node,
node.replaceWith(...nodes or strings)// заменяет nodeна заданные узлы или строки.

div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
div.insertAdjacentHTML('afterend', '<p>Bye</p>');

"beforebegin"// вставьте htmlперед elem,
"afterbegin"// вставить htmlв elemначале
"beforeend"//вставить htmlв elemконце
"afterend"// вставить htmlпосле elem.

elem.insertAdjacentText(where, text)// тот же синтаксис, но строка textвставляется «как текст» вместо HTML,
elem.insertAdjacentElement(where, elem) // тот же синтаксис, но вставляет элемент.

//клонировнаие

 let div2 = div.cloneNode(true); // clone the message
 true //создает «глубокий» клон элемента со всеми атрибутами и подэлементами
 false //то клон будет сделан без дочерних элементов.

 //DocumentFragment
/* <ul id="ul"></ul>

<script>*/
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
/*</script>*/

//удаление

parentElem.removeChild(node) //Удаляет nodeиз parentElem(при условии, что это ребенок).
node.remove() //Удаляет nodeсо своего места.

document.write('<b>Hello from JS</b>');

document.open() //открывает поток документа
document.write('<span> </span>'); //Пишет строку в поток документа, открытый с помощью document.open().
//работает только пока HTML-страница находится в процессе загрузки
//дописывает текст в текущее место HTML ещё до того, как браузер построит из него DOM.
.close() // закрыть поток

document.writeln(str)  //добавляет после str символ перевода строки "\n".

/*--размеры и скроллинг узлов в DOM--*/

/*<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
  </article>
</main>
<script>*/
  alert(example.offsetParent.id); // main
  alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
  alert(example.offsetTop); // 180
/*</script>*/

function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}

clientLeft = 25 // ширина левой границы
clientTop = 25 // ширина верхней границы
clientWidth/clientHeight // ширина / высота содержимого, включая отступы, но без полосы прокрутки.

clientWidth/clientHeight //учитывают только видимую часть элемента.
scrollWidth/scrollHeight //также включают прокрученные (скрытые) части:

scrollLeft/scrollTop //можно изменить
elem.scrollTop += 10.

elem.scrollIntoView(top) //прокрутке страницы, чтобы сделать elemвидимым. У него есть один аргумент:

top=true //(это по умолчанию), то страница будет прокручиваться, чтобы elemпоявиться в верхней части окна. Верхний край элемента выровнен с верхом окна.
top=false // то страница прокручивается, чтобы elemпоявиться внизу. Нижний край элемента выровнен с нижней частью окна.

/*--координаты узлов в DOM--*/

elem.getBoundingClientRect().top

top // Y-координата для верхнего края элемента,
left // X-координата для левого края элемента,
right // X-координата для правого края элемента,
bottom //Y-координата для края нижнего элемента.

  var rects = elt.getClientRects(); // возвращает коллекцию DOMRectобъектов , которые указывают ограничивающие прямоугольники для каждого пограничного поле CSS в клиенте.

let elem = document.elementFromPoint(x, y); //возвращает наиболее вложенный элемент в координатах окна (x, y).

let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;
let elem = document.elementFromPoint(centerX, centerY);

/*=======================================================================================*/

/*События*/

/*--События мыши--*/

click // когда мышь щелкает по элементу (устройства с сенсорным экраном генерируют его одним касанием).
contextmenu // когда мышь щелкает правой кнопкой мыши на элементе.
mouseover/ mouseout // когда курсор мыши появляется / покидает элемент.
mousedown/ mouseup // когда кнопка мыши нажата / отпущена над элементом.
mousemove // когда мышь перемещается.
dblclick //Пуски после двойного щелчка по элементу
mouseenter/mouseleave //похожи mouseover/mouseout. Но есть два отличия: 1.Переходы внутри элемента не учитываются 2.События mouseenter/mouseleaveне пузырились.

Переходы внутри элемента не учитываются.
События mouseenter/mouseleaveне пузырились.

event.which == 1 // левая кнопка
event.which == 2 // средняя кнопка
event.which == 3 //правая кнопка

event.altKey
event.shiftKey
event.ctrlKey
event.metaKey //( Cmdдля Mac)

event.clientX
event.clientY
event.pageX
event.pageY

//Для mouseover:
event.target // это элемент, где мышка подошла.
event.relatedTarget // это элемент, из которого пришла мышь ( relatedTarget→ target).

//Для mouseoutобратного:
event.target // это элемент, оставленный мышью.
event.relatedTarget //это новый элемент под указателем, который оставлен мышью для ( target→ relatedTarget).

//для отмены выделения при двойном клике
<b ondblclick="getSelection().removeAllRanges()">

/*методы объекта Selection:

Свойство anchorNode вернет контейнер, в котором начинается выделение. Замечу, что началом выделения считается та граница, от которой вы начали выделение. То есть, если вы выделяете справа налево, то началом будет именно правая граница. Это правило работает везде, кроме браузера Opera, в котором anchorNode вернет ссылку на узел левого края выделения.
Свойство anchorOffset вернет смещение для начала выделения в пределах контейнера anchorNode.
Свойства focusNode и focusOffset работают аналогично для фокусных точек, то есть точек окончания выделения. Opera и здесь отличилась, возвращает вместо фокусной точки узел правого края выделения.
Свойство rangeCount возвращает число объектов Range, которые входят в полученное выделение. Это свойство полезно при использовании метода addRange.
Метод getRangeAt принимает в качестве аргумента индекс объекта Range и возвращает сам объект. Если rangeCount == 1, то работать будет только getRangeAt(0). Таким образом, мы можем получить объект Range, полностью соответствующий текущему выделению.
Метод collapse сворачивает выделение в точку (каретку). Методу можно передать в качестве первого аргумента узел, в который нужно поместить каретку.
Метод extend принимает в качестве аргументов ссылку на контейнер и смещение (parentNode, offset), и перемещает фокусную точку в это положение.
Метод collapseToStart (collapseToEnd) перемещает фокусную (начальную) границу к начальной (фокусной), тем самым сворачивая выделение в каретку.
Метод selectAllChildren принимает в качестве единственного аргумента ссылку на узел и добавляет всех его потомков в выделение.
Метод addRange принимает в качестве аргумента объект Range и добавляет его в выделение. Таким образом можно увеличить количество объектов Range, число которых нам подскажет свойство rangeCount.
Метод removeRange (removeAllRanges) удаляет переданный (все) объект Range из выделения.
Метод toString вернет текстовое содержимое выделения.*/

/*--События элемента формы--*/

submit// когда посетитель подаёт <form>.
focus// когда посетитель фокусируется на элементе, например, на <input>.

/*--События клавиатуры--*/

keydown и keyup // когда посетитель нажимает, а затем отпускает кнопку.

  event.key //  z (В нижнем регистре), Shift
  event.code //KeyZ , ShiftRight или же ShiftLeft

// event.type должен быть keypress
function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}


window.addEventListener(“keydown”, function(evt) {
  if(evt.keyCode === 27){
    // код ...
}
})

event.repeat //true или false

/*--События документа--*/

DOMContentLoaded // когда HTML загружен и обработан, DOM полностью построен.
load // загружается не только HTML, но и все внешние ресурсы: изображения, стили и т. Д.
beforeunload/unload // пользователь покидает страницу.

document.addEventListener("DOMContentLoaded", ready);

if (document.readyState == 'loading') {
  // loading yet, wait for the event
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!
  work();
}

"loading" // документ загружается.
"interactive" // документ был полностью прочитан.
"complete" // документ полностью прочитан и все ресурсы (например, изображения) также загружены.

//событие колеса
wheel

document.addEventListener('readystatechange', () => console.log(document.readyState));

/*--CSS события--*/

transitionend // когда заканчивается CSS-анимация.

/*--события on--*/

<input value="Click me" onclick="alert('Click!')" type="button">
//<input value="Нажми меня" onclick="alert('Клик!')" type="button">
//<input type="button" onclick="countRabbits()" value="Считать кроликов!"/>
//<input type="text" onfocus="this.value = 'Фокус!'" value="Кликни меня">
//<input onkeydown="this.nextSibling.innerHTML = event.keyCode"> <b></b>
//<input onkeypress="this.nextSibling.innerHTML = getChar(event)+''"><b></b>

elem.onclick = function() {
    alert('Thank you');
  };

//для предотвращения копирования
  <div oncopy="alert('Copying forbidden!');return false">

/*--addEventListener--*/

element.addEventListener(event, handler[, options]);
event //Название события, например "click".
handler //Функция обработчика.
options //Дополнительный необязательный объект со свойствами:
once: //если true, то слушатель автоматически удаляется после срабатывания.
capture: //этап обработки события, который будет рассмотрен позже в главе « Пузыри и захваты» . По историческим причинам optionsтакже может быть false/true, это так же, как {capture: false/true}.
passive: // если true, тогда обработчик не будет preventDefault(),

onprogress
event.loaded
event.total 
.lengthComputable

function handler() {
  alert( 'Thanks!' );
}

input.addEventListener("click", handler);
// ....
input.removeEventListener("click", handler);

 elem.addEventListener("transitionend", function() {
    alert("addEventListener"); // shows up when the animation finishes
  });

//Чтобы поймать событие на этапе захвата
 elem.addEventListener(..., true)

/*--объект event--*/

elem.onclick = function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };

event.type //Тип события, вот оно "click".
event.currentTarget //Элемент, который обработал событие. Это точно так же, как this, если обработчик не является функцией стрелки или thisне связан с чем-то другим, тогда он event.currentTargetстановится полезным.
event.clientX / event.clientY //Относительные к окну координаты курсора для событий мыши.
event.target // это «целевой» элемент, который инициировал событие, он не изменяется в процессе барботирования.
event.eventPhase //которое сообщает нам номер фазы, на которой было зафиксировано событие

 layerX, offsetX, pageX

 this.value = event.pageX+':'+event.pageY

//остановить всплытие события
event.stopPropagation()

event.returnValue = bool;
var bool = event.returnValue;

elem.onclick = function(event) {
  // Do cool things here
  event.cancelBubble = true;
}

event.defaultPrevented //true если действие по умолчанию было предотвращено, и в falseпротивном случае.
elem.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Button context menu");
  };

  document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    alert("Document context menu");
  };


//остановить всплытие всех событий
event.stopImmediatePropagation()

/* <a href="/" onclick="return false">Нажми здесь</a>
или
<a href="/" onclick="event.preventDefault()">здесь</a>*/

event.preventDefault() //отменяет действия по умолчанию

/*поймать событие на стадии перехвата, нужно использовать третий аргумент addEventListener:

Если аргумент true, то событие будет перехвачено по дороге вниз.
Если аргумент false, то событие будет поймано при всплытии.*/
 elems[i].addEventListener("click", highlightThis, true);

/*--Конструктор событий--*/
//

let event = new Event(event type[, options]);

type// может быть любой строкой, подобной "click"или нашей собственной "hey-ho!".

options // объект с двумя необязательными свойствами:

bubbles: true/false// если true, то событие пузырится.
cancelable: true/false// если true, тогда «действие по умолчанию» может быть предотвращено. Позже мы увидим, что это означает для пользовательских событий.
//По умолчанию оба ложь: {bubbles: false, cancelable: false}.

let event = new Event("click");
  elem.dispatchEvent(event);

event.isTrusted //отличить реальное нажатие от программного


/*isTrusted: false – означает, что событие сгенерировано скриптом, это свойство изменить невозможно.
target: null – это свойство ставится автоматически позже при dispatchEvent.
type: тип события – первый аргумент new Event.
bubbles, cancelable – по второму аргументу new Event.*/


//Конструкторы

/*UIEvent
FocusEvent
MouseEvent
WheelEvent
KeyboardEvent
CompositionEvent*/

/*Специфический конструктор позволяет указать стандартные свойства для данного типа события.

Например, clientX/clientY для события мыши:*/
let event = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX); // 100


 elem.addEventListener("hello", function(event) {
    alert(event.detail.name);
  });

//Для генерации своих, нестандартных, событий, хоть и можно использовать конструктор Event, но существует и специфический конструктор CustomEvent.
  elem.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "John" }
  }));
//Технически, он абсолютно идентичен Event, кроме небольшой детали: у второго аргумента-объекта есть дополнительное свойство detail, в котором можно указывать информацию для передачи в событие.

function hide() {
    let event = new CustomEvent("hide", {
      cancelable: true // without that flag preventDefault doesn't work
    });
    if (!rabbit.dispatchEvent(event)) {
      alert('the action was prevented by a handler');
    } else {
      rabbit.hidden = true;
    }
  }


/*=======================================================================================*/

/*формы*/

/*--Навигация по форме--*/

document.forms.my // the form with name="my"
document.forms[0] // the first form in the document

 // get the element
  let elem = form.elements.one; // <input name="one"> element

let ageElems = form.elements.age;
alert(ageElems[0].value); // 10, the first input value

  form.login.name = "username"; // change the name of the input

/*--select--*/

select.options// коллекция <option>элементов,
select.value // стоимость выбранного варианта,
select.selectedIndex // номер выбранного варианта.
select.length // количество option
select.selectedIndex.text // текст выбранного
select.selectedIndex.value // значение выбранного
select.type // тип селекта
select.selectedIndex = 0; // первая опция
//Установка selectedIndex = -1 очистит выбор.

select.options[2].selected = true;

option = new Option(text, value, defaultSelected, selected);

text // текст внутри опции,
value // стоимость опциона,
defaultSelected// если true, то selectedатрибут создан,
selected// если true, то опция выбрана.

for (var i = 0; i < select.options.length; i++) {
  var option = select.options[i];
  if(option.selected) {
    alert( option.value );
  }
}

let option = new Option("Text", "value", true, true);

option = new Option(text, value, defaultSelected, selected);
var option = new Option("Текст", "value");
var option = new Option("Текст", "value", true, true);
/*text – содержимое,
value – значение,
defaultSelected и selected поставьте в true, чтобы сделать элемент выбранным.*/
//Создание нового option
var text = “HTML”, value =’5’, defaultSelected = false, selected = true;
var option = new Option(text, value, defaultSelected, selected ) - параметры необязательные
option.text = HTML;

//Добавление option в конец списка
select.add(option, null)
select.appendChild(newOption);

//Вставить перед другим
select.add(option, select.options[1])

/*У элементов option также есть особые свойства, которые могут оказаться полезными (см. the option element):

selected
выбрана ли опция
index
номер опции в списке селекта
text
Текстовое содержимое опции (то, что видит посетитель).*/

/*--События формы--*/


//change

//<input type="text" onchange="alert(this.value)">

//всплывают
form.onfocusin = onFormFocus;
form.onfocusout = onFormBlur;

input.onblur = function() {
  if (!input.value.includes('@')) { // not email
    input.classList.add('invalid');
    error.innerHTML = 'Please enter a correct email.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};

form.addEventListener("focusin", () => form.classList.add('focused'));
  form.addEventListener("focusout", () => form.classList.remove('focused'));

//установить / снять фокус на элементе.

elem.focus()
elem.blur()

<input type="text" onchange="alert(this.value)">



// каждый раз , когда значение изменяется.
input.oninput = function() {
    result.innerHTML = input.value;
  };

input.oncut = input.oncopy = input.onpaste = function(event) {
    alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
    return false;
  };


form.submit() //позволяет инициировать отправку формы из JavaScript. 

//input[type-file]

//FileReader

//Data URL
//data:,Hello%2C%20World  - по протоколу data | можно закодировать картинку в base64, скрипты, html

var FILE_TYPES = [‘gif’, ‘jpg’, ‘jpeg’, ‘png’]
var fileChooser = document.querySelector(‘.upload input[type=file]’);
var preview =  document.querySelector(‘.setup-user-src’);

fileChooser.addEventListener(‘change’, function(){
  var file = fileChooser.files[0];  - коллекция всех файлов
  var fileName = file.name.toLowerCase();

var matches = FILE_TYPES.some(function(it){  // проверка файлов на соответствие типу
  return fileName.endsWith(it);
})
  if(matches){
    var reader = new FileReader();    // объект читает содержимое файла

    reader.addEventListener(‘load’, function(){
    preview.src = reader.result;
   });
reader.readAsDataURL(file);  // читает содержимое этим методом
}
});

.defaultValue // возвращает дефолтное значение

/*--валидация формы--*/

.validity // описывает валидно ли поле прямо сейчас, если нет, то почему
.onvalid

if (input.validity.tooshort/tooLong/valueMissing) {
  input.setCustomValidity(‘сообщение’)
}

input.validity = {  
  valid: false // Поле валидно
  customError: false // Установленно специальное сообщение ошибки
  patternMismatch: false // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
  rangeOverflow: false // Значение превосходит атрибут max
  rangeUnderflow: true // Значение меньше атрибута min
  stepMismatch: true // Значение не соответствует указаному шагу
  tooLong: false // Значение слишком длинное
  tooShort: false // Значение слишком короткое
  typeMismatch: false // Значение не соответствует указаному атрибуту type
  valueMissing: false // Отсутствует обязательное значение
};



////////////////////////////////////////////////////////////////

/*#navigator*/

navigator.userAgent //содержит информацию о браузере
navigator.platform //содержит информацию о платформе, позволяет различать Windows/Linux/Mac

////////////////////////////////////////////////////////////////

/*#location*/

alert( location.href ); // выведет текущий адрес

Location.username; //содержащий имя пользователя, указанное перед именем домена.
Location.toString() //содержащий URL целиком.
Location.search //содержащий '?' с последующими параметрами URL.
Location.hash //содержащий '#' с последующим идентификатором.
Location.host //содержащий хост, а именно имя хоста, ':' и порт.
Location.hostname //содержащий домен текущего URL.
Location.href //содержащий URL целиком. При изменении, соответствующий документ переходит на новую страницу.
Location.origin //содержащий протокол, хост и порт текущего URL.
Location.password //содержащий пароль, указанный перед именем домена.
Location.pathname //содержащий первый '/' после хоста с последующим текстом URL.
Location.port //содержащий номер порта текущего URL.
Location.protocol // содержащий протокол текущего URL, включая ':'.
// Перезагрузить текущую страницу, без использования кэша 
document.location.reload(true);
/*перезагружает ресурс из текущего URL
Единственный опциональный параметр Boolean, при значении true указывает, что страница должна быть перезагружена с сервера. Иначе браузер может загрузить страницу из кэша. Кроме того флаг forcedReload также может влиять на поведение скролла: обычная перезагрузка старается восстановить позицию, в то время как при включенном флаге при завершении загрузки DOM устанавливается scrollTop == 0.*/



// Перейти на статью Location.reload, заменив текущую страницу 
document.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload'); 
//заменяет текущий ресурс на новый по URL, указанному в качестве параметра. Отличие от assign() в том, что при использовании replace() текущая страница не будет сохранена в History, и пользователь не сможет использовать кнопку назад, чтобы вернуться к ней.

// Перейти на статью Location.reload 
document.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
//запускает загрузку и отображение нового документа по указанному URL.

////////////////////////////////////////////////////////////////

/*#screen*/

// общая ширина/высота
alert( screen.width + ' x ' + screen.height );

// доступная ширина/высота (за вычетом таскбара и т.п.)
alert( screen.availWidth + ' x ' + screen.availHeight );

screen.availTop
screen.availLeft
screen.colorDepth

////////////////////////////////////////////////////////////////

/*#localStorage*/

/*Хранить с формы данные локально:
<script>*/
      if (window.localStorage) {
        var elements = document.querySelectorAll('[name]');

        for (var i = 0, length = elements.length; i < length; i++) {
          (function(element) {
            var name = element.getAttribute('name');

            element.value = localStorage.getItem(‘name’);

            element.onkeyup = function() {
              localStorage.setItem(name, element.value);
            };
          })(elements[i]);
        }
      }
    //</script>

localStorage.setItem("name", "keks");
/*name- ключ,
keks - значение*/
localStorage.getItem(); //Получает значение ключа из хранилища. 
localStorage.setItem(); //Создаёт новую запись в хранилище. 
localStorage.removeItem(); //Удаляет запись из хранилища. 
localStorage.clear(); //Полностью очищает хранилище.

//Запросить из localStorage:

var storage = localStorage.getItem(“login”)

if (storage){
login.value = storage;
}

//Убедиться что локалсторедж существует:

try{
  storage = localStorage.getItem(“login”)
} catch (err) {
  isStorageSupport = false;
}


////////////////////////////////////////////////////////////////

/*#cookie*/

alert( document.cookie );

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.cookie = "userName=Vasya";

/*path=/mypath
Путь, внутри которого будет доступ к cookie. Если не указать, то имеется в виду текущий путь и все пути ниже него.

Как правило, используется path=/, то есть cookie доступно со всех страниц сайта.

domain=site.com
Домен, на котором доступно cookie. Если не указать, то текущий домен. Допустимо указывать текущий домен site.com и его поддомены, например forum.site.com.*/

var date = new Date(new Date().getTime() + 60 * 1000);
document.cookie = "name=value; path=/; expires=" + date.toUTCString();

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

/*Аргументы:

name //название cookie

value //значение cookie (строка)

options //Объект с дополнительными свойствами для установки cookie:

expires //ремя истечения cookie. Интерпретируется по-разному, в зависимости от типа:

Число // количество секунд до истечения. Например, expires: 3600 – кука на час.
Объект типа Date – дата истечения.
Если expires в прошлом, то cookie будет удалено.
Если expires отсутствует или 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
path //Путь для cookie.

domain //Домен для cookie.

secure //Если true, то пересылать cookie только по защищенному соединению.*/

function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}

if (!navigator.cookieEnabled) {
  alert( 'Включите cookie для комфортной работы с этим сайтом' );
}

////////////////////////////////////////////////////////////////

/*#Custom Elements*/

var timer = document.createElement('my-timer');

<script>
  // прототип с методами для нового элемента
  var MyTimerProto = Object.create(HTMLElement.prototype);
  MyTimerProto.tick = function() { // свой метод tick
    this.innerHTML++;
  };

  // регистрируем новый элемент в браузере
  document.registerElement("my-timer", {
    prototype: MyTimerProto
  });
</script>

<!-- теперь используем новый элемент -->
<my-timer id="timer">0</my-timer>

<script>
  // вызовем метод tick() на элементе
  setInterval(function() {
    timer.tick();
  }, 1000);
/*</script>*/

//Для расширения встроенных элементов у registerElement предусмотрен параметр extends

var MyTimerProto = Object.create(HTMLButtonElement.prototype);
  MyTimerProto.tick = function() {
    this.innerHTML++;
  };

  document.registerElement("my-timer", {
    prototype: MyTimerProto,
    extends: 'button'
  });

//  Прототип теперь наследует не от HTMLElement, а от HTMLButtonElement

////////////////////////////////////////////////////////////////

/*#Shadow DOM*/

/*<style>*/
input::-webkit-datetime-edit {
  background: red;
}
/*</style>*/

var root = elem.createShadowRoot();
root.innerHTML = "<p>Привет из подполья!</p>";

root.innerHTML = "<h3><content></content></h3> <p>Привет из подполья!</p>";
//В <content> атрибутом select можно указать конкретный селектор содержимого, которое нужно переносить. Например, <content select="h3"></content> перенесёт только заголовки.

 // создать новое дерево Shadow DOM для elem
  var root = elem.createShadowRoot();

  root.innerHTML = "<h3><content></content></h3> <p>Привет из подполья!</p> <hr>";
</script>

<script>
  // прочитать данные из Shadow DOM для elem
  var root = elem.shadowRoot;
  // Привет из подполья!
  document.write("<p>p:" + root.querySelector('p').innerHTML);
  // пусто, так как физически узлы - вне content
  document.write("<p>content:" + root.querySelector('content').innerHTML);

  /*--стили Shadow--*/

  <style>
  #elem::shadow span {
    /* для span только внутри Shadow DOM #elem */

    border-bottom: 1px dashed blue;
  }

  #elem >>> * {
    /* для всех элементов внутри Shadow DOM #elem и далее внутри input[type=date] */

    color: red;
  }
/*</style>*/

//:host выбирает элемент-хозяин, в котором, живёт Shadow DOM.

<style>
  :host > p {
    color: green;
  }
/*</style>*/

:host p {
  color: green;
}

:host(.important) p {
  color: red;
}

:host-context(h1) p {
  /* селектор сработает для p, если хозяин находится внутри h1 */
}

  ////////////////////////////////////////////////////////////////

  /*#template*/

<p id="elem">
  Доброе утро, страна!</p>

<template id="tmpl">
  <h3><content></content></h3>
  <p>Привет из подполья!</p>
  <script>
    document.write('...document.write:Новость!');
  </script>
</template>

<script>
  var root = elem.createShadowRoot();
  root.appendChild(tmpl.content.cloneNode(true));
/*</script>*/

  ////////////////////////////////////////////////////////////////

  /*#сеть*/

/*--XMLHttpRequest--*/

var xhr = new XMLHttpRequest();  - создание объекта для запроса на сервер

свойства XMLHttpRequest()
xhr.readyState - состояние запроса | UNSET:0, OPENED:1, HEADERS_RECEIVED:2, LOADING:3, DONE:4
xhr.open('GET', 'ссылка'); - метод, адрес
xhr.send() - отправка запроса
xhr.addEventListener(‘load’, function(){ }) - добавления обработчика события загрузки
xhr.addEventListener(‘error’, function(){ })  -  произошла ошибка соединения
xhr.timeout = 1000; - перезаписать свойство ожидания
xhr.addEventListener(‘timeout’, function(){ })  - запрос не успел выполниться за xhr.timeout мс

xhr.responseType = ‘json’   - задается перед отправкой
xhr.responseText; - текст с JSON ответом
xhr.response - отдаст сразу обработанный текст

/*--AJAX--*/

var request = new XMLHttpRequest();
    request.open('GET',location.href+'?ajax=1',true);
    request.addEventListener('readystatechange', function() {

        if ((request.readyState==4) && (request.status==200)) {

          var tableMatchcenter = document.querySelector('#block-system-main');
          tableMatchcenter.innerHTML = request.responseText;
          var tableArr = tableMatchcenter.querySelectorAll('.table-responsive');

          for(var i = 0; i<tableArr.length; i++){

            var table = tableArr[i].querySelector('.table-striped');
            table.classList.add('sticky-table');

          }

        }

    });

    request.send();


//Настроить: open
//Синтаксис:
xhr.open(method, URL, async, user, password)

/*method – HTTP-метод. Как правило, используется GET либо POST, хотя доступны и более экзотические, вроде TRACE/DELETE/PUT и т.п.

URL – адрес запроса. Можно использовать не только http/https, но и другие протоколы, например ftp:// и file://.

При этом есть ограничения безопасности, называемые «Same Origin Policy»: запрос со страницы можно отправлять только на тот же протокол://домен:порт, с которого она пришла. В следующих главах мы рассмотрим, как их можно обойти.

async – если установлено в false, то запрос производится синхронно, если true – асинхронно.

user, password – логин и пароль для HTTP-авторизации, если нужны.*/

xhr.send([body])


/*Основные свойства, содержащие ответ сервера:

status
HTTP-код ответа: 200, 404, 403 и так далее. Может быть также равен 0, если сервер не ответил или при запросе на другой домен.
statusText
Текстовое описание статуса от сервера: OK, Not Found, Forbidden и так далее.
responseText
Текст ответа сервера.
Есть и ещё одно свойство, которое используется гораздо реже:

responseXML
Если сервер вернул XML, снабдив его правильным заголовком Content-type: text/xml, то браузер создаст из него XML-документ. По нему можно будет делать запросы xhr.responseXml.querySelector("...") и другие.

Оно используется редко, так как обычно используют не XML, а JSON. То есть, сервер возвращает JSON в виде текста, который браузер превращает в объект вызовом JSON.parse(xhr.responseText).*/

// Синхронный запрос
xhr.open('GET', 'phones.json', false);

//Событие readystatechange

const unsigned short UNSENT = 0; // начальное состояние
const unsigned short OPENED = 1; // вызван open
const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
const unsigned short DONE = 4; // запрос завершён

//HTTP-заголовки

xhr.setRequestHeader('Content-Type', 'application/json');

//Повторные вызовы лишь добавляют информацию к заголовку, например:

xhr.setRequestHeader('X-Auth', '123');
xhr.setRequestHeader('X-Auth', '456');

// в результате будет заголовок:
// X-Auth: 123, 456

//Возвращает значение заголовка ответа name, кроме Set-Cookie и Set-Cookie2.
xhr.getResponseHeader('Content-Type')

xhr.timeout = 30000; // 30 секунд (в миллисекундах)

//При превышении этого времени запрос будет оборван и сгенерировано событие ontimeout:
xhr.ontimeout = function() {
  alert( 'Извините, запрос превысил максимальное время' );
}

/*Современная спецификация предусматривает следующие события по ходу обработки запроса:

loadstart – запрос начат.
progress – браузер получил очередной пакет данных, можно прочитать текущие полученные данные в responseText.
abort – запрос был отменён вызовом xhr.abort().
error – произошла ошибка.
load – запрос был успешно (без ошибок) завершён.
timeout – запрос был прекращён по таймауту.
loadend – запрос был завершён (успешно или неуспешно)

Используя эти события можно более удобно отслеживать загрузку (onload) и ошибку (onerror), а также количество загруженных данных (onprogress).*/

//чтобы сказать серверу, что это AJAX, добавляют специальный заголовок, например такой:

xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

//POST

/*В стандартных HTTP-формах для метода POST доступны три кодировки, задаваемые через атрибут enctype:

application/x-www-form-urlencoded
multipart/form-data
text-plain*/

xhr.open("POST", '/submit', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//для пересылки файлов используется другая кодировка: multipart/form-data.
<form action="/submit" method="POST" enctype="multipart/form-data">


//через XMLHttpRequest.
var data = {
  name: 'Виктор',
  surname: 'Цой'
};

var boundary = String(Math.random()).slice(2);
var boundaryMiddle = '--' + boundary + '\r\n';
var boundaryLast = '--' + boundary + '--\r\n'

var body = ['\r\n'];
for (var key in data) {
  // добавление поля
  body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + data[key] + '\r\n');
}

body = body.join(boundaryMiddle) + boundaryLast;

// Тело запроса готово, отправляем

var xhr = new XMLHttpRequest();
xhr.open('POST', '/submit', true);

xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  alert( this.responseText );
}

xhr.send(body);

/*Можно создать запрос, который сервер воспримет как загрузку файла.

Для добавления файла нужно использовать тот же код, что выше, модифицировав заголовки перед полем, которое является файлом, так:*/

Content-Disposition: form-data; name="myfile"; filename="pic.jpg"
Content-Type: image/jpeg
(пустая строка)
содержимое файла

 // создать объект для формы
  var formData = new FormData(document.forms.person);

  // добавить к пересылке ещё пару ключ - значение
  formData.append("patronym", "Робертович");

//  Чтобы браузер передал вместе с запросом куки и HTTP-авторизацию, нужно поставить запросу xhr.withCredentials = true:

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open('POST', 'http://anywhere.com/request', true)


/*Пример запроса COPY
Рассмотрим запрос COPY, который используется в протоколе WebDAV для управления файлами через HTTP:*/

var xhr = new XMLHttpRequest();

xhr.open('COPY', 'http://site.com/~ilya', true);
xhr.setRequestHeader('Destination', 'http://site.com/~ilya.bak');

xhr.onload = ...
xhr.onerror = ...

xhr.send();

/*Стадия закачки
На стадии закачки для получения информации используем объект xhr.upload. У этого объекта нет методов, он только генерирует события в процессе закачки. А они-то как раз и нужны.

Вот полный список событий:

loadstart
progress
abort
error
load
timeout
loadend*/

xhr.upload.onprogress = function(event) {
  alert( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );
}

xhr.upload.onload = function() {
  alert( 'Данные полностью загружены на сервер!' );
}

xhr.upload.onerror = function() {
  alert( 'Произошла ошибка при загрузке данных на сервер!' );
}

//
xhr.onprogress = function(event) {
  alert( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
}

//
//Форма для выбора файла с обработчиком submit:
document.forms.upload.onsubmit = function() {
    var input = this.elements.myfile;
    var file = input.files[0];
    if (file) {
      upload(file);
    }
    return false;
  }

function upload(file) {

  var xhr = new XMLHttpRequest();

  // обработчик для закачки
  xhr.upload.onprogress = function(event) {
    log(event.loaded + ' / ' + event.total);
  }

  // обработчики успеха и ошибки
  // если status == 200, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log("success");
    } else {
      log("error " + this.status);
    }
  };

  xhr.open("POST", "upload", true);
  xhr.send(file);

}

//дополнительно передать имя файла
var formData = new FormData();
formData.append("myfile", file);
xhr.send(formData);

var slice = file.slice(10, 100); // прочитать байты с 10-го по 99-й включительно

/*--encodeURIComponent--*/

alert( encodeURIComponent(' ') ); // %20
alert( encodeURIComponent('/') ); // %2F
alert( encodeURIComponent('В') ); // %D0%92
alert( encodeURIComponent('Виктор') ); // %D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80

// Передаём name и surname в параметрах запроса

var xhr = new XMLHttpRequest();

var params = 'name=' + encodeURIComponent(name) +
  '&surname=' + encodeURIComponent(surname);

xhr.open("GET", '/submit?' + params, true);

xhr.onreadystatechange = ...;

xhr.send();

/*--кросс-доменные запросы--*/

// (1)
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('GET', 'http://anywhere.com/request', true);

xhr.onload = function() {
  alert( this.responseText );
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();

/*--websocket--*/

var socket = new WebSocket("ws://javascript.ru/ws");

socket.onopen = function() {
  alert("Соединение установлено.");
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
  alert("Получены данные " + event.data);
};

socket.onerror = function(error) {
  alert("Ошибка " + error.message);
};

socket.send("Привет");

/*Описания заголовков:

GET, Host
Стандартные HTTP-заголовки из URL запроса
Upgrade, Connection
Указывают, что браузер хочет перейти на websocket.
Origin
Протокол, домен и порт, откуда отправлен запрос.
Sec-WebSocket-Key
Случайный ключ, который генерируется браузером: 16 байт в кодировке Base64.
Sec-WebSocket-Version
Версия протокола. Текущая версия: 13.*/


/*Заголовок Sec-WebSocket-Protocol: soap, wamp говорит о том, что по WebSocket браузер собирается передавать не просто какие-то данные, а данные в протоколах SOAP или WAMP («The WebSocket Application Messaging Protocol»). Стандартные подпротоколы регистрируются в специальном каталоге IANA.

Этот заголовок браузер поставит, если указать второй необязательный параметр WebSocket:*/
var socket = new WebSocket("ws://javascript.ru/ws", ["soap", "wamp"]);


/*--Server Side Events--*/

var eventSource = new EventSource("/events/subscribe");

eventSource.onmessage = function(e) {
  console.log("Пришло сообщение: " + e.data);
};

/*Событий всего три:

onmessage – пришло сообщение, доступно как event.data
onopen – при успешном установлении соединения
onerror – при ошибке соединения.*/

var eventSource = new EventSource('digits');

eventSource.onopen = function(e) {
  console.log("Соединение открыто");
};

eventSource.onerror = function(e) {
  if (this.readyState == EventSource.CONNECTING) {
    console.log("Соединение порвалось, пересоединяемся...");
  } else {
    console.log("Ошибка, состояние: " + this.readyState);
  }
};

eventSource.onmessage = function(e) {
  console.log("Пришли данные: " + e.data);
};

//Кросс-доменность
var source = new EventSource("http://pupkin.ru/stream", {
  withCredentials: true
});


/*--iframe--*/

// Окно из ифрейма
var iframeWin = iframe.contentWindow;

// Можно получить и через frames, если мы знаем имя ифрейма (и оно у него есть)
var iframeWin = window.frames[iframe.name];
iframeWin.parent == window; // parent из iframe указывает на родительское окно
window.frames[0] // доступ по номеру.

// Документ не будет доступен, если iframe с другого домена
var iframeDoc = iframe.contentWindow.document;

// newSrc - новый адрес
iframeDoc.location.replace(newSrc);

/*Наличие атрибута sandbox:

Заставляет браузер считать ифрейм загруженным с другого источника, так что он и внешнее окно больше не могут обращаться к переменным друг друга.
Отключает формы и скрипты в ифрейме.
Запрещает менять parent.location из ифрейма.*/

/*Атрибут sandbox может содержать через пробел список ограничений, которые не нужны:

allow-same-origin
Браузер будет считать документ в ифрейме пришедшим с другого домена и накладывать соответствующие ограничения на работу с ним. Если ифрейм и так с другого домена, то ничего не меняется.
allow-top-navigation
Разрешает ифрейму менять parent.location.
allow-forms
Разрешает отправлять формы из iframe.
allow-scripts
Разрешает выполнение скриптов из ифрейма. Но скриптам, всё же, будет запрещено открывать попапы.*/


function createIframe(name, src, debug) {
  src = src || 'javascript:false'; // пустой src

  var tmpElem = document.createElement('div');

  // в старых IE нельзя присвоить name после создания iframe
  // поэтому создаём через innerHTML
  tmpElem.innerHTML = '<iframe name="' + name + '" id="' + name + '" src="' + src + '">';
  var iframe = tmpElem.firstChild;

  if (!debug) {
    iframe.style.display = 'none';
  }

  document.body.appendChild(iframe);

  return iframe;
}

// Например: postToIframe('/vote', {mark:5}, 'frame1')

function postToIframe(url, data, target) {
  var phonyForm = document.getElementById('phonyForm');
  if (!phonyForm) {
    // временную форму создаем, если нет
    phonyForm = document.createElement("form");
    phonyForm.id = 'phonyForm';
    phonyForm.style.display = "none";
    phonyForm.method = "POST";
    document.body.appendChild(phonyForm);
  }

  phonyForm.action = url;
  phonyForm.target = target;

  // заполнить форму данными из объекта
  var html = [];
  for (var key in data) {
    var value = String(data[key]).replace(/"/g, "&quot;");
    // в старых IE нельзя указать name после создания input
    // поэтому используем innerHTML вместо DOM-методов
    html.push("<input type='hidden' name=\"" + key + "\" value=\"" + value + "\">");
  }
  phonyForm.innerHTML = html.join('');

  phonyForm.submit();
}

//postMessage

win.postMessage(data, targetOrigin).

/*Аргументы:

data Данные. По спецификации, это может быть любой объект, который будет клонирован с сохранением структуры при передаче.

Но IE поддерживает только строки, поэтому обычно данные JSON-сериализуют.

targetOrigin Разрешить получение сообщения только окнам с данного источника.

Мы ведь не можем из JavaScript узнать, на каком именно URL находится другое окно. Но иногда хочется быть уверенным, что данные передаются в доверенный документ. Для этого и нужен этот параметр. Проверку осуществляет браузер. При указании '*' ограничений нет.*/

win.postMessage("сообщение", "http://javascript.ru");

/*Чтобы получить сообщение, окно должно поставить обработчик на событие onmessage.

Свойства объекта события:

data
Присланные данные
origin
Источник, из которого пришло сообщение, например http://javascript.ru.
source
Ссылка на окно, с которого пришло сообщение. Можно тут же ответить.
*/

function listener(event) {
  if (event.origin != 'http://javascript.ru') {
    // что-то прислали с неизвестного домена - проигнорируем..
    return;
  }

  alert( "получено: " + event.data );
}

if (window.addEventListener) {
  window.addEventListener("message", listener);
} else {
  // IE8
  window.attachEvent("onmessage", listener);
}

/*--fetch--*/

let promise = fetch(url[, options]);
/*url – URL, на который сделать запрос,
options – необязательный объект с настройками запроса.
Свойства options:

method – метод запроса,
headers – заголовки запроса (объект),
body – тело запроса: FormData, Blob, строка и т.п.
mode – одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос.
credentials – одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом.
cache – одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кешировать запрос.
redirect – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки.*/

fetch('/article/fetch/user.json')
  .then(function(response) {
    alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
    alert(response.status); // 200

    return response.json();
   })
  .then(function(user) {
    alert(user.name); // iliakan
  })
  .catch( alert );

/*  Объект response кроме доступа к заголовкам headers, статусу status и некоторым другим полям ответа, даёт возможность прочитать его тело, в желаемом формате.

Варианты описаны в спецификации Body, они включают в себя:

response.arrayBuffer()
response.blob()
response.formData()
response.json()
response.text()*/