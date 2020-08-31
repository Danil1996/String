// Test2 build directroy tree from "folder" like list of strings
// Input array:
var list = [
  "/root/user1/file1.txt",
  "/root/user2/file15.txt",
  "/root/user1/folder1/file2.txt",
  "/root/user1/folder1/file3.mp4",
  "/root/user1/folder1/folder4/",
  "/root/file4.txt",
  "/var/lib/",
];

// Expected result easy version:
// {
//     root:{
//         user1:{
//             file1:'txt',
//             folder1:{
//                 file2:'txt',
//                 file3:'mp4',
//                 folder4:{}
//             }
//         },
//         user2:{
//             file15:"txt"
//         },
//         "file4": "txt"
//     },
//     var:{
//         lib:{}
//     }
// }

function splitElementArray(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const spliteElement = element.split("/");
    array.splice(i, 1, spliteElement);
    continue;
  }
  return array;
}

function arraySplit(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element.forEach((item, index, element) => {
      if (item === "") {
        element.splice(index, 1);
        return element;
      }
    });
    continue;
  }
  return array;
}

function parseTree(array) {
  let object = {};

  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    let b = array[i + 1];
    if (b == undefined) {
      b = array[0];
    }

    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[j]) {
        if (object[a[j]] === a[j]) {
          continue;
        } else {
          object[a[j]] = {};
          continue;
        }
      } else if (b[j] === undefined) {
        object[a[j - 1]][a[j]] = {};
      } else if (a[j].lastIndexOf(".") >= 0) {
        let fileExtension = a[j].split(".");
        object[a[j - 1]] = { [fileExtension[0]]: fileExtension[1] };
      } else if (a[0] !== b[0]) {
        object[a[j]] = {};
      } else if (a[j] !== b[j]) {
        object[a[j - 1]][a[j]] = {};
        continue;
      }
    }
    continue;
  }
  return object;
}
console.log(parseTree(arraySplit(splitElementArray(list))));
