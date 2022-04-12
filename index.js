fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
    let postsArr = data.slice(0, 5)
        console.log(postsArr)
    let postsHtml = ""
    for (let post of postsArr) {
        postsHtml += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
        document.getElementById("posts-container").innerHTML = postsHtml
    }
})


// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//     let postsArr = data.slice(0, 5)
//     postsArr.map(function(post){
//         postsHtml = `
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             <hr />
//         `
//         document.getElementById("posts-container").innerHTML += postsHtml
//     })
// })