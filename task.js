The JavaScript language

2.5 Data types
	! http://javascript.info/task/string-quotes 

	let name = "Ilya";

	alert( `hello ${1}` ); // hello 1

	alert( `hello ${"name"}` ); // hello name

	alert( `hello ${name}` ); // hello Ilya

2.6 Type Conversions
	? http://javascript.info/task/primitive-conversions-questions

	console.log("" + 1 + 0) //"1" /10
	console.log("" - 1 + 0) //NaN /-1
	console.log(true + false) //1 
	console.log(6 / "3") //2 
	console.log("2" * "3") //6 
	console.log(4 + 5 + "px") //"9px" 
	console.log("$" + 4 + 5) //"$45" 
	console.log("4" - 2)//2 
	console.log("4px" - 2)//NaN 
	console.log(7 / 0)//Infinity 
	console.log("  -9  " + 5)//-4 /   -9  5
	console.log("  -9  " - 5)//-14
	console.log(null + 1)//1
	console.log(undefined + 1)//NaN

2.7 Operators
	! http://javascript.info/task/increment-order

	let a = 1, b = 1;

	let c = ++a; // 2
	let d = b++; // 1
	console.log(c);
	console.log(d);

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	! http://javascript.info/task/assignment-result

	let a = 2;

	let x = 1 + (a *= 2);

	console.log(a); //4
	console.log(x); //5

2.8 Comparisons
	! http://javascript.info/task/comparison-questions

	console.log(5 > 4)//true
	console.log("apple" > "pineapple")//false
	console.log("2" > "12")//true
	console.log(undefined == null)//true
	console.log(undefined === null)//false
	console.log(null == "\n0\n")//false
	console.log(null === +"\n0\n")//false

2.9 Interaction: alert, prompt, confirm
	! http://javascript.info/task/simple-page

2.10 Conditional operators: if, '?'
	! http://javascript.info/task/if-zero-string

	! http://javascript.info/task/check-standard

	if(prompt("What name?", "")=="ECMAScript"){
		console.log("Right!")
	} else{
		console.log("Wrong!")
	}

	! http://javascript.info/task/sign

	let value = prompt("Number", "");
	value > 0 ? console.log(1) : value < 0 ? console.log(-1) : value == 0 ? console.log(0) : console.log("deewffewef")

	! http://javascript.info/task/rewrite-if-question

	if (a + b < 4) {
	  result = 'Below';
	} else {
	  result = 'Over';
	}

	result = a + b < 4 ?  'Below' : 'Over'

	! http://javascript.info/task/rewrite-if-else-question

	let message;

	if (login == 'Employee') {
	  message = 'Hello';
	} else if (login == 'Director') {
	  message = 'Greetings';
	} else if (login == '') {
	  message = 'No login';
	} else {
	  message = '';
	}

	message = (login == 'Employee') ? : 'Hello' : 
		(login == 'Director') ? 'Greetings' : 
		(login == '') ? : 'No login' : 
		''

2.11 Logical operators
	! http://javascript.info/task/alert-null-2-undefined

	console.log( null || 2 || undefined ); //2

	! http://javascript.info/task/alert-or

	! http://javascript.info/task/alert-1-null-2

	! http://javascript.info/task/alert-and

	! http://javascript.info/task/alert-and-or

	! http://javascript.info/task/check-if-in-range

	let age = prompt("Age","")
	if( age >= 14 && age <= 80){
		console.log(true)
	} else {
		console.log(false)
	}

	! http://javascript.info/task/check-if-out-range

	! http://javascript.info/task/if-question

	! http://javascript.info/task/check-login

	let name = prompt("Name?", "");
	switch (name) {
			  case "Admin":
			  let password =  prompt("Password","")
			  password == "TheMaster" ? console.log("welcome") : password == null ? console.log("canceled") : console.log("wrong password")
			    break;
			  case null:
			    console.log("canceled");
			    break;
			  default:
			    alert( "I don't know" );
			}
2.12 Loops: while and for
	! http://javascript.info/task/loop-last-value

	! http://javascript.info/task/which-value-while
	
	http://javascript.info/task/which-value-for
	http://javascript.info/task/for-even
	http://javascript.info/task/replace-for-while
	http://javascript.info/task/repeat-until-correct
	http://javascript.info/task/list-primes
