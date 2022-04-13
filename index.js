let postsArr = []

function renderPosts() {
    let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        renderPosts()
    })

document.getElementById("new-post").addEventListener("submit", (e) => {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)      
    .then(res => res.json())
    .then(data => {
        postsArr.unshift(data)
        renderPosts()
    })    
 })