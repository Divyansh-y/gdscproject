// Sample data for forum posts (you can replace this with dynamic data)
const samplePosts = [
    { username: "Ajay", content: "I just completed a 5-mile run today!", Upvotes: 0, Downvotes: 0 },
];

// Function to display forum posts
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

// Function to handle upvoting a post
function upvoteP(index) {
    samplePosts[index].Upvotes++;
    displayPosts(samplePosts);
}

// Function to handle downvoting a post
function downvoteP(index) {
    samplePosts[index].Downvotes++;
    displayPosts(samplePosts);
}

// Function to handle form submission
document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const postContent = document.getElementById("postContent").value;

    if (username && postContent) {
        // Create a new post object
        const newPost = { username, content: postContent, Upvotes: 0, Downvotes: 0 };

        // Add the new post to the samplePosts array (or send it to a server)
        samplePosts.push(newPost);

        // Clear the form
        document.getElementById("username").value = "";
        document.getElementById("postContent").value = "";

        // Refresh the forum to display the new post
        displayPosts(samplePosts);
    }
});

// Initial display of forum posts
displayPosts(samplePosts);
