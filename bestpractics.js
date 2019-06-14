/*Вывод простых чисел*/

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert( i ); // a prime
  }
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}


/*сортировка*/

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr);  // 1, 2, 15

let arr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b; });
alert(arr);  // 1, 2, 15

arr.sort( (a, b) => a - b );

let range = {
  from: 1,
  to: 5
};

//Сортировка методом выбора от меньшего к большему

for (var i = 0; i <= usersByDay.length - 2; i++) {
  var minValue = usersByDay[i];

  for (var j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      var swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}

/*сравнение времени работы*/

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// run bench(upperSlice) and bench(upperLoop) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert( 'Total time for diffSubtract: ' + time1 );
alert( 'Total time for diffGetTime: ' + time2 );

/*#замер скорости*/

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f(arr);
  return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeIn = 0,
  timeLength = 0;
for (var i = 0; i < 100; i++) {
  timeIn += bench(walkIn);
  timeLength += bench(walkLength);
}

alert( 'Время walkIn: ' + timeIn + 'мс' );
alert( 'Время walkLength: ' + timeLength + 'мс' );

/*#таймер*/

//Функция debounce

var DEBOUNCE_INTERVAL = 300;

window.debounce = function(fun){
  var lastTimeout = null;
  
  return function(){
  var args = arguments;
  if(lastTimaout){
  window.clearTimeout(lastTimeout )
            }
  lastTimeout = window setTimeout (function(){
  fun.apply(null,args);
            }, DEBOUNCE_INTERVAL );
};
}




/*поиск максимума*/

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

alert( Math.max.apply(null, arr) ); // 5

var x = Math.min.apply(Math, arr) // запишет минимальное значение в массиве
arr.reduce(function(prev, item) { return Math.max(prev, item) })

//определить размер страницы с учетом прокрутки можно, взяв максимум из нескольких свойств:

 var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
alert( 'Высота с учетом прокрутки: ' + scrollHeight );

/*счетчик*/

function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1

/*Рекурсивный setTimeout*/

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

/*#декораторы*/

var timers = {};

// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator(f, timer) {
  return function() {
    var start = performance.now();

    var result = f.apply(this, arguments); // (*)

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;

    return result;
  }
}

// функция может быть произвольной, например такой:
var fibonacci = function f(n) {
  return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

// использование: завернём fibonacci в декоратор
fibonacci = timingDecorator(fibonacci, "fibo");

// неоднократные вызовы...
alert( fibonacci(10) ); // 55
alert( fibonacci(20) ); // 6765
// ...

// в любой момент можно получить общее количество времени на вызовы
alert( timers.fibo + 'мс' );

//проверку типа

// вспомогательная функция для проверки на число
function checkNumber(value) {
  return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        alert( "Некорректный тип аргумента номер " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

// пользуемся функцией как обычно
alert( sum(1, 2) ); // 3, все хорошо

// а вот так - будет ошибка
sum(true, null); // некорректный аргумент номер 0
sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1

//Декоратор проверки доступа

function checkPermissionDecorator(f) {
  return function() {
    if (isAdmin()) {
      return f.apply(this, arguments);
    }
    alert( 'Недостаточно прав' );
  }
}
//Использование декоратора:

function save() { ... }

save = checkPermissionDecorator(save);
// Теперь вызов функции save() проверяет права


/*Декоратор кэша*/

let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(3, 5) ); // works
alert( "Again " + worker.slow(3, 5) ); // same (cached)

/*итерируемый объект*/

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

/*сложная деструктуризация*/

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

/*#числа*/

//Проверка на число

function isNumeric(n) { 
return !isNaN(parseFloat(n)) && isFinite(n); 
}

//Вывод простых чисел

function showPrimes(n) { 
for (var i = 2; i < n; i++) { 
if (!isPrime(i)) continue; alert(i); // простое 
} } 
function isPrime(n) { 
for (var i = 2; i < n; i++) { 
if ( n % i == 0) return false; } 
return true; }

/*#строки*/

//Поиск всех вхождений
//Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Как только получаем очередную позицию – начинаем следующий поиск со следующей.

//Пример такого цикла:

 var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( foundPos ); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}
/*Такой цикл начинает поиск с позиции 0, затем найдя подстроку на позиции foundPos, следующий поиск продолжит с позиции pos = foundPos+1, и так далее, пока что-то находит.
Впрочем, тот же алгоритм можно записать и короче:*/

var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

//Побитовая проверка на вхождение

var str = "Widget";
if (~str.indexOf("get")) {
  alert( 'совпадение есть!' );
}

Number(String(i)[j]); // перебор символов в строке, пришедшей как число

/*поиск по строке*/
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

let str = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

let str = "Widget";
if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // works
}

