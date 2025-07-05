console.log("connected");

// system 01
console.log("system 01");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// system 02
console.log("system 02");
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));

// system 03
console.log("system 03");
function loadData() {
  const webAddress = "https://jsonplaceholder.typicode.com/comments/1";
  fetch(webAddress)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// system 04
console.log("system 04");
function loadUsers() {
  const address = "https://jsonplaceholder.typicode.com/users";
  fetch(address)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(paramData) {
  console.log(paramData);
}
