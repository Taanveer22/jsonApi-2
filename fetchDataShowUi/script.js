console.log("connected");

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}
loadPosts();

function displayPosts(paramData) {
  //   console.log(paramData);
  const postsContainer = document.getElementById("posts-container");
  //   console.log(postsContainer);
  for (let user of paramData) {
    console.log(user);
    console.log(user.id);
    console.log(user.title);
    console.log(user.body);
    const postsDiv = document.createElement("div");
    postsDiv.classList.add("postStyle");
    postsDiv.innerHTML = `
                    <h2>id :${user.id}</h2>
                    <h3>title :${user.title}</h3>
                    <p>body :${user.body}</p>    `;
    postsContainer.appendChild(postsDiv);
  }
}
