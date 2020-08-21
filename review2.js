// data data yang sudah kita beli
let database = [
  { name: "Makan pagi", type: "Daily Necessities", spending: 15000 },
  { name: "Beli kopi di Indomaret", type: "F&B", spending: 8000 },
  { name: "Makan siang", type: "Daily Necessities", spending: 15000 },
  { name: "Air minum 3 liter", type: "Daily Necessities", spending: 8000 },
  { name: "Beli gear sepeda", type: "Hobby", spending: 250000 },
  { name: "Beli mouse gaming", type: "Hobby", spending: 500000 },
  { name: "Multivitamin", type: "Health", spending: 100000 },
  { name: "Masker", type: "Health", spending: 20000 },
  { name: "Pulsa harian", type: "Daily Necessities", spending: 20000 },
  { name: "Makan malam", type: "Daily Necessities", spending: 15000 },
  { name: "Snack malam", type: "F&B", spending: 30000 },
  { name: "Grinder kopi", type: "Hobby", spending: 150000 },
];

function groupByType(inputDb) {
  // Code here
  // inputDb[0].type // "Daily Necessities"
  let result = {};
  /*
    {
      'Daily Necessities': [
        { name: "Makan pagi", spending: 15000 },
        { name: "Air minum 3 liter", spending: 8000 },
      ],
      'F&B': [],
      Hobby: [],
      Health: []
    }
  */
  //  {}
  // result[inputDb[i].type] = []; = result["Daily Necessities"] = [] // { "Daily Necessities": [] }
  for (let i = 0; i < inputDb.length; i++) {
    // {}
    // { "Daily Necessities": [] }
    // apakah key inputDb[i].type ada di dalam object result ? jika tidak ada, saya akan menambahkan property inputDb[i].type dengan value []

    //inputDb[i].type => "Daily Necessities"
    if (!(inputDb[i].type in result)) {
      result[inputDb[i].type] = [];
    }
    result[inputDb[i].type].push({
      name: inputDb[i].name,
      spending: inputDb[i].spending,
    });
  }

  return result;
}

// console.log(groupByType(database));
// {
//   'Daily Necessities': [
//     { name: 'Makan pagi', spending: 15000 },
//     { name: 'Makan siang', spending: 15000 },
//     { name: 'Air minum 3 liter', spending: 8000 },
//     { name: 'Pulsa harian', spending: 20000 },
//     { name: 'Makan malam', spending: 15000 }
//   ],
//   'F&B': [
//     { name: 'Beli kopi di Indomaret', spending: 8000 },
//     { name: 'Snack malam', spending: 30000 }
//   ],
//   Hobby: [
//     { name: 'Beli gear sepeda', spending: 250000 },
//     { name: 'Beli mouse gaming', spending: 500000 },
//     { name: 'Grinder kopi', spending: 150000 }
//   ],
//   Health: [
//     { name: 'Multivitamin', spending: 100000 },
//     { name: 'Masker', spending: 20000 }
//   ]
// }

function getTotalByType(input) {
  // Code here
  let result = {};

  for (const key in input) {
    // input[key]  contoh => // Daily Necessities
    result[key] = 0; // => { "Daily Necessities": 0 }
    // input[key]
    for (let i = 0; i < input[key].length; i++) {
      // input[key][i] => { name: 'Makan pagi', spending: 15000 },
      result[key] += input[key][i].spending; // 100000
    }
  }

  return result;
}
// let resultOfgroupByType = groupByType(database);
// console.log(getTotalByType(resultOfgroupByType));
// {
//   'Daily Necessities': 73000,
//   'F&B': 38000,
//   Hobby: 900000,
//   Health: 120000
// }

function getBiggestExpense(input) {
  // Code here
  let biggestExpense = 0;
  let totalSxpenses = 0;

  for (const key in input) {
    // cek yang paling besar
    if (biggestExpense < input[key]) {
      biggestExpense = input[key];
    }
    totalSxpenses += input[key];
  }

  let percent = (biggestExpense / totalSxpenses) * 100;
  let totalPercen = Math.floor(percent * 100) / 100;
  // console.log(Math.floor(percent * 100)); => 7957
  // 7957 / 100  =>  79.57
  //

  return `The biggest expense is Hobby with total of ${biggestExpense}. It is ${totalPercen}% of all expenses.`;
}

let resultOfgroupByType = groupByType(database);
let resultOfgetTotalByType = getTotalByType(resultOfgroupByType);
console.log(getBiggestExpense(resultOfgetTotalByType));
// The biggest expense is Hobby with total of 900000. It is 79.57% of all expenses.

// console.log(getBiggestExpense(getTotalByType(groupByType(database))));
// console.log();

// console.log("a\nB");
