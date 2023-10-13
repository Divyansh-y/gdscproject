
const samplePosts = [
    { username: "Ajay", content: "I just completed a 5-mile run today!", Upvotes: 0, Downvotes: 0 },
];

function displayPosts(posts) {
    const forumSection = document.querySelector(".forum");
    forumSection.innerHTML = "";

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
            <button onclick="upvoteP(${index})">Upvote</button>
            <span>${post.Upvotes}</span>
            <button onclick="downvoteP(${index})">Downvote</button>
            <span>${post.Downvotes}</span>
        `;
        forumSection.appendChild(postElement);
    });
}


function upvoteP(index) {
    samplePosts[index].Upvotes++;
    displayPosts(samplePosts);
}


function downvoteP(index) {
    samplePosts[index].Downvotes++;
    displayPosts(samplePosts);
}


document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const postContent = document.getElementById("postContent").value;

    if (username && postContent) {
        
        const newPost = { username, content: postContent, Upvotes: 0, Downvotes: 0 };

        
        samplePosts.push(newPost);

        
        document.getElementById("username").value = "";
        document.getElementById("postContent").value = "";

        
        displayPosts(samplePosts);
    }
});

// Initial display of forum posts
displayPosts(samplePosts);