2.13 The "switch" statement
	http://javascript.info/task/rewrite-switch-if-else
	http://javascript.info/task/rewrite-if-switch
2.14 Functions
	http://javascript.info/task/if-else-required
	http://javascript.info/task/rewrite-function-question-or
	http://javascript.info/task/min
	http://javascript.info/task/pow
2.15 Function expressions and arrows
	http://javascript.info/task/rewrite-arrow

4.1 Objects
	http://javascript.info/task/hello-object
	http://javascript.info/task/is-empty
	http://javascript.info/task/const-object
	http://javascript.info/task/sum-object
	http://javascript.info/task/multiply-numeric
4.4 Object methods, "this"
	http://javascript.info/task/check-syntax
	http://javascript.info/task/why-this
	http://javascript.info/task/object-property-this
	http://javascript.info/task/calculator
	http://javascript.info/task/chain-calls
4.6 Constructor, operator "new"
	http://javascript.info/task/two-functions-one-object
	http://javascript.info/task/calculator-constructor
	http://javascript.info/task/accumulator

5.1 Methods of primitives
	http://javascript.info/task/string-new-property
5.2 Numbers
	http://javascript.info/task/sum-interface
	http://javascript.info/task/why-rounded-down
	http://javascript.info/task/repeat-until-number
	http://javascript.info/task/endless-loop-error
	http://javascript.info/task/random-min-max
	http://javascript.info/task/random-int-min-max
5.3 Strings
	http://javascript.info/task/ucfirst
	http://javascript.info/task/check-spam
	http://javascript.info/task/truncate
	http://javascript.info/task/extract-currency
5.4 Arrays
	http://javascript.info/task/item-value
	http://javascript.info/task/create-array
	http://javascript.info/task/call-array-this
	http://javascript.info/task/array-input-sum
	http://javascript.info/task/maximal-subarray
5.5 Array methods
	http://javascript.info/task/camelcase
	http://javascript.info/task/filter-range
	http://javascript.info/task/filter-range-in-place
	http://javascript.info/task/sort-back
	http://javascript.info/task/copy-sort-array
	http://javascript.info/task/calculator-extendable
	http://javascript.info/task/array-get-names
	http://javascript.info/task/map-objects
	http://javascript.info/task/sort-objects
	http://javascript.info/task/shuffle
	http://javascript.info/task/average-age
	http://javascript.info/task/array-unique
5.7 Map, Set, WeakMap and WeakSet
	http://javascript.info/task/array-unique-map
	http://javascript.info/task/filter-anagrams
	http://javascript.info/task/iterable-keys
	http://javascript.info/task/recipients-read
	http://javascript.info/task/recipients-when-read
5.8 Object.keys, values, entries
	http://javascript.info/task/sum-salaries
	http://javascript.info/task/count-properties
5.9 Destructuring assignment
	http://javascript.info/task/destruct-user
	http://javascript.info/task/max-salary
5.10 Date and time
	http://javascript.info/task/new-date
	http://javascript.info/task/get-week-day
	http://javascript.info/task/weekday
	http://javascript.info/task/get-date-ago
	http://javascript.info/task/last-day-of-month
	http://javascript.info/task/get-seconds-today
	http://javascript.info/task/get-seconds-to-tomorrow
	http://javascript.info/task/format-date-relative
5.11 JSON methods, toJSON
	http://javascript.info/task/serialize-object
	http://javascript.info/task/serialize-event-circular

6.1 Recursion and stack
	http://javascript.info/task/sum-to
	http://javascript.info/task/factorial
	http://javascript.info/task/fibonacci-numbers
	http://javascript.info/task/output-single-linked-list
	http://javascript.info/task/output-single-linked-list-reverse
6.2 Closure
	http://javascript.info/task/counter-independent
	http://javascript.info/task/counter-object-independent
	http://javascript.info/task/function-in-if
	http://javascript.info/task/closure-sum
	http://javascript.info/task/filter-through-function
	http://javascript.info/task/sort-by-field
	http://javascript.info/task/make-army
6.6 Function object, NFE
	http://javascript.info/task/counter-inc-dec
	http://javascript.info/task/sum-many-brackets
