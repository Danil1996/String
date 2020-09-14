"use strict";
var list = [
  "/root/user1/file1.txt",
  "/root/user2/file15.txt",
  "/root/user1/folder1/file2.txt",
  "/root/user1/folder1/file3.mp4",
  "/root/user1/folder1/folder4",
  "/root/file4.txt",
  "/var/lib",
];
let data = composeDirectoryTree(list);

function objectTraversal(container, directoryTree) {
  container.append(getKey(directoryTree));

  function getKey(directoryTree) {
    let ul = document.createElement("ul");
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


    for (let li of container.querySelectorAll('li')) {
      let span = document.createElement('span');
      li.prepend(span);
      span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
    }

    //  ловим клики на всём дереве
    container.onclick = function(event) {

      if (event.target.tagName != 'SPAN') {
        return;
      }

      let childrenContainer = event.target.parentNode.querySelector('ul');
      if (!childrenContainer) return; // нет детей

      childrenContainer.hidden = !childrenContainer.hidden;
    }
