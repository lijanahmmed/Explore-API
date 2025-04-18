function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json().id)
        .then(data => console.log(data))
}

const loadData2 = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    console.log(data)
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data) {
    const ul = document.getElementById('user-list');
    const postsContainer = document.getElementById('posts-container');
    postsContainer.classList.add('hidden')
    ul.classList.remove('hidden')
    for(const user of data){
        const li = document.createElement('li');
        li.innerHTML = `
        <p class="text-xl">${user.name}</p>`;
        ul.appendChild(li)
    }
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');
    const ul = document.getElementById('user-list');
    postsContainer.classList.remove('hidden')
    ul.classList.add('hidden')
    for(const post of posts){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="ml-5 p-5 mt-5 border-2 radius-xl bg-blue-200">
        <h4 class="text-2xl">User- ${post.id}</h4>
        <h5 class="text-xl">Post : ${post.title}</h5>
        <p>Post Description : ${post.body} </p>
        </div>
        `;
        postsContainer.appendChild(div)
    }
}