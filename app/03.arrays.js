console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.
// const a1 = ['a', 'b', 'c', 'd'];
// let lastElem = a1[a1.length-1];
// console.log(lastElem);
// console.log(a1);
// lastElem = a1.pop();
// console.log(lastElem);
// console.log(a1);

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
// const a2 = ['a', 'b', 'c', 'd'];
// a2.push('e');
// console.log(a2);
// const newA2 = [...a2, 'f'];
// console.log(newA2);

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
// const i = 3;
// const a3 = ['a', 'b', 'c', 'd', 'e'];
// a3[i] = 'new';
// const newA3 = [...a3].splice(i,0,'new');
// console.log(a3);
// console.log(newA3);

// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.
// const a4 = ['a', 'b', 'c', 'd', 'e'];
// a4.forEach(item => console.log(item));
// for (const value of a4) {
//     console.log(value);
// }

// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.
// const a5 = [0, 30, 5, 67, 86];
// const sum = a5.filter(item => item > 50).reduce((acc, val) => acc + val, 0);
// const sum = a5.reduce((acc, val) => (val > 50) && (acc += val), 0);
// console.log(a5, 'sum -', sum);

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.
// const a6 = ['abc', 'def', 'ghi'];
// console.log(a6.join('!'));

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.
// const a7 = [12, 3, 1, 4, 19, 10];
// const compAsc = (a, b) => a - b;
// console.log('asc ', a7.sort(compAsc));
// const compDesc = (a, b) => b - a;
// console.log('desc ', a7.sort(compDesc));
// console.log('desc ', a7.reverse());

// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.
// const a8 = [3, 0, -1, 12, -2, -4, 0, 7, 2];
// const newA8 = a8.filter(item => item < 0).concat(a8.filter(item => item === 0), a8.filter(item => item > 0));
// console.log(newA8);

// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.
// const styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// console.log(styles);
// styles[styles.length - 2] = 'Classics';
// console.log(styles);
// const first = styles.shift();
// console.log('first - ', first, ' styles - ', styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.
// const str = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
// let nr = 0;
// let nk = 0;
// let nt = 0;
// for (let char of str) {
//     if (char === "r") {
//         nr++;
//     }
//     if (char === "k") {
//         nk++;
//     }
//     if (char === "t") {
//         nt++;
//     }
// }
// console.log("r - ", nr, " k -", nk, "t -", nt);
// console.log("r - ", str.split('r').length - 1);
// console.log([...str]);

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.
// const a11 = [2, 3, 4, 6, 1, 7, 4, 9];
// const randElem = a11[Math.floor(Math.random() * a11.length)];
// console.log(randElem);

// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.
// const a12 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// a12.forEach(item => console.log(item.join(" ")));

// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.
// const a13 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(a13.reduce((acc, val) => acc.concat(val)));
// console.log(a13.flat());

// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.
// const a14 = [3, 4, 6, 3, 2, 4, 3];
// console.log(a14.splice(2, 4));

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.
// const a15 = [2, 3, 4, 6, 1, 7, 4, 9];
// console.log(a15.indexOf(1));
// const a15 = [{ id: 2 }, { id: 3 }, { id: 4 }, { id: 6 }, { id: 1 }, { id: 7 }, { id: 4 }, { id: 9 }];
// console.log(a15.findIndex(item => item.id === 1));

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.
// const a16 = [2, 3, 4, 6, 1, 1, 4, 9];
// console.log(Array.from(new Set(a16)));

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.
// const a17 = [2, 3, 4, 6, 1, 1, 4, 9];
// const firstDupl = a17.find(item => a17.indexOf(item) !== a17.lastIndexOf(item));
// a17.forEach((item, i, arr) => {
//     if (item === firstDupl) {
//         arr[i] = '*';
//     }
// });
// console.log(a17);


// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.
// const a18 = [2, 31, 42, 6, 16, 1, 4, 9, 8, 15];
// console.log('bin - ', a18.map(item => '0b' + item.toString(2)));
// console.log('oct - ', a18.map(item => '0c' + item.toString(8)));
// console.log('hex - ', a18.map(item => '0x' + item.toString(16)));

// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.
// const str = 'a big brown fox jumps over the lazy dog';
// console.log(str.split(' ').filter(item => item.length <= 3).length);

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.
// const a20 = [2, 'abc', 43, 54, 'bcd'];
// const result = a20.every(item => typeof item === 'string');
// console.log(result);

// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.

const a21 = [2, 31, 42, 6, 16, 1, 4, 9, 8, 15];
const compAsc = (a, b) => a - b;
const newA21 = a21.sort(compAsc);
const found = 6;
console.log('Array - ', newA21, ` index of ${found} is ${binarySearch(newA21, found)}`);
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor((end + start) / 2);
        if (arr[mid] === value) {
            return mid;
        }
        if (arr[mid] < value) {
            start = mid + 1;
        }
        if (arr[mid] > value) {
            end = mid - 1;
        }
    }
    return -1;
}