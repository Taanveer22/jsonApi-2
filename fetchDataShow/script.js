console.log("connected");

// fetch data from jsonPlaceholder
function loadData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data));
}

// show data in the website
function displayData(paramData) {
    console.log(paramData);
  const usersList = document.querySelector("#users-list");
    console.log(usersList);
  for (let user of paramData) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = user.name;
    usersList.appendChild(li);
  }
}
