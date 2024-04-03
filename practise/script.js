// https://jsonplaceholder.typicode.com/posts

// function displayData(data) {
//   const mahima = document.getElementById("mahima");

//   for (let i = 0; i < data.length; i++) {
//     const title = document.createElement("p");
//     title.innerText = data[i].title;

//     mahima.append(title);
//   }
// }

// // SRP

// async function fetchData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();

//     displayData(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();

// let arr = [1, 2, 3, 4, 5];

// // map -> return new array
// let newArr = arr.map((item, idx) => {
//   // undefined 2 undefiend 4 un
//   if (item % 2 == 0) return item;
// });

// console.log(newArr);

// let newArr = arr.filter((item, idx) => {
//   if (item % 2 == 0) return item;
// });

// console.log(newArr);

// let arr = [
//   {
//     name: "mahima",
//     marks: 90,
//   },
//   {
//     name: "abhay",
//     marks: 80,
//   },
//   {
//     name: "abhay",
//     marks: 80,
//   },
//   {
//     name: "noel",
//     marks: 0,
//   },
//   {
//     name: "mahima",
//     marks: 100,
//   },
// ];

// let val = arr.reduce((acc, item, idx) => {
//   if (acc.hasOwnProperty(item.name)) {
//     acc[item.name] = acc[item.name] + item.marks;
//   } else {
//     acc[item.name] = item.marks;
//   }

//   return acc;
// }, {});

// console.log(val);

// let res = {
//   mahima: 190,
//   abhay: 80,
// };

// let newArr = arr.map((item) => {
//   if (res.hasOwnProperty(item.name)) {
//     res[item.name] = res[item.name] + item.marks;
//   } else {
//     res[item.name] = item.marks;
//   }
// });

// console.log(res);

let mahima = {
  name: "Mahima",
  rank: 1,
  obj2: {
    id: 1,
  },
  school: "demo school",
};

//! shallow copy,
// let abhay = { ...mahima }; // id change ho sakti hein

//! deep copy
// id change nhi hogi mahima ki
let abhay = JSON.parse(JSON.stringify(mahima));

abhay.obj2.id = 10;

console.log(mahima);