6.8 Scheduling: setTimeout and setInterval
	http://javascript.info/task/output-numbers-100ms
	http://javascript.info/task/rewrite-settimeout
	http://javascript.info/task/settimeout-result
6.9 Decorators and forwarding, call/apply
	http://javascript.info/task/spy-decorator
	http://javascript.info/task/delay
	http://javascript.info/task/debounce
	http://javascript.info/task/throttle
6.10 Function binding
	http://javascript.info/task/write-to-object-after-bind
	http://javascript.info/task/second-bind
	http://javascript.info/task/function-property-after-bind
	http://javascript.info/task/question-use-bind
6.11 Currying and partials
	http://javascript.info/task/ask-currying

8.1 Prototypal inheritance
	http://javascript.info/task/property-after-delete
	http://javascript.info/task/search-algorithm
	http://javascript.info/task/proto-and-this
	http://javascript.info/task/hamster-proto
8.2 F.prototype
	http://javascript.info/task/changing-prototype
	http://javascript.info/task/new-object-same-constructor
8.3 Native prototypes
	http://javascript.info/task/defer-to-prototype
	http://javascript.info/task/defer-to-prototype-extended
8.4 Prototype methods, objects without __proto__
	http://javascript.info/task/dictionary-tostring
	http://javascript.info/task/compare-calls

9.1 Class basic syntax
	http://javascript.info/task/rewrite-to-class
9.2 Class inheritance
	http://javascript.info/task/class-constructor-error
	http://javascript.info/task/clock-class-extended
	http://javascript.info/task/class-extend-object
9.6 Class checking: "instanceof"
	http://javascript.info/task/strange-instanceof

10.1 Error handling, "try..catch"
	http://javascript.info/task/finally-or-code-after
10.2 Custom errors, extending Error
	http://javascript.info/task/format-error

11.1 Introduction: callbacks
	http://javascript.info/task/animate-circle-callback
11.2 Promise
	http://javascript.info/task/re-resolve
	http://javascript.info/task/delay-promise
	http://javascript.info/task/animate-circle-promise
11.3 Promises chaining
	http://javascript.info/task/then-vs-catch
11.4 Error handling with promises
	http://javascript.info/task/error-async
11.5 Promise API
	http://javascript.info/task/promise-errors-as-results
	http://javascript.info/task/promise-errors-as-results-2
11.8 Async/await
	http://javascript.info/task/rewrite-async
	http://javascript.info/task/rewrite-async-2
	http://javascript.info/task/async-from-regular

12.1 Generators
	http://javascript.info/task/pseudo-random-generator

Browser: Document, Events, Interfaces

1.3 Walking the DOM
	http://javascript.info/task/dom-children
	http://javascript.info/task/navigation-links-which-null
	http://javascript.info/task/select-diagonal-cells
1.4 Searching: getElement*, querySelector*
	http://javascript.info/task/find-elements
1.5 Node properties: type, tag and contents
	http://javascript.info/task/tree-info
	http://javascript.info/task/lastchild-nodetype-inline
	http://javascript.info/task/tag-in-comment
	http://javascript.info/task/where-document-in-hierarchy
1.6 Attributes and properties
	http://javascript.info/task/get-user-attribute
	http://javascript.info/task/yellow-links
1.7 Modifying the document
	http://javascript.info/task/createtextnode-vs-innerhtml
	http://javascript.info/task/clear-elem
	http://javascript.info/task/why-aaa
	http://javascript.info/task/create-list
	http://javascript.info/task/create-object-tree
	http://javascript.info/task/tree-count
	http://javascript.info/task/calendar-table
	http://javascript.info/task/clock-setinterval
	http://javascript.info/task/append-to-list
	http://javascript.info/task/sort-table
1.8 Styles and classes
	http://javascript.info/task/create-notification
1.9 Element size and scrolling
	http://javascript.info/task/get-scroll-height-bottom
	http://javascript.info/task/scrollbar-width
	http://javascript.info/task/put-ball-in-center
	http://javascript.info/task/width-vs-clientwidth
1.11 Coordinates
	http://javascript.info/task/find-point-coordinates
	http://javascript.info/task/position-at
	http://javascript.info/task/position-at-absolute
	http://javascript.info/task/position-inside-absolute
