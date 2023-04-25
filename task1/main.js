"use strict";
function renderPosts(posts) {
    // const postsList = document.querySelector('#posts')!;
    const postsList = document.querySelector('#posts');
    console.log(postsList);
    if (postsList === null) {
        console.log('fgfdjhjf');
    }
    posts.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <h2>${post.title}</h2>
			<span>User id: ${post.userId}</span>
      <p>${post.body}</p>
    `;
        postsList === null || postsList === void 0 ? void 0 : postsList.appendChild(li);
    });
}
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
}
(async () => {
    try {
        const posts = await getPosts();
        renderPosts(posts);
    }
    catch (error) {
        console.error(error);
    }
})();
