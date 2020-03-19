console.log('Topic: Functions');

// Task 1. FDS
// RU: Создайте функцию conc, которая должна конкатенировать значения
//     двух параметров a и b и возвращать строку.
//     Используйте Function Declaration Statement (FDS).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.
//     Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'

function conc(a, b) {
    return `${a}${b}`
}

console.log('Task 1 - ', conc(1, 1))

// Task 2. FDE
// RU: Создайте функцию comp, которая должна сравнивать значения
//     двух параметров a и b и возвращать 1, если они равны и -1, если они не равны.
//     Используйте Function Definition Expression (FDE).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
// EN: Create a function comp, which should compare the values
//     of two parameters a and b, and return 1, when they equal and return -1,
//     when they are not equal.
//     UseFunction Definition Expression (FDE).
//     Call a function before it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1

var compare = function (a, b) {
    return a == b ? 1 : -1;
}

console.log('Task 2 - ', compare(`abc`, `abC`))
console.log('Task 2 - ', compare(`abc`, `abc`))

// Task 3. AF
// RU: Создайте анонимную функцию, которая должна
//     выводить сообщение 'message in console' в коноль.
//     Используйте ее как обработчик события click для кнопки.
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.

document.getElementById('btn-cancel-promise')
    .addEventListener('click', function () {
        console.log('message in console')
    })

// Task 4. NFE
// RU: Создайте функцию fibo, которая должна вычислять числа Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Создайте функцию factorial, которая должна вычислять факториал числа по формуле
//     Fn = 1 * 2 *..*n.
//     Используйте Named Function Expression (NFE).
// EN: Create a function fibo should calculate Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a number n
//     according to the formula Fn = 1 * 2 *..*n.
//     Use Named Function Expression (NFE).

const fibo = function fiboFunc(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fibo(n - 2) + fibo(n - 1);
}

console.log('Task 4 - ', fibo(10));

const fact = function factFunc(x) {
    if (x < 0) return
    return x === 0 ? 1 : x * fact(x - 1)
}

console.log('Task 4 - ', fact(5))

// Task 5. FC
// RU: Объявите две строчные переменные: params и body и проинициализируйте
//     их строчными значениями, которые представляют список параметров и тело будущей функции.
//     Создайте функцию, используя эту информацию с помощью Function Constructor (FC).
//     Вызовите эту функцию.
// EN: Declare two string variables: params and body and initialize them with string values,
//     which represent the list of parameters and the body of future function.
//     Create function using these variables with help of Function Constructor (FC).
//     Call this function.

const params = `a, b`;
const funcBody = `return a + b`

const func = new Function(params, funcBody);

console.log('Task 5 - ', func(1 + 2));

// Task 6. ArF
// RU: Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Используя стрелочные функции создайте новый массив из элементов elem * elem,
//     которые меньше 100 и отсортируйте его по возрастанию.
//     Выведите результат в консоль.
// EN: Declare an array arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Using arrow functions create new array which contains elem * elem.
//     These elements should be less than 100, sort it in ascending order.
//     Display the result in the console.

const arr = [1, 8, 3, 5, 12, 7, 9, 11];
const copyArr = a => Array.from(a, i => i * i);
const filterArr = a => a.filter(i => i < 100);
const sortArr = a => a.sort((a, b) => a - b);
console.log('Task 6 - ', sortArr(filterArr(copyArr(arr))));

// Task 7. IIFE
// RU: Создайте конструкцию, с помощью которой выполниться выше реализованная
//     функция conc.
// EN: Create a construction which allows to run the above function conc.

(function conc1(a, b) {
    console.log('Task 7 - ', `${a}${b}`)
})(1, 1)

// Task 8. Arguments Object, Rest
// RU: Создайте функцию parts, которая принимает неизвестное количество параметров.
//     Каждый параметр – это группа предложений.
//     Функция должна вырезать из параметра подстроку, начиная с символа двоеточие (:)
//     и заканчивая символом точка (.).
//     Функция должна возвращать массив подстрок.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
// EN: Create a function parts, which takes unknown quantity of parameters.
//     Each parameter is a group of sentances.
//     The function should cut out the substring from the parameter, starting with the colon (:)
//     and ending with a period (.) character.
//     The function should return an array of substrings.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].

param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."

function parts(...rest) {
    return rest.map(el => {
        const str = `${el}`;
        const startPos = str.indexOf(':') + 1;
        const endPos = str.indexOf('.', startPos);
        return str.slice(startPos, endPos).trim();
    });
}

console.log('Task 8 - ', parts(param1, param2))

// Task 9. Optional Arguments
// RU: Создайте функцию find(testString, test), которая должна возвращать позицию
//     строки test в строке testString.
//     Если второй параметр не задан, используйте test = testString.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
// EN: Create a function find(testString, test), which should return the position
//     of test string within testString.
//     If the second parameter is omitted, use default value  test = testString.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0

const find = function (testString, test = testString) {
    return testString.indexOf(test);
}
console.group('Task 9');
console.log(find('abc', 'b'))
console.log(find('abc'))
console.log(find('abc', 'd'))
console.log(find('abc', 'a', 'b'))
console.groupEnd('Task 9');