2.1 Introduction to browser events
	http://javascript.info/task/hide-other
	http://javascript.info/task/hide-self-onclick
	http://javascript.info/task/which-handlers-run
	http://javascript.info/task/move-ball-field
	http://javascript.info/task/sliding-menu
	http://javascript.info/task/hide-message
	http://javascript.info/task/carousel
2.3 Event delegation
	http://javascript.info/task/hide-message-delegate
	http://javascript.info/task/sliding-tree
	http://javascript.info/task/sortable-table
	http://javascript.info/task/behavior-tooltip
2.4 Browser default actions
	http://javascript.info/task/why-return-false-fails
	http://javascript.info/task/catch-link-navigation
	http://javascript.info/task/image-gallery
	
3.1 Mouse events basics
	http://javascript.info/task/selectable-list
3.2 Moving: mouseover/out, mouseenter/leave
	http://javascript.info/task/behavior-nested-tooltip
	http://javascript.info/task/hoverintent
3.3 Drag'n'Drop with mouse events
	http://javascript.info/task/slider
	http://javascript.info/task/drag-heroes
3.4 Keyboard: keydown and keyup
	http://javascript.info/task/check-sync-keydown
3.5 Scrolling
	http://javascript.info/task/endless-page
	http://javascript.info/task/updown-button
	http://javascript.info/task/load-visible-img
4.1 Form properties and methods
	http://javascript.info/task/add-select-option
4.2 Focusing: focus/blur
	http://javascript.info/task/editable-div
	http://javascript.info/task/edit-td-click
	http://javascript.info/task/keyboard-mouse
4.3 Events: change, input, cut, copy, paste
	http://javascript.info/task/deposit-calculator
4.4 Form submission: event and method submit
	http://javascript.info/task/modal-dialog


Основы JavaScript

2.2	Внешние скрипты, порядок исполнения
	https://learn.javascript.ru/task/async-defer-first
	https://learn.javascript.ru/task/hello-alert-ext
2.5 Переменные
	https://learn.javascript.ru/task/hello-variables
2.6 Правильный выбор имени переменной
	https://learn.javascript.ru/task/declare-variables
2.8 Основные операторы
	https://learn.javascript.ru/task/increment-order
	https://learn.javascript.ru/task/assignment-result
2.11 Взаимодействие с пользователем: alert, prompt, confirm
	https://learn.javascript.ru/task/simple-page
2.12 Условные операторы: if, '?'
	https://learn.javascript.ru/task/if-zero-string
	https://learn.javascript.ru/task/check-standard
	https://learn.javascript.ru/task/sign
	https://learn.javascript.ru/task/check-login
	https://learn.javascript.ru/task/rewrite-if-question
	https://learn.javascript.ru/task/rewrite-if-else-question
2.13 Логические операторы
	https://learn.javascript.ru/task/alert-null-2-undefined
	https://learn.javascript.ru/task/alert-or
	https://learn.javascript.ru/task/alert-1-null-2
	https://learn.javascript.ru/task/alert-and
	https://learn.javascript.ru/task/alert-and-or
	https://learn.javascript.ru/task/check-if-in-range
	https://learn.javascript.ru/task/check-if-out-range
	https://learn.javascript.ru/task/if-question
2.14 Преобразование типов для примитивов
	https://learn.javascript.ru/task/primitive-conversions-questions
2.15 Циклы while, for
	https://learn.javascript.ru/task/loop-last-value
	https://learn.javascript.ru/task/which-value-while
	https://learn.javascript.ru/task/which-value-for
	https://learn.javascript.ru/task/for-even
	https://learn.javascript.ru/task/replace-for-while
	https://learn.javascript.ru/task/repeat-until-correct
	https://learn.javascript.ru/task/list-primes
2.16 Конструкция switch
	https://learn.javascript.ru/task/rewrite-switch-if-else
	https://learn.javascript.ru/task/rewrite-if-switch
2.17 Функции
	https://learn.javascript.ru/task/if-else-required
	https://learn.javascript.ru/task/rewrite-function-question-or
	https://learn.javascript.ru/task/min
	https://learn.javascript.ru/task/pow
2.19 Рекурсия, стек
	https://learn.javascript.ru/task/sum-to
	https://learn.javascript.ru/task/factorial
	https://learn.javascript.ru/task/fibonacci-numbers
