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
      if (item === '') {
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

      const element = array[i];
      const secondElement = array[i+1];
      if (secondElement == undefined){
        return object;
      }
      let a = element.length;
      let b = secondElement.length
      
      let maxLenghtArray = Math.max(a, b);
      
      for (let j = 0; j < maxLenghtArray; j++) {
        if(element[j] === secondElement[j]){
          object[`${element[j]}`] = {};
          continue;
        }else if(element[j] !== secondElement[j]){          
          object[`${element[j-1]}`] = element[j];
          object[`${secondElement[j-1]}`] = secondElement[j];
          continue;
        }
      }
     continue;
    }
    return object;
    }
    console.log(parseTree(arraySplit(splitElementArray(list))));