// Task 10. Function as an Object
// RU: Создайте функцию str(), которая принимает один строчный параметр и
//     выводит в консоль 'String is non empty', если параметр - непустая строка и
//     'String is empty', если параметр – пустая строка.
//     Создайте функцию str.isNonEmptyStr(), как свойство функции str. Эта функция должна
//     принимать один параметр и возвращать true, если параметр непустая строка,
//     иначе false. Используйте эту функцию для реализации условия в основной функции.
//     Тестовые данные:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
// EN: Create a function str(), which takes one string parameter and display in the console
//     string 'String is non empty' if the paramer is not empty string, otherwise it
//     should display 'String is empty'.
//     Create a function str.isNonEmptyStr() as a property of function str. This function
//     should take one parameter and return true, when the value of parameter is not empty
//     string, otherwise it should return false. Use this function to implement if statement
//     in the str() funtion.
//     Test Data:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')


function str(a) {
    if (str.isNonEmptyStr(a)) {
        console.log('String is non empty');
    } else {
        console.log('String is empty');
    }
}

str.isNonEmptyStr = function(a) {
    return !!a;
}

str.isNonEmptyStr();
str.isNonEmptyStr('');
str.isNonEmptyStr('a');
str.isNonEmptyStr(1);

console.group('Task 10');
str();
str('a');
console.groupEnd('Task 10');

// Task 11. Function as a Parameter
// RU: Создайте функцию toConsole с одним параметром. Функция должна выводить
//     значение параметра в консоль.
//     Создайте функцию toAlert с одним параметром. Функция должна выводить значение
//     параметра используя alert().
//     Создайте функцию splitToWords с двумя параметрами: msg и callback.
//     Функция должна разделять строку на слова и использовать колбек для отображения слов.
//     Если второй параметр не задан, функция должна возвращать массив слов.
// EN: Create a function toConsole with one parameter. The function should display
//     the value of the parameter in the console.
//     Create a function toAlert with one parameter. The function should display
//     the value of the parameter using alert.
//     Create a function splitToWords, which takes two parameters: msg и callback.
//     The function should split the value of parameter msg by the words and use callback
//     to display these words.
//     If the second parameter is omitted, the function should return array of words.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']

function toConsole(a) {
    console.log(a);
}

function toAlert(a) {
    alert(a);
}

function splitToWords(msg, callback) {
    const wordArray = `${msg}`.split(' ');
    if (callback) {
        wordArray.forEach(callback);
    } else {
        return wordArray;
    }
}

console.group('Task 11');
const s = "My very long text msg";
splitToWords(s, toConsole);
// splitToWords(s, toAlert);
console.log(splitToWords(s));
console.groupEnd('Task 11');

// Task 12. Function as a Result
// RU: Создайте функцию copyright, которая должна возвращать другую функцию с
//     одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
//     вначале своего параметра и возвращать результат. Объявите этот знак в функции copyright.
//     Тестовые данные:
//     console.log( copyright()('EPAM') ); result = © EPAM.
// EN: Create a function copyright, which ahould return anther function with one parameter.
//     This returned function should prepend sign © ('\u00A9') to its parameter and
//     return the result. Declare the sign © ('\u00A9') inside copyright function.
//     Test Data:
//     console.log( copyright()('EPAM') ); result = © EPAM.

function copyright() {
    return function(str) {
        return `© ${str}`; 
    }
}

console.log('Task 12 - ', copyright()('EPAM'));

// Task 13. Function as a Result
// RU: Задание аналогично предыдущему, но в этот раз функция copyright получает знак
//     как свой параметр.
// EN: This task is similar to the previous one, but in this case the function copyright takes
//     one parameter - sign (© ('\u00A9')).

function copyright1(prefix) {
    return function(str) {
        return `${prefix} ${str}`; 
    }
}

console.log('Task 13 - ', copyright1('©')('EPAM'));

// Task 14. Function as a Method
// RU: Создайте литерал объекта employee со следующими свойствами:
//     name: 'Ann',
//     work – функция, которая выводит в консоль сообщение "I am Ann. I am working..."
//     Тестовые данные
//     employee.work()  результат в консоле "I am Ann. I am working..."
// EN: Create an object literal employee with the following properties:
//     name: 'Ann',
//     work – function, which display in the console the following string
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."

const employee = {
    name: 'Ann',
    work: function () {
        console.log(`I am ${this.name}. I am working...`);
    }
}

employee.work();

// Task 15. Borrow Method
// RU: Создайте литерал объекта person со свойством name.
//     Вызовите метод work объекта employee из предыдущего задания.
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.

const person = {
    name: 'Vasya'
}

employee.work.call(person);

// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
//     Using methods console.time(), console.timeEnd() calculate the time for function fibo
//     and fiboMemo.

function fiboMemo(n) {
    if (fiboMemo.store.has(n)) {
        return fiboMemo.store.get(n);
    }
    if (n == 0 || n == 1) {
        fiboMemo.store.set(n, n);
        return n;
    }
    const t = fiboMemo(n - 2) + fiboMemo(n - 1);
    fiboMemo.store.set(n, t)
    return t;
}

fiboMemo.store = new Map();

document.getElementById('btn-create-promise')
    .addEventListener('click', function () {
        console.time('Task 16, fibo');
        console.log(fibo(25));
        console.timeEnd('Task 16, fibo');
        
        console.time('Task 16, fiboMemo');
        console.log(fiboMemo(25));
        console.timeEnd('Task 16, fiboMemo');
    })
