// Post Sıralama ve Post Ekleme
// Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

let posts = ["post 1", "post 2"];

//! Callback
const listPosts = () => {
  posts.map((post) => {
    console.log(post);
  });
};

const addPost = (newPost, callback) => {
  posts.push(newPost);
  callback();
};

addPost("post 3", listPosts);

//! Promise
const listPosts = () => {
  posts.map((post) => {
    console.log(post);
  });
};

const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    reject("Bir hata oluştu");
  });
  return promise;
};

addPost("post 3")
  .then(() => {
    console.log("post 3 eklendi");
    listPosts();
  })
  .catch((err) => console.log(err));

//! Async-Await
const listPosts = () => {
  posts.map((post) => {
    console.log(post);
  });
};

const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    reject("Bir hata oluştu");
  });
  return promise;
};

async function showPosts() {
  try {
    await addPost("post 3");
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

showPosts();