/*#объекты*/

//Клонирование объектов

var user = {
  name: "Вася",
  age: 30
};

var clone = {}; // новый пустой объект

// скопируем в него все свойства user
for (var key in user) {
  clone[key] = user[key];
}

// теперь clone - полностью независимая копия
clone.name = "Петя"; // поменяли данные в clone

alert( user.name ); // по-прежнему "Вася"

//Копировать все свойства одного объекта в другой
function copy() { 
var dst = arguments[0]; 
for (var i = 1; i < arguments.length; i++) {
 var arg = arguments[i]; 
for (var key in arg) { 
dst[key] = arg[key]; 
} } 
return dst; }

/*#элементы*/

//перебрать в цикле элементы и присвоить всем класс

[].forEach.call(document.querySelectorAll(".story .link .highslide"), function(el){ el.classList.add("link link_ajax link_theme_normal", "story__image gw9wsja80d4pldi__image i-bem"); }); 

//плавно проскроллить
if(whereScroll() > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);

//точное определение высоты прокрутки
var scrollHeight = Math.max( document.body.scrollHeight, 
document.documentElement.scrollHeight, 
document.body.offsetHeight, 
document.documentElement.offsetHeight, 
document.body.clientHeight, 
document.documentElement.clientHeight ); 
alert( 'Высота с учетом прокрутки: ' + scrollHeight );

//Получение координат в документе
function getCoords(elem) { // кроме IE8- 
var box = elem.getBoundingClientRect(); 
return { 
top: box.top + pageYOffset, 
left: box.left + pageXOffset 
}; 
}

//Назначить один обработчик на много кнопок
function Menu(elem) { 
this.save = function() { 
alert( 'сохраняю' ); 
}; 
this.load = function() { 
alert( 'загружаю' ); 
}; 
this.search = function() { 
alert( 'ищу' ); 
}; 
var self = this; 
elem.onclick = function(e) {
 var target = e.target; 
var action = target.getAttribute('data-action'); 
if (action) { self[action](); 
} 
}; 
} 
new Menu(menu);

//Скрывать элемент по атрибуту

document.onclick = function(event) { 
var target = event.target; 
var id = target.getAttribute('data-toggle-id'); 
if (!id) return; 
var elem = document.getElementById(id); 
elem.hidden = !elem.hidden; };

/*#Получения символа в кейпресс*/

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

/*bindAll*/

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}

/*Promise*/

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('One more handler to do something else!'));

/*--функция обертка Promise--*/

// promisify(f, true) to get array of results
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // our custom callback for f
        if (err) {
          return reject(err);
        } else {
          // resolve with all callback results if manyArgs is specified
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
};

// usage:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...)

/*--генератор для итеративных последовательностей--*/

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let sequence = [...generateSequence(1,5)];

alert(sequence); // 1, 2, 3, 4, 5

/*--генератор вывод символов--*/

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

/*--позиция скролла--*/

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

alert('Full document height, with scrolled out part: ' + scrollHeight);

/*--делегировнаие в меню--*/

/*<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div>

<script>*/
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);
/*</script>*/


/*--делегировнаие mouseover/mouseout--*/

// <td> under the mouse right now (if any)
let currentElem = null;

