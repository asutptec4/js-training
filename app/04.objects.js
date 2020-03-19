console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// class
// const Tune = (function () {
//     //constructor
//     function Tune(title, artist) {
//         this.title = title;
//         this.artist = artist;
//     }
//     // methods
//     Tune.prototype.concat = function () {
//         return this.title + this.artist;
//     }
//     return Tune;
// })()

// function Tune(title, artist) {
//     this.title = title;
//     this.artist = artist;
//     // If add here, this field will duplicated
//     // this.concat = function () {
//     //     return this.title + this.artist;
//     // }
// }
// Tune.prototype.concat = function () {
//     return this.title + this.artist;
// }

// Factory method
// function Tune1(title, artist) {
//     return {
//         title,
//         artist,
//         concat() {
//             return this.title + this.artist;
//         }
//     }
// }

// const t1 = new Tune('title1', 'artist1');
// console.log(t1.concat());

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// const Tune = (function () {
// function Tune(title, artist) {
// 1st
// return Object.create({
//     concat() {
//         return title + artist;
//     }
// });
// 2nd
// Tune.prototype.concat = function () {
//     return title + artist;
// }
// }
//     return Tune;
// })()

// let title_;
// let artist_;

// function Tune(title, artist) {
//     title_ = title;
//     artist_ = artist;
// }

// Tune.prototype.concat = function () {
//     return title_ + artist_;
// }

// const Tune = (function () {
//     const priv = new WeakMap()
//     function Tune(title, artist) {
//         const privateMember = { title, artist };
//         priv.set(this, privateMember);
//     }
//     Tune.prototype.concat = function () {
//         const privateMember = priv.get(this);
//         return privateMember.title + privateMember.artist;
//     }
//     return Tune;
// })();

// const t1 = new Tune('title1', 'artist1');
// console.log(t1.concat(), t1);
// const t2 = new Tune('title2', 'artist2');
// console.log(t2.concat(), t2, t2 instanceof Tune);

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

// if (!('exclaim' in String)) {
//     String.prototype.exclaim = function () {
//         console.log(this + '!');
//     }
// }

// 'str'.exclaim();

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     getTitle() {
//         return this.title;
//     }

//     getAuthor() {
//         return this.author;
//     }
// }

// class TechBook extends Book{
//     constructor(title, author, category) {
//         super(title, author);
//         this.category = category;
//     }

//     getCategory() {
//         return this.category;
//     }

//     getBook() {
//         return `${this.title} ${this.author} ${this.category}`;
//     }
// }

// const Book = (function () {
//     function Book(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     Book.prototype.getTitle = function () {
//         return this.title;
//     }

//     Book.prototype.getAuthor = function () {
//         return this.author;
//     }

//     return Book;
// })()

// const TechBook = (function () {
//     function TechBook(title, author, category) {
//         Book.call(this, title, author);
//         this.category = category;
//     }

//     TechBook.prototype = Object.create(Book.prototype);
//     TechBook.prototype.constructor = TechBook;

//     TechBook.prototype.getCategory = function () {
//         return this.category;
//     }

//     TechBook.prototype.getBook = function () {
//         return `${this.title} ${this.author} ${this.category}`;
//     }

//     return TechBook;
// })()

// const newBook = new Book('title', 'author');
// console.log(newBook, newBook.getTitle(), newBook.getAuthor());

// const newTech = new TechBook('title', 'author', 'category');
// console.log(newTech, newTech.getCategory(), newTech.getBook(), newTech.getAuthor(), newTech.getTitle());

// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// class Shape {
//     constructor() {
//         Shape.count++;
//     }
// }
// Shape.count = 0;

// class Rectangle extends Shape {
//     constructor(width, length) {
//         super();
//         this.width = width;
//         this.length = length;
//     }

//     square() {
//         return this.length * this.width;
//     }
// }

// const rect1 = new Rectangle(2, 3);
// const rect2 = new Rectangle(3, 4);
// const rect3 = new Rectangle(4, 5);
// console.log(Shape.count);

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

// const Person = (function () {
//     function Person() {
//     }

//     Person.prototype.setFirstName = function (firstName) {
//         this.firstName = firstName;
//         return this;
//     }

//     Person.prototype.setLastName = function (lastName) {
//         this.lastName = lastName;
//         return lastName;
//     }

//     return Person;
// })()

// const person = new Person();
// person.setFirstName('Ivan').setLastName('Ivanov');
// console.log(person);

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.

// let data = {};
// Object.defineProperties(data, {
//     'id': {
//         value: 1,
//         writable: true
//     },
//     'type': {
//         value: 'primary',
//         enumerable: true
//     },
//     'category': {
//         get: function () {
//             return this._category;
//         },
//         set: function (category) {
//             this._category = category;
//         },
//         configurable: true,
//         enumerable: true,
//     }
// });

// for (const key in data) {
//     console.log(key);
// }
// data.category = 'cat string';
// console.log(data.category);
// console.log(Object.getOwnPropertyDescriptors(data));

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.

// let object = {
//     id: '1',
//     name: 'objectName'
// };
// Object.preventExtensions(object);
// object.newField = 'newField';
// console.log(object);

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.

class Task {
    constructor(name) {
        this.name = name;
    }

    complete() {
        this.status = 'completed';
        return this;
    }

    toString() {
        return `[${this.status} ${this.name}]`;
    }
}
Task.prototype.status = 'new';

class TaskList {
    constructor() {
        this._tasks = [];
    }

    addTask(...task) {
        this._tasks.push(...task);
    }

    printTasks() {
        this._tasks.forEach(task => console.log(task.toString()));
    }

    clearList() {
        this._tasks.length = 0;
    }

    completeTask(task) {
        const index = this._tasks.findIndex(i => i.name === task.name);
        if (index > -1) {
            this._tasks[index].complete();
        }
    }

    deleteTask(task) {
        const index = this._tasks.findIndex(i => i.name === task.name);
        if (index > -1) {
            this._tasks.splice(index,1);
        }
    }

    sortTasks() {
        this._tasks.sort((t1,t2) => {
            if (t1.name > t2.name) {
                return 1;
            } if (t1.name == t2.name) {
                return 0;
            } else {
                return -1;
            }
        })
    }
}

const taskList = new TaskList();
taskList.addTask(new Task('Fix bug').complete());
const task = new Task('Create doc');
taskList.addTask(new Task('Review PR'), new Task('Create feature'), task);
taskList.sortTasks();
taskList.printTasks();
// taskList.clearList();
taskList.completeTask(task);
taskList.deleteTask(task);

console.log(taskList);