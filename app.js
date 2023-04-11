// Question # 01


// const createAdder = (num1) => (num2) => num1 + num2;

// let addFive = createAdder(5);
// console.log(addFive(10));
// console.log(addFive(25));


// Question # 02

// const searchInArray = (arr, value) => {
// 	if (arr.length === 0) {
// 		return false;
// 	} else if (arr[0] === value) {
// 		return true;
// 	}
// 	return searchInArray(arr.slice(1), value);
// };

// console.log(searchInArray([2, 3, 4, 56], 4));



//Question # 03

// const addParagraph = (content) => {
// 	const para = document.createElement('p');
// 	para.textContent = content;
// 	document.body.appendChild(para);
// };

// addParagraph('This is the bottom of the HTML document');
// addParagraph('Hello i am at the bottom');



//Question # 04

// const addListItemToList = (content) => {
//     let item = document.createElement('li');
//     item.textContent = content;
//     let list = document.getElementById("list");
//     list.appendChild(item);
// };

// addListItemToList("Do homechores");
// addListItemToList("Do breakfast");
// addListItemToList("Brush your teeths");



//Question # 05


// const changeBackgroundColor = (element, color) => {
// 	element.style.backgroundColor = color;
// };

// const HtmlEle = document.getElementById('element');
// changeBackgroundColor(HtmlEle, 'blue');
// changeBackgroundColor(HtmlEle, 'purple');
// changeBackgroundColor(HtmlEle, 'yellow');



//Question # 06

// const saveToLocalStorage = (keyName, objValue) => {
// 	localStorage.setItem(keyName, JSON.stringify(objValue));
// };

// const myData = {
// 	id: '2278',
// 	email: 'heytayyaba@gmail.com',
// 	name: 'Tayyaba',
// };

// saveToLocalStorage('my Data', myData);


//Question # 07


// function retrieveFromLocalStorage(keyName) {
//     const storedData = localStorage.getItem(keyName);
//     return JSON.parse(storedData)
// }
// console.log(retrieveFromLocalStorage("my Data"));


//Question # 08

// function saveToLocalStorage(obj) {
// 	Object.keys(obj).forEach((key) => localStorage.setItem(key, JSON.stringify(obj[key])));

// 	const storedEntries = Object.keys(localStorage).reduce((entries, key) => {
// 		entries[key] = JSON.parse(localStorage.getItem(key));
// 		return entries;
// 	}, {});

// 	return storedEntries;
// }

// let myObj = {
// 	name: 'Tayyaba',
// 	email: 'ta6402792@gmail.com',
// 	country: 'Pakistan',
// };

// console.log(saveToLocalStorage(myObj));
