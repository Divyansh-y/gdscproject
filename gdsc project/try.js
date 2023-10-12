// Sample data for forum posts (you can replace this with dynamic data)
let samplePosts = JSON.parse(localStorage.getItem("forumPosts")) || [];

// Function to display forum posts
function displayPosts(posts) {
    const forumSection = document.querySelector(".forum");
    forumSection.innerHTML = "";

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
        `;
        forumSection.appendChild(postElement);
    });
}

// Function to handle form submission
document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const postContent = document.getElementById("postContent").value;

    if (username && postContent) {
        // Create a new post object
        const newPost = { username, content: postContent };

        // Add the new post to the samplePosts array
        samplePosts.push(newPost);

        // Store the updated posts in local storage
        localStorage.setItem("forumPosts", JSON.stringify(samplePosts));

        // Clear the form
        document.getElementById("username").value = "";
        document.getElementById("postContent").value = "";

        // Refresh the forum to display the new post
        displayPosts(samplePosts);
    }
});

// Initial display of forum posts
displayPosts(samplePosts);
