// // 1.1

// const goodsName = 'Генератор защитного поля';
// let goodsPrice = 1000;

// console.log(`Выбран ${goodsName}, цена за штуку ${goodsPrice} кредитов`);

// goodsPrice = 2000;

// console.log(`Выбран ${goodsName}, цена за штуку ${goodsPrice} кредитов`);

// // 1.2

// const total = 100;
// const ordered = 120;

// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// 1.3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let userPassword = prompt('Введите пароль');

// if (userPassword === null) {
//   console.log('Отменено пользователем!');
//   message = 'Отменено пользователем!';
// } else if (ADMIN_PASSWORD === userPassword) {
//   console.log('Добро пожаловать!');
//   message = 'Добро пожаловать!';
// } else if (userPassword !== ADMIN_PASSWORD || userPassword === '') {
//   console.log('Доступ запрещен, неверный пароль!');
//   message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// 1.4

// let credits = 23580;
// const pricePerDroid = 3000;
// let message;
// let totalPrice = 0;

// let numberOfDroids = prompt('Введите количество дроидов');

// if (numberOfDroids === null) {
//   console.log('Отменено пользователем!');
//   message = 'Отменено пользователем!';
// } else if (numberOfDroids * pricePerDroid > credits) {
//   console.log('Недостаточно средств на счету!');
//   message = 'Недостаточно средств на счету!';
// } else if (numberOfDroids * pricePerDroid <= credits) {
//   totalPrice = credits - numberOfDroids * pricePerDroid;
//   console.log(
//     `Вы купили ${numberOfDroids} дроидов, на счету осталось ${totalPrice} кредитов.`
//   );
//   message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${totalPrice} кредитов.`;
// }

// alert(message);

// 1.5
// let userCountry = prompt('Введите вашу страну').toLocaleLowerCase();
// let message;

// switch (userCountry) {
//   case 'китай':
//     console.log(`Доставка в ${userCountry} будет стоить 100 кредитов`);
//     message = `Доставка в ${userCountry} будет стоить 100 кредитов`;
//     break;
//   case 'чили':
//     console.log(`Доставка в ${userCountry} будет стоить 250 кредитов`);
//     message = `Доставка в ${userCountry} будет стоить 250 кредитов`;
//     break;
//   case 'австралия':
//     console.log(`Доставка в ${userCountry} будет стоить 170 кредитов`);
//     message = `Доставка в ${userCountry} будет стоить 170 кредитов`;
//     break;
//   case 'индия':
//     console.log(`Доставка в ${userCountry} будет стоить 80 кредитов`);
//     message = `Доставка в ${userCountry} будет стоить 80 кредитов`;
//     break;
//   case 'ямайка':
//     console.log(`Доставка в ${userCountry} будет стоить 120 кредитов`);
//     message = `Доставка в ${userCountry} будет стоить 120 кредитов`;
//     break;
//   default:
//     console.log('В вашей стране доставка не доступна');
//     message = 'В вашей стране доставка не доступна';
// }

// alert(message);

// 1.6

// let totalClick = 0;
// let result;
// let userNumber = prompt('введите число');

// userNumber.slice(-1);

// while (userNumber) {
//   userNumber = prompt('введите число');
//   totalClick += userNumber;
//   if (userNumber === null) {
//     let result = totalClick.slice(0, -4);
//     alert(result);
//   }
// }

// 2.1

// const logItems = function (array) {
//   let number = 1;
//   for (let i = 0; i < array.length; i += 1) {
//     number = 1 + i;
//     console.log(number, array[i]);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// 2.2

// let finalPrice = 0;
// const calculateEngravingPrice = function (message, pricePerWord) {
//   let splitMsg = message.split(' ');
//   return (finalPrice = splitMsg.length * pricePerWord);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
// ); // 120

// 2.3

// const findLongestWord = function (string) {
//   let final = '';
//   let words = string.split(' ');
//   let firstWord = 0;
//   for (let word of words) {
//     if (word.length > firstWord) {
//       firstWord = word;
//       final = word;
//     }
//   }
//   return final;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// 2.4

// const formatString = function (string) {
//   let final = '';
//   let numberOfWords = 0;
//   let words = string.split(' ');
//   for (let word of words) {
//     numberOfWords += word.length;
//   }
//   if (numberOfWords > 40) {
//     final = string.slice(0, 40) + '...';
//   } else final = string;
//   return final;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
//   )
// );
// // вернется форматированная строка

// 2.5

// const checkForSpam = function (message) {
//   let lowerCaseMsg = message.toLowerCase();

//   let final =
//     lowerCaseMsg.includes('spam') || lowerCaseMsg.includes('sale')
//       ? true
//       : false;
//   return final;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//  2.6

// let input = prompt('введите число');
// const numbers = [];
// let total = 0;

// while (input) {
//   numbers.push(Number(input));
//   input = prompt('введите число');

//   if (input === null) {
//     for (let number of numbers) {
//       total += number;
//     }
//     alert(total);
//   }
// }

// 2.7

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   let result = login.length >= 4 && login.length <= 16 ? true : false;
//   return result;
// };