2.20 Именованные функциональные выражения
	https://learn.javascript.ru/task/nfe-check

4.2 Числа
	https://learn.javascript.ru/task/sum-interface
	https://learn.javascript.ru/task/why-rounded-down
	https://learn.javascript.ru/task/sum-prices
	https://learn.javascript.ru/task/endless-loop-error
	https://learn.javascript.ru/task/formula-binet
	https://learn.javascript.ru/task/random-0-max
	https://learn.javascript.ru/task/random-min-max
	https://learn.javascript.ru/task/random-int-min-max
4.3	Строки
	https://learn.javascript.ru/task/ucfirst
	https://learn.javascript.ru/task/check-spam
	https://learn.javascript.ru/task/truncate
	https://learn.javascript.ru/task/extract-currency
4.4 Объекты как ассоциативные массивы
	https://learn.javascript.ru/task/hello-object
4.5 Объекты: перебор свойств
	https://learn.javascript.ru/task/is-empty
	https://learn.javascript.ru/task/sum-salaries
	https://learn.javascript.ru/task/max-salary
	https://learn.javascript.ru/task/multiply-numeric
4.7 Массивы с числовыми индексами
	https://learn.javascript.ru/task/get-last-in-array
	https://learn.javascript.ru/task/add-item-to-array
	https://learn.javascript.ru/task/create-array
	https://learn.javascript.ru/task/random-from-array
	https://learn.javascript.ru/task/calculator-for-input
	https://learn.javascript.ru/task/item-value
	https://learn.javascript.ru/task/array-find
	https://learn.javascript.ru/task/filter-range
	https://learn.javascript.ru/task/eratosthenes-sieve
	https://learn.javascript.ru/task/maximal-subarray
4.8 Массивы: методы
	https://learn.javascript.ru/task/add-class
	https://learn.javascript.ru/task/camelcase
	https://learn.javascript.ru/task/remove-class
	https://learn.javascript.ru/task/filter-in-place
	https://learn.javascript.ru/task/sort-back
	https://learn.javascript.ru/task/copy-sort-array
	https://learn.javascript.ru/task/shuffle-array
	https://learn.javascript.ru/task/sort-objects
	https://learn.javascript.ru/task/output-single-linked-list
	https://learn.javascript.ru/task/filter-anagrams
	https://learn.javascript.ru/task/array-unique
4.9 Массив: перебирающие методы
	https://learn.javascript.ru/task/rewrite-for-map
	https://learn.javascript.ru/task/partial-sums-array
4.10 Псевдомассив аргументов "arguments"
	https://learn.javascript.ru/task/check-arguments-undefined
	https://learn.javascript.ru/task/sum-arguments
4.11 Дата и Время
	https://learn.javascript.ru/task/new-date
	https://learn.javascript.ru/task/get-week-day
	https://learn.javascript.ru/task/weekday
	https://learn.javascript.ru/task/get-date-ago
	https://learn.javascript.ru/task/last-day-of-month
	https://learn.javascript.ru/task/get-seconds-today
	https://learn.javascript.ru/task/get-seconds-to-tomorrow
	https://learn.javascript.ru/task/format-date-ddmmyy
	https://learn.javascript.ru/task/format-date-relative

5.1 Глобальный объект
	https://learn.javascript.ru/task/window-and-variable
	https://learn.javascript.ru/task/window-and-variable-2
	https://learn.javascript.ru/task/window-and-variable-3
5.2 Замыкания, функции изнутри
	https://learn.javascript.ru/task/say-phrase-first
	https://learn.javascript.ru/task/which-value-is-modified
	https://learn.javascript.ru/task/var-window
	https://learn.javascript.ru/task/call-inplace
	https://learn.javascript.ru/task/access-outer-variable
	https://learn.javascript.ru/task/counter-window-variable
5.4 Локальные переменные для объекта
	https://learn.javascript.ru/task/closure-sum
	https://learn.javascript.ru/task/stringbuffer
	https://learn.javascript.ru/task/stringbuffer-with-clear
	https://learn.javascript.ru/task/sort-by-field
	https://learn.javascript.ru/task/filter-through-function
	https://learn.javascript.ru/task/make-army
5.7 Устаревшая конструкция "with"
	https://learn.javascript.ru/task/with-variables
	https://learn.javascript.ru/task/with-function

