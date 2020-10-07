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

var data1 = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list));

let a = document.createElement('a');
a.href = 'data:' + data1;
a.download = 'data.json';
a.innerHTML = 'download JSON';

let download = document.getElementById('download');
download.appendChild(a);

let container = document.getElementById("container");


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
        li.style.listStyleImage = "url(../Image/icons8-file-48.png)";
        let btn = document.createElement("button");
        btn.style.alignItems = "right";
        btn.textContent = "delete";
        btn.className = "deleteBtn";
        ul.append(li);
        li.append(btn);
      } else {
        let btn = document.createElement("button");
        let btn2 = document.createElement("button");
        btn.textContent = "-";
        btn.style.alignItems = "left";
        btn.id = "btn";
        btn2.textContent = "delete";
        btn2.style.alignItems = "right";
        btn2.id = "deleteBtn";

        let li = document.createElement("li");
        li.id = 'folder';
        li.innerHTML = key;
        li.style.listStyleImage = "url(../Image/icons8-folder-48.png)";

        ul.append(li);
        li.prepend(btn);
        li.append(btn2);

        if (typeof directoryTree[key] === "object") {
          let childrenUl = getKey(directoryTree[key]);
          li.append(childrenUl);
        }
      }
    }
    return ul;
  }
}
objectTraversal(container, data);

container.addEventListener("click", changeBtn);

function changeBtn(e) {
  if (e.target.textContent === "-") {
    e.target.textContent = "+";
    e.target.className = "button2";
  } else if (e.target.textContent === "+") {
    e.target.textContent = "-";
    e.target.className = "button1";
  }
}
container.addEventListener("click", itemDisplay);

function itemDisplay(event) {
  if (event.target.id != "btn") {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector("ul");
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
}

container.addEventListener("click", deleteElement);

function deleteElement (event) {
  let li = event.target.parentNode.querySelector('button').previousSibling;
  console.log(li);
  if(event.target.textContent === 'delete'){
    console.log('ghbdtn');
    deleteBtn.parentNode.remove();
  }
  
}

// function pictureAssignment(key) {
// }

// function addKontextMenu (event){
// }

// function addNewDirectory(params) {
// }

// function addNewFile(params) {
// }

// function download (event) {
// }

// function delate (event) {
// }
