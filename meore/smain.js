document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts-container');

  // Fetch მონაცემების გაწვდვა
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())  // JSON ფორმატში გარდაქმნა
      .then(posts => {
          posts.forEach(post => {
              // შექმენით HTML ელემენტი თითოეული პოსტისათვის
              const postElement = document.createElement('div');
              postElement.classList.add('post');

              // დაამატეთ პოსტის სათაური
              const titleElement = document.createElement('div');
              titleElement.classList.add('post-title');
              titleElement.textContent = post.title;
              
              // დაამატეთ პოსტის სხეული
              const bodyElement = document.createElement('div');
              bodyElement.classList.add('post-body');
              bodyElement.textContent = post.body;

              // დაამატეთ სათაური და სხეული პოსტის ელემენტში
              postElement.appendChild(titleElement);
              postElement.appendChild(bodyElement);

              // დაამატეთ პოსტის ელემენტი კონტეინერში
              postsContainer.appendChild(postElement);
          });
      })
      .catch(error => {
          console.error('Error fetching posts:', error);
      });
});