// const isLoginUnique = function (allLogins, login) {
//   let result = allLogins.includes(login);
//   return result;
// };

// const addLogin = function (allLogins, login) {
//   if (!isLoginValid(login)) {
//     console.log('long or short');
//     return;
//   }
//   if (isLoginUnique(allLogins, login)) {
//     console.log('exist');
//     return;
//   }
//   allLogins.push(login);
//   console.log('sucess');
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// 3.1

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (let i in user) {
//   console.log(i + ':' + user[i]);
// }

// 3.2

// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// 3.3

// const findBestEmployee = function (employees) {
//   const array = Object.entries(employees);
//   let result = array[0];
//   for (let arr of array) {
//     arr[1] > result[1] ? (result = arr) : result;
//   }
//   return result[0];
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// 3.4

// const countTotalSalary = function (employees) {
//   let total = 0;
//   const empSalary = Object.values(employees).forEach(emp => {
//     total += emp;
//   });
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// 3.5

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let array = [];
//   for (let a in arr) {
//     if (prop === 'name') {
//       array.push(arr[a].name);
//     } else if (prop === 'quantity') {
//       array.push(arr[a].quantity);
//     } else if (prop === 'price') {
//       array.push(arr[a].price);
//     }
//   }
//   return array;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// console.log(getAllPropValues(products, 'price'));

// 3.6

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let result = 0;
//   for (let a in allProdcuts) {
//     allProdcuts[a].name === productName
//       ? (result = allProdcuts[a].price * allProdcuts[a].quantity)
//       : result;
//   }
//   return result;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// 3.7

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,

//   transactions: [],

//   createTransaction(amount, type) {
//     let tAction = { type, amount };
//     return this.transactions.push(tAction);
//   },

//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, 'plus');
//   },

//   withdraw(amount) {
//     if (amount >= this.balance) {
//       console.log('недостаточно средств');
//       return;
//     }
//     this.balance -= amount;
//     this.createTransaction(amount, 'minus');
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     return this.transactions[id - 1];
//   },

//   getTransactionTotal(type) {
//     let transactionsArray = [];
//     for (let el of this.transactions) {
//       if (el.type === type) {
//         transactionsArray.push(el);
//       }
//     }
//     return transactionsArray;
//   },
// };

// console.log(account.deposit(100));
// console.log(account.deposit(400));
// console.log(account.withdraw(200));
// console.log(account.deposit(200));
// console.log(account.withdraw(100));
// console.log(account.deposit(600));
// console.log(account.withdraw(300));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal('minus'));
// console.log(account);

// 4.1

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// 4.2

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action.bind(inventory)(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// 5.1

// function Account({ login, email }) {
//   this.login = login;
//   this.email = email;

//   this.getInfo = function () {
//     return this.login + ' : ' + this.email;
//   };
// }

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com

// 5.2
// class User {
//   constructor({ name, age, followers } = {}) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     return `${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers

// 5.3
// class Storage {
//   constructor([...array] = []) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(removeItem) {
//     let removeIndex = this.items.indexOf(removeItem);
//     if (removeIndex > -1) {
//       this.items.splice(removeIndex, 1);
//     }
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// 5.4

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = this._value + str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// 5.5

// class Car {
//   static getSpecs(car) {
//     return console.log(
//       `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price:${car._price}`
//     );
//   }

//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this._speed = speed;
//     this._price = price;
//     this._maxSpeed = maxSpeed;
//     this._isOn = isOn;
//     this._distance = distance;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   turnOn() {
//     this._isOn = true;
//   }

//   turnOff() {
//     this._isOn = false;
//     this._speed = 0;
//   }

//   accelerate(value) {
//     if (this._speed + value <= this._maxSpeed) {
//       this._speed += value;
//     }
//   }

//   decelerate(value) {
//     if (this._speed - value >= 0) {
//       this._speed -= value;
//     }
//   }

//   drive(hours) {
//     if (this._isOn) {
//       this._distance += hours * this._speed;
//     }
//   }
// }4.2

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// 6.1

import users from '../jsdata/users.js';

// 6.1

// const getUserNames = users => {
//   let usersArray = users.map(user => user.name);
//   return usersArray;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 6.2

// const getUsersWithEyeColor = (users, color) => {
//   let usersEyeColor = users.filter(user => user.eyeColor === color);
//   return usersEyeColor;
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 6.3

// const getUsersWithGender = (users, gender) => {
//   let userGender = [];
//   users.filter(user => {
//     if (user.gender === gender) {
//       userGender.push(user.name);
//     }
//   });
//   return userGender;
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 6.4

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive);
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 6.5

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// 6.6

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age > min && user.age < max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 6.7

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

// 6.8

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 6.9

// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort(function (a, b) {
//       if (a.friends.length > b.friends.length) {
//         return 1;
//       }
//       if (a.friends.length < b.friends.length) {
//         return -1;
//       }

//       return 0;
//     })
//     .map(user => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 6.10

// const getSortedUniqueSkills = users => {
//   let array = [];
//   for (let user of users) {
//     array.push(...user.skills);
//   }
//   array.sort((a, b) => a.localeCompare(b));
//   return new Set(array);
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
