/**
 * Seorang pedagang susu keliling hendak menjual barang dagangannya.
 * Penjualan akan diprioritaskan untuk susu yang akan kadaluarsa terlebih dahulu.
 * Susu-susu dagangan akan diwakilkan dengan sebuah array of objects.
 * Buatlah fungsi-fungsi dengan output sesuai contoh test case yang diberikan.
 */

//inputDb = data data susu
function getMilkByName(inputDb, milkName) {
  // Code here
  let result = [];
  for (let i = 0; i < inputDb.length; i++) {
    // saya akan melakukan pengecekan, apakah inpudDb[i].name === milkName
    if (inputDb[i].name === milkName) {
      // inpudDb[i] akan saya push kedalam result
      result.push(inputDb[i]);
    }
  }

  return result;
}

// console.log(
//   getMilkByName(
//     [
//       { name: "Indomilk", id: "IDM-001", daysBeforeExp: 10 },
//       { name: "Ultramilk", id: "UTM-001", daysBeforeExp: 3 },
//       { name: "Indomilk", id: "IDM-002", daysBeforeExp: 15 },
//       { name: "Ultramilk", id: "UTM-002", daysBeforeExp: 1 },
//       { name: "Indomilk", id: "IDM-003", daysBeforeExp: 5 },
//       { name: "Ultramilk", id: "UTM-003", daysBeforeExp: 8 },
//       { name: "Bendera", id: "BDR-001", daysBeforeExp: 5 },
//     ],
//     "Indomilk"
//   )
// );
// [
//   { name: 'Indomilk', id: 'IDM-001', daysBeforeExp: 10 },
//   { name: 'Indomilk', id: 'IDM-002', daysBeforeExp: 15 },
//   { name: 'Indomilk', id: 'IDM-003', daysBeforeExp: 5 }
// ]

function firstToSell(inputDb) {
  // Code here

  // result = inputDb[0]
  let result = inputDb[0]; //  { name: "Indomilk", id: "IDM-001", daysBeforeExp: 10 },

  // saya akan looping dari index 1
  for (let i = 1; i < inputDb.length; i++) {
    // saya akan melakukan pengecekan, apakah result.daysBeforeExp > inputDb[i].daysBeforeExp. jika lebih besar, maka result akan saya reassign dengan inputDb[i].
    if (result.daysBeforeExp > inputDb[i].daysBeforeExp) {
      result = inputDb[i]; // { name: "Indomilk", id: "IDM-003", daysBeforeExp: 5 },
    }
  }

  return result;
}

// console.log(
//   firstToSell([
//     { name: "Indomilk", id: "IDM-001", daysBeforeExp: 10 },
//     { name: "Indomilk", id: "IDM-002", daysBeforeExp: 15 },
//     { name: "Indomilk", id: "IDM-003", daysBeforeExp: 5 },
//   ])
// );
// { name: 'Indomilk', id: 'IDM-003', daysBeforeExp: 5 }

var database = [
  { name: "Indomilk", id: "IDM-001", daysBeforeExp: 10 },
  { name: "Ultramilk", id: "UTM-001", daysBeforeExp: 3 },
  { name: "Indomilk", id: "IDM-002", daysBeforeExp: 15 },
  { name: "Ultramilk", id: "UTM-002", daysBeforeExp: 1 },
  { name: "Indomilk", id: "IDM-003", daysBeforeExp: 5 },
  { name: "Ultramilk", id: "UTM-003", daysBeforeExp: 8 },
  { name: "Bendera", id: "BDR-001", daysBeforeExp: 5 },
];

function updateDb(inputDb, sell) {
  let result = [];

  // kita looping inputDb

  for (let i = 0; i < inputDb.length; i++) {
    // kita lakukan pengcekan, apakah inputDb[i] !== sell
    // kita akan push inputDb[i] kedalam result
    // ngcek id susu
    if (inputDb[i].id !== sell.id) {
      result.push(inputDb[i]);
    }
  }

  return result;
}

let filterSusuYangMauDijual = getMilkByName(database, "Indomilk");
let susuYangDijual = firstToSell(filterSusuYangMauDijual);
console.log(susuYangDijual);
// { name: 'Indomilk', id: 'IDM-003', daysBeforeExp: 5 }
console.log(updateDb(database, susuYangDijual));
// [
//   { name: 'Indomilk', id: 'IDM-001', daysBeforeExp: 10 },
//   { name: 'Ultramilk', id: 'UTM-001', daysBeforeExp: 3 },
//   { name: 'Indomilk', id: 'IDM-002', daysBeforeExp: 15 },
//   { name: 'Ultramilk', id: 'UTM-002', daysBeforeExp: 1 },
//   { name: 'Ultramilk', id: 'UTM-003', daysBeforeExp: 8 },
//   { name: 'Bendera', id: 'BDR-001', daysBeforeExp: 5 }
// ]

// let milkToSell = firstToSell(getMilkByName(database, "Indomilk"));
// database = updateDb(database, milkToSell);
// console.log(milkToSell);
// console.log(database);