6.1 Методы объектов, this
	https://learn.javascript.ru/task/call-array-this
	https://learn.javascript.ru/task/check-syntax
	https://learn.javascript.ru/task/why-this
	https://learn.javascript.ru/task/object-property-this
	https://learn.javascript.ru/task/return-this
	https://learn.javascript.ru/task/return-object-this
	https://learn.javascript.ru/task/calculator
	https://learn.javascript.ru/task/chain-calls
6.2 Преобразование объектов: toString и valueOf
	https://learn.javascript.ru/task/array-equals-string
	https://learn.javascript.ru/task/tostring-valueof
	https://learn.javascript.ru/task/compare-empty-arrays
	https://learn.javascript.ru/task/object-types-conversion-questions
	https://learn.javascript.ru/task/sum-many-brackets
6.3 Создание объектов через "new"
	https://learn.javascript.ru/task/two-functions-one-object
	https://learn.javascript.ru/task/calculator-constructor
	https://learn.javascript.ru/task/accumulator
	https://learn.javascript.ru/task/calculator-extendable
6.4 Дескрипторы, геттеры и сеттеры свойств
	https://learn.javascript.ru/task/replace-property-getter
6.5 Статические и фабричные методы
	https://learn.javascript.ru/task/objects-counter
6.6 Явное указание this: "call", "apply"
	https://learn.javascript.ru/task/rewrite-sum-arguments
	https://learn.javascript.ru/task/apply-function-skip-first-argument
6.7 Привязка контекста и карринг: "bind"
	https://learn.javascript.ru/task/cross-browser-bind
	https://learn.javascript.ru/task/write-to-object-after-bind
	https://learn.javascript.ru/task/second-bind
	https://learn.javascript.ru/task/function-property-after-bind
	https://learn.javascript.ru/task/question-use-bind
	https://learn.javascript.ru/task/ask-currying
6.8 Функции-обёртки, декораторы
	https://learn.javascript.ru/task/logging-decorator
	https://learn.javascript.ru/task/logging-decorator-arguments
	https://learn.javascript.ru/task/caching-decorator

7.1 Типы данных: [[Class]], instanceof и утки
	https://learn.javascript.ru/task/format-date-polymorphic
7.2 Формат JSON, метод toJSON
	https://learn.javascript.ru/task/serialize-object
	https://learn.javascript.ru/task/serialize-object-circular
7.3 setTimeout и setInterval
	https://learn.javascript.ru/task/output-numbers-100ms
	https://learn.javascript.ru/task/output-numbers-100ms-settimeout
	https://learn.javascript.ru/task/highlight-tactics
	https://learn.javascript.ru/task/settimeout-result
	https://learn.javascript.ru/task/setinterval-result
	https://learn.javascript.ru/task/who-runs-faster
	https://learn.javascript.ru/task/delay
	https://learn.javascript.ru/task/debounce
	https://learn.javascript.ru/task/throttle
7.4 Запуск кода из строки: eval
	https://learn.javascript.ru/task/eval-calculator
7.5 Перехват ошибок, "try..catch"
	https://learn.javascript.ru/task/finally-or-code-after
	https://learn.javascript.ru/task/eval-calculator-errors

8.2 Внутренний и внешний интерфейс
	https://learn.javascript.ru/task/add-method-property-coffeemachine
8.3 Геттеры и сеттеры
	https://learn.javascript.ru/task/setter-onready
	https://learn.javascript.ru/task/coffeemachine-add-isrunning
	https://learn.javascript.ru/task/object-with-getters-setters
	https://learn.javascript.ru/task/getter-power
	https://learn.javascript.ru/task/add-public-coffeemachine
8.4 Функциональное наследование
	https://learn.javascript.ru/task/coffeemachine-fix-run
	https://learn.javascript.ru/task/coffeemachine-disable-stop
	https://learn.javascript.ru/task/inherit-fridge
	https://learn.javascript.ru/task/add-methods-fridge
	https://learn.javascript.ru/task/override-disable

9.1 Прототип объекта
	https://learn.javascript.ru/task/property-after-delete
	https://learn.javascript.ru/task/proto-and-this
	https://learn.javascript.ru/task/search-algorithm
