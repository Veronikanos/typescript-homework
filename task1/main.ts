interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function renderPosts(posts: IPost[]): void {
  const postsList: HTMLElement = document.querySelector('#posts')!;
  posts.forEach((post: IPost) => {
    const li: HTMLElement = document.createElement('li');
    li.innerHTML = `
      <h2>${post.title}</h2>
			<span>User id: ${post.userId}</span>
      <p>${post.body}</p>
    `;
    postsList?.appendChild(li);
  });
}

async function getPosts(): Promise<IPost[]> {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const posts: IPost[] = await response.json();
  return posts;
}

(async () => {
  try {
    const posts: IPost[] = await getPosts();
    renderPosts(posts);
  } catch (error) {
    console.error(error);
  }
})();