table.onmouseover = function(event) {
  if (currentElem) {
    // before entering a new element, the mouse always leaves the previous one
    // if we didn't leave <td> yet, then we're still inside it, so can ignore the event
    return;
  }

  let target = event.target.closest('td');
  if (!target || !table.contains(target)) return;

  // yeah we're inside <td> now
  currentElem = target;
  target.style.background = 'pink';
};


table.onmouseout = function(event) {
  // if we're outside of any <td> now, then ignore the event
  if (!currentElem) return;

  // we're leaving the element -- where to? Maybe to a child element?
  let relatedTarget = event.relatedTarget;
  if (relatedTarget) { // possible: relatedTarget = null
    while (relatedTarget) {
      // go up the parent chain and check -- if we're still inside currentElem
      // then that's an internal transition -- ignore it
      if (relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }

  // we left the element. really.
  currentElem.style.background = '';
  currentElem = null;
};

/*#мышь*/

//Перетаскивание

avatar.addEventListener(“mousedown”, function(evt) {
  evt.preventDefault();

  var startCoords = {      // | запомнить текущие координаты по первому нажатию
    x: evt.clientX,
    y: evt.clientY
};

var onMouseMove = function (mouseEvt) {

  mouseEvt.preventDefault();
  
  var shift = {
    x: startCoords.x - moveEvt.clientX,
    y: startCoords.y - moveEvt.clientY,
           }
    startCoords = {       
    x: moveEvt.clientX,
      y: moveEvt.clientY
                  };
  
  block.style.top = (setup.offsetTop - shift.y) + ‘px’;
  block.style.left = (setup.offsetLeft - shift.x) + ‘px’;

};

var onMouseUp = function(upEvt) {
  upEvt.preventDefault();
  document.removeEventListener(“mousemove”, onMouseMove);
            document.removeEventListener(“mousemove”, onMouseUp);  

  if(dragged){
  var onClickPreventDefault = function(evt){
    evt.preventDefault();
    dialogHandler.removeEventListener(‘click’, onClickPreventDefault ) 
                };
  dialogHandler.addEventListener(‘click’, onClickPreventDefault );
            }
           };

document.addEventListener(“mousemove”, onMouseMove);   // | подписываюсь на перемещение
document.addEventListener(“mousemove”, onMouseUp);   // | подписываюсь на отжатие мыши
})

window.addEventListener('load',function() {}) -// ожидание загрузки страницы

form.addEventListener(‘submit’,function() {}) // событие отправки данные с формы
new FormData(form) // формирует массив данных введенных в форму

/*Drag'n'Drop с лучшим позиционированием:*/

ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

let currentDroppable = null; // potential droppable that we're flying over right now

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  ball.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  ball.hidden = false;

  // mousemove events may trigger out of the window (when the ball is dragged off-screen)
  // if clientX/clientY are out of the window, then elementfromPoint returns null
  if (!elemBelow) return;

  // potential droppables are labeled with the class "droppable" (can be other logic)
  let droppableBelow = elemBelow.closest('.droppable');

  if (currentDroppable != droppableBelow) { // if there are any changes
    // we're flying in or out...
    // note: both values can be null
    //   currentDroppable=null if we were not over a droppable (e.g over an empty space)
    //   droppableBelow=null if we're not over a droppable now, during this event

    if (currentDroppable) {
      // the logic to process "flying out" of the droppable (remove highlight)
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) {
      // the logic to process "flying in" of the droppable
      enterDroppable(currentDroppable);
    }
  }
}

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

ball.ondragstart = function() {
  return false;
};

/*--делегирование при движении мыши--*/

table.onmouseover = function(event) {
  if (currentElem) {
    // перед тем, как зайти в новый элемент, курсор всегда выходит из предыдущего
    //
    // если мы еще не вышли, значит это переход внутри элемента, отфильтруем его
    return;
  }

  // посмотрим, куда пришёл курсор
  var target = event.target;

  // уж не на TD ли?
  while (target != this) {
    if (target.tagName == 'TD') break;
    target = target.parentNode;
  }
  if (target == this) return;

  // да, элемент перешёл внутрь TD!
  currentElem = target;
  target.style.background = 'pink';
};


table.onmouseout = function(event) {
  // если курсор и так снаружи - игнорируем это событие
  if (!currentElem) return;

  // произошёл уход с элемента - проверим, куда, может быть на потомка?
  var relatedTarget = event.relatedTarget;
  if (relatedTarget) { // может быть relatedTarget = null
    while (relatedTarget) {
      // идём по цепочке родителей и проверяем,
      // если переход внутрь currentElem - игнорируем это событие
      if (relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }

  // произошло событие mouseout, курсор ушёл
  currentElem.style.background = '';
  currentElem = null;
};


////////////////////////////////////////////////////////////////

/*#графические компоненты*/

function Menu(options) {
  var elem;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = "menu";

    var titleElem = document.createElement('span');
    elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = options.title;

    elem.onmousedown = function() {
      return false;
    };

    elem.onclick = function(event) {
      if (event.target.closest('.title')) {
        toggle();
      }
    }

  }

  function renderItems() {
    var items = options.items || [];
    var list = document.createElement('ul');
    items.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    elem.appendChild(list);
  }

  function open() {
    if (!elem.querySelector('ul')) {
      renderItems();
    }
    elem.classList.add('open');
  };

  function close() {
    elem.classList.remove('open');
  };

  function toggle() {
    if (elem.classList.contains('open')) close();
    else open();
  };

  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
}


/*#случаные числа*/

//Базовая генерация

Math.random()
//0.19401081069372594
//Math.random() всегда возвращает число с плавающей точкой между 0 и 1.

//Технически, число, которое вы получите, может быть 0, но никогда не будет точно 1.

//Посколько это используется достаточно часто, Math.random() помещают внутрь функции

function getRandom() {
  return Math.random();
}
//Проблема, конечно, заключается в том, что функция всегда будет создавать случайное число в пределах очень ограниченного диапазона. Большинство других рецептов на этой странице предназначены для того, чтобы решить эту проблему.

//Генерация между числами: минимальные и максимальные значения
//Чтобы добавить эту функциональность, нам потребуется немного математики.


function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomFloat(11, 101)
//> 75.31898734299466

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(10, 20)
//> 12
//Случайное целое число в диапазоне, включая минимальное и максимальное.
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(1, 10)
//> 7
//Подбрасывание монеты(случайное true или false)
//Если вам нужно получить просто 0 или 1, то используйте следующий код:

function coinToss() {

  return Math.floor(Math.random() * 2);

}

coinToss();

//> 0
//Если нужно конкретно true или false

function coinToss() {
  return (Math.floor(Math.random() * 2) === 0);
}
coinToss();
//> true
//Если вам нужно ассоциировать любые слова со сторонами монеты

function coinFlip() {
  return (Math.floor(Math.random() * 2) === 0) ? "up" : "down";
}
coinToss();
//> up
//Генерация с исключениями
//Для ограниченного диапазона целых чисел: создайте массив чисел, которые вы бы хотели вырисовывать, и выберите из него случайное.

var numPool = [ 1, 3, 5, 7, 9, 10 ],
rand = numPool[Math.floor(Math.random() * numPool.length)];
//Для чего-нибудь более динамичного: добавьте массив целых чисел, которые вы хотите исключить, и пустой массив, который будет содержать результат фильтрации первого массива во второй.

var numPool = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var excludePool = [ 3, 4 ];
var filteredPool = [];
//Затем создайте цикл по массиву numPool, проверьте, есть ли случайное число в массиве исключений excludePool, и поместите результат в массив filteredPool:

for (var i = 0; i < numPool.length; i++) {
  if (excludePool.indexOf(numPool[i]) === -1) {
   filteredPool.push(numPool[i]);
  }
}
//Наконец, отобразите случайное число из отфильтрованного массива

var rand = filteredPool[Math.floor(Math.random() * filteredPool.length)];
//Генерация случайного, неповторяющегося числа
//Для небольших наборов чисел: создайте массив, заполненный элементами, перетасуйте их случайным образом, поместите результат в новый массив, затем достаньте перетасованные элементы один раз:

var numPool = [ 13, 21, 36, 14, 27, 10 ];

function shuffle(numPool) {
  for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
  return numPool;
};
var randomResult = shuffle(numPool);
while( randomResult.length > 0 ) {
  console.log( randomResult.pop() );
}
//Для более больших наборов чисел: создайте и заполните массив случайными целыми числами, отклоняя любое, которое уже было ранее сгенерировано:

var numReserve = []
while (numReserve.length < 12) {
  var randomNumber = Math.ceil(Math.random() * 1000);
  var found = false;
  for (var i = 0; i < numReserve.length; i++) {
  if (numReserve[i] === randomNumber){ 
   found = true;
   break;
  }
  }
  if (!found) { numReserve[numReserve.length]=randomNumber; }
}

//Генерация случайных чисел

Array.prototype.shuffle = function(){
  if(this.length==1) return this;
for(var j, x, i = this.length; i; j = Math.floor(Math.random()*i), x = this[--i], this[i] = this[j], this[j]=x);
  return this;
}

/*#округление*/

//Округление до заданной точности

var n = 3.456;
alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46


/*#анимация*/

function fade(elem, t){
  var fps = 50;
  var time = t || 500;
  var steps = time/fps;
  var op = 1;
  var d0= op/steps;

  var timer = setInterval(function(){
    op -= d0;
    elem.style.opacity = op;
    steps--;

    if(steps === 0){
      clearInterval(timer);
    }

  }, (1000/fps))
}


/*#валидация форм*/

//Добавляем несколько сообщений об ошибках в один тултип

function CustomValidation() { }

CustomValidation.prototype = {
  // Установим пустой массив сообщений об ошибках
  invalidities: [],

  // Метод, проверяющий валидность
  checkValidity: function(input) {

    var validity = input.validity;

    if (validity.patternMismatch) {
      this.addInvalidity('This is the wrong pattern for this field');
    }

    if (validity.rangeOverflow) {
      var max = getAttributeValue(input, 'max');
      this.addInvalidity('The maximum value should be ' + max);
    }

    if (validity.rangeUnderflow) {
      var min = getAttributeValue(input, 'min');
      this.addInvalidity('The minimum value should be ' + min);
    }

    if (validity.stepMismatch) {
      var step = getAttributeValue(input, 'step');
      this.addInvalidity('This number needs to be a multiple of ' + step);
    }

    // И остальные проверки валидности...
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function() {
    return this.invalidities.join('. \n');
  }
};

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(e) {
  // Пройдёмся по всем полям
  for (var i = 0; i < inputs.length; i++) {

    var input = inputs[i];

    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (input.checkValidity() == false) {

      var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
      inputCustomValidation.checkValidity(input); // Выявим ошибки
      var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
      input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

    } // закончился if
  } // закончился цикл
});


//Показываем все ошибки для всех полей.

CustomValidation.prototype.getInvaliditiesForHTML = function() {
  return this.invalidities.join('. <br>');
}

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(e) {
  // Пройдёмся по всем полям
  for (var i = 0; i < inputs.length; i++) {

    var input = inputs[i];

    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (input.checkValidity() == false) {

      var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
      inputCustomValidation.checkValidity(input); // Выявим ошибки
      var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
      input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

      // Добавим ошибки в документ
      var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
      stopSubmit = true;

    } // закончился if
  } // закончился цикл

  if (stopSubmit) {
    e.preventDefault();
  }
});


//нестандартные проверки валидности

CustomValidation.prototype.checkValidity = function(input) {

  // Тут идут встроенные проверки валидности

  // А тут специальные
  if (!input.value.match(/[a-z]/g)) {
    this.addInvalidity('At least 1 lowercase letter is required');
  }

  if (!input.value.match(/[A-Z]/g)) {
    this.addInvalidity('At least 1 uppercase letter is required');
  }
};