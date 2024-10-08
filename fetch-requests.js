/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
async function getPosts() {
  let url = 'http://localhost:5000/posts';
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

getPosts();
/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
