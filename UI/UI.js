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
    ul.style.listStyle = "none";
    for (let key in directoryTree) {
      if (typeof directoryTree[key] === "string") {
        key = `${key}.${directoryTree[key]}`;
        let li = document.createElement("li");
        li.innerHTML = key;
        ul.append(li);
        console.log(li);
        console.log(ul);
        console.log(key);
      } else {
        let btn = document.createElement("button");
        btn.textContent = "-";
        btn.style.alignItems = "left";
        btn.className = "button1";
        let li = document.createElement("li");
        li.innerHTML = key;
        ul.append(li);
        li.prepend(btn);
        console.log(li);
        console.log(ul);
        console.log(key);
      
      
      if (typeof directoryTree[key] === "object") {
        let childrenUl = getKey(directoryTree[key]);
        li.append(childrenUl);
      }
    }
  }
    return ul;
  }
}
let container = document.getElementById("container");
objectTraversal(container, data);

container.addEventListener('click', changeBtn)

function changeBtn(e) {
  if(e.target.textContent === '-'){
    e.target.textContent = '+';
    e.target.className = 'button2';
  } else if (e.target.textContent === '+'){
    e.target.textContent = '-';
    e.target.className = 'button1';

  }
}


// // функция для скрытия раскрытия папки
// for (let li of container.querySelectorAll("li")) {
//   let span = document.createElement("span");
//   li.prepend(span);
//   span.append(span.nextSibling);
// }

// container.onclick = function (event) {
//   if (event.target.tagName != "SPAN") {
//     return;
//   }

//   let childrenContainer = event.target.parentNode.querySelector("ul");
//   if (!childrenContainer) return;

//   childrenContainer.hidden = !childrenContainer.hidden;
// };

// function pictureAssignment(key) {
// }

// function addWindow (event){
// }

// function addNewDirectory(params) {
// }

// function addNewFile(params) { 
// }

// function download (event) {
// }

// function delate (event) {
// }