9.2 Свойство F.prototype и создание объектов через new
	https://learn.javascript.ru/task/prototype-after-new
	https://learn.javascript.ru/task/default-arguments
	https://learn.javascript.ru/task/compare-calls
	https://learn.javascript.ru/task/new-object-same-constructor
9.3 Встроенные "классы" в JavaScript
	https://learn.javascript.ru/task/defer-to-prototype
	https://learn.javascript.ru/task/defer-to-prototype-extended
9.4 Свои классы на прототипах
	https://learn.javascript.ru/task/rewrite-by-class
	https://learn.javascript.ru/task/hamsters-with-proto
9.5 Наследование классов в JavaScript
	https://learn.javascript.ru/task/inheritance-error-assign
	https://learn.javascript.ru/task/inheritance-error-constructor
	https://learn.javascript.ru/task/clock-class
	https://learn.javascript.ru/task/clock-class-extended
	https://learn.javascript.ru/task/menu-timer-animated
	https://learn.javascript.ru/task/constructor-inherited
9.6 Проверка класса: "instanceof"
	https://learn.javascript.ru/task/strange-instanceof
	https://learn.javascript.ru/task/instanceof-result
9.7 Свои ошибки, наследование от Error
	https://learn.javascript.ru/task/format-error

10.11 Promise
	https://learn.javascript.ru/task/promise-settimeout
	https://learn.javascript.ru/task/promise-sequence

Документ и объекты страницы

1.2 Дерево DOM
	https://learn.javascript.ru/task/body-from-head
1.4 Навигация по DOM-элементам
	https://learn.javascript.ru/task/dom-children
	https://learn.javascript.ru/task/has-childnodes
	https://learn.javascript.ru/task/navigation-links-which-null
	https://learn.javascript.ru/task/select-diagonal-cells
1.5 Поиск: getElement* и querySelector* и не только
	https://learn.javascript.ru/task/find-elements
	https://learn.javascript.ru/task/tree-info
1.6 Внутреннее устройство поисковых методов
	https://learn.javascript.ru/task/collection-length-after-remove
	https://learn.javascript.ru/task/compare-elements-count
	https://learn.javascript.ru/task/benchmark-search-dom
	https://learn.javascript.ru/task/get-second-li
1.7 Свойства узлов: тип, тег и содержимое
	https://learn.javascript.ru/task/console-firstchild-innerhtml
	https://learn.javascript.ru/task/lastchild-nodetype-inline
	https://learn.javascript.ru/task/tag-in-comment
	https://learn.javascript.ru/task/where-document-in-hierarchy
1.8 Современный DOM: полифиллы
	https://learn.javascript.ru/task/polyfill-matches
	https://learn.javascript.ru/task/polyfill-closest
	https://learn.javascript.ru/task/polyfill-textcontent-ie8
1.9 Атрибуты и DOM-свойства
	https://learn.javascript.ru/task/get-user-attribute
	https://learn.javascript.ru/task/set-class-links
1.11 Добавление и удаление узлов
	https://learn.javascript.ru/task/createtextnode-vs-innerhtml
	https://learn.javascript.ru/task/remove-polyfill
	https://learn.javascript.ru/task/insert-after
	https://learn.javascript.ru/task/remove-children
	https://learn.javascript.ru/task/why-aaa
	https://learn.javascript.ru/task/create-list
	https://learn.javascript.ru/task/create-object-tree
	https://learn.javascript.ru/task/tree-count
	https://learn.javascript.ru/task/calendar-table
	https://learn.javascript.ru/task/clock-setinterval
1.12 Мультивставка: insertAdjacentHTML и DocumentFragment
	https://learn.javascript.ru/task/append-to-list
	https://learn.javascript.ru/task/sort-table-performance
1.14 Стили, getComputedStyle
	https://learn.javascript.ru/task/round-button-javascript
	https://learn.javascript.ru/task/create-notification
1.15 Размеры и прокрутка элементов
	https://learn.javascript.ru/task/get-scroll-height-bottom
	https://learn.javascript.ru/task/scrollbar-width
	https://learn.javascript.ru/task/div-placeholder
	https://learn.javascript.ru/task/put-ball-in-center
	https://learn.javascript.ru/task/expand-element
	https://learn.javascript.ru/task/width-vs-clientwidth
