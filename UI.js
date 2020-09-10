"use strict";

let data = {
  root: {
    user1: {
      file1: "txt",
      folder1: {
        file2: "txt",
        file3: "mp4",
        folder4: {},
      },
    },
    user2: {
      file15: "txt",
    },
    file4: "txt",
  },
  var: {
    lib: {},
  },
};

function objectTraversal(container, directoryTree) {
  container.append(getKey(directoryTree));

  function getKey(directoryTree) {
    let ul = document.createElement("ul");
    ul.id = "tree";
    ul.className = "tree";
    for (let key in directoryTree) {
      let li = document.createElement("li");
      li.innerHTML = key;
      ul.append(li);
      if (typeof directoryTree[key] === "object") {
        let childrenUl = getKey(directoryTree[key]);
        li.append(childrenUl);
      }
    }
    return ul;
  }
}
let container = document.getElementById("container");
console.log(objectTraversal(container, data));

