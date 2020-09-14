// Test2 build directroy tree from "folder" like list of strings
// Input array:

var list = [
  "/root/user1/file1.txt",
  "/root/user2/file15.txt",
  "/root/user1/folder1/file2.txt",
  "/root/user1/folder1/file3.mp4",
  "/root/user1/folder1/folder4",
  "/root/file4.txt",
  "/var/lib",
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

/**
 *
 * @param {Array<String>} filePath
 */
function composeDirectoryTree(filePaths) {
  const directoryTree = {};
  for (let path of filePaths) {
    apendSinglPath(directoryTree, path);
  }
  return directoryTree;
}

function apendSinglPath(directoryTree, path) {
  let descriptors = path.split("/");
  let nonSpacesDescriptors = descriptors.filter(deleteEmptySpaces);
  let currentPosition = directoryTree;
  for (const descriptor of nonSpacesDescriptors) {
    const key = retrieveKey(descriptor);
    const value = retrieveValue(descriptor);
    if (key in currentPosition === false) {
      currentPosition[key] = value;
    }
    currentPosition = currentPosition[key];
  }
  return directoryTree;
}

function deleteEmptySpaces(descriptors) {
 return descriptors !== '';
  }


function retrieveKey(descriptor) {
  let arrayOfKeyValuePair = descriptor.split(".");
  return arrayOfKeyValuePair[0];
}

function retrieveValue(descriptor) {
  let arrayOfKeyValuePair = descriptor.split(".");
  return arrayOfKeyValuePair[1] || {};
}

const directoryTree = composeDirectoryTree(list);
console.log(JSON.stringify(directoryTree, null, " "));