1.16 Размеры и прокрутка страницы
	https://learn.javascript.ru/task/pageyoffset-polyfill
1.17 Координаты в окне
	https://learn.javascript.ru/task/find-point-coordinates
	https://learn.javascript.ru/task/position-at
1.18 Координаты в документе
	https://learn.javascript.ru/task/get-document-scrolls
	https://learn.javascript.ru/task/position-at-absolute
	https://learn.javascript.ru/task/position-at-2

2.1 Введение в браузерные события
	https://learn.javascript.ru/task/hide-other
	https://learn.javascript.ru/task/hide-self-onclick
	https://learn.javascript.ru/task/which-handlers-run
	https://learn.javascript.ru/task/sliding-menu
	https://learn.javascript.ru/task/hide-message
	https://learn.javascript.ru/task/carousel
2.3 Объект события
	https://learn.javascript.ru/task/move-ball-field
2.5 Делегирование событий
	https://learn.javascript.ru/task/hide-message-delegate
	https://learn.javascript.ru/task/sliding-tree
	https://learn.javascript.ru/task/sort-table
2.6 Приём проектирования "поведение"
	https://learn.javascript.ru/task/behavior-tooltip
2.7 Действия браузера по умолчанию
	https://learn.javascript.ru/task/why-return-false-fails
	https://learn.javascript.ru/task/catch-link-navigation
	https://learn.javascript.ru/task/image-gallery

3.1 Мышь: клики, кнопка, координаты
	https://learn.javascript.ru/task/selectable-list
	https://learn.javascript.ru/task/tree-coords
3.3 Мышь: движение mouseover/out, mouseenter/leave
	https://learn.javascript.ru/task/behavior-nested-tooltip
	https://learn.javascript.ru/task/hoverintent
3.4 Мышь: Drag'n'Drop
	https://learn.javascript.ru/task/slider
	https://learn.javascript.ru/task/drag-heroes
3.6 Мышь: колёсико, событие wheel
	https://learn.javascript.ru/task/scale-with-mouse-wheel
	https://learn.javascript.ru/task/no-doc-scroll
3.8 Прокрутка: событие scroll
	https://learn.javascript.ru/task/avatar-above-scroll
	https://learn.javascript.ru/task/updown-button
	https://learn.javascript.ru/task/load-visible-img
3.9 Клавиатура: keyup, keydown, keypress
	https://learn.javascript.ru/task/numeric-input
	https://learn.javascript.ru/task/check-sync-keydown
3.11 Загрузка скриптов, картинок, фреймов: onload и onerror
	https://learn.javascript.ru/task/nice-alt
	https://learn.javascript.ru/task/load-img-callback
	https://learn.javascript.ru/task/script-callback
	https://learn.javascript.ru/task/scripts-callback

4.1 Навигация и свойства элементов формы
	https://learn.javascript.ru/task/add-select-option
4.2	Фокусировка: focus/blur
	https://learn.javascript.ru/task/hotkeys
	https://learn.javascript.ru/task/edit-td-click
	https://learn.javascript.ru/task/input-nice-placeholder
	https://learn.javascript.ru/task/capslock-warning-field
	https://learn.javascript.ru/task/emulate-placeholder
	https://learn.javascript.ru/task/keyboard-mouse
4.3 Изменение: change, input, cut, copy, paste
	https://learn.javascript.ru/task/calculate-capitalization
4.4 Формы: отправка, событие и метод submit
	https://learn.javascript.ru/task/modal-dialog
	https://learn.javascript.ru/task/form-validation

5.2 Графические компоненты
	https://learn.javascript.ru/task/clock
	https://learn.javascript.ru/task/slider-widget
	https://learn.javascript.ru/task/selectable-list-component
	https://learn.javascript.ru/task/voter
	https://learn.javascript.ru/task/voter-proto
	https://learn.javascript.ru/task/voter-add-step
5.3 Вёрстка графических компонентов
	https://learn.javascript.ru/task/semantic-menu
5.5 Коллбэки и события на компонентах
	https://learn.javascript.ru/task/voter-events
	https://learn.javascript.ru/task/selectable-list-evented
	https://learn.javascript.ru/task/custom-select
	https://learn.javascript.ru/task/slider-events