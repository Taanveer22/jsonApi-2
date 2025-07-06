console.log("connectd");

const loadPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  displayPosts(data);
};

function displayPosts(paramData) {
  console.log(paramData);
  const postsContainer = document.getElementById("posts-container");
  console.log(postsContainer);
  for (let post of paramData) {
    console.log(post);
    console.log(post.id);
    console.log(post.title);
    console.log(post.body);
    const postsDiv = document.createElement("div");
    postsDiv.classList.add("postStyle");
    postsDiv.innerHTML = `
                            <h3> id : ${post.id} </h3>
                            <h4> title : ${post.title} </h4>
                            <p> body : ${post.body} </p>
    `;
    postsContainer.appendChild(postsDiv);
  }
}

// http request post() method
const postMethod = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "post",
      body: "method",
      userId: 111,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  console.log(data);
};

// http request put() method
const putMethod = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    method: "PUT",
    body: JSON.stringify({
      id: 2,
      title: "put",
      body: "method",
      userId: 222,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = response.json();
  console.log(data);
};

// http request patch() method
const patchMethod = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
    method: "PATCH",
    body: JSON.stringify({
      title: "patch",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = response.json();
  console.log(data);
};

// http request delete method
const deleteMethod = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
};
