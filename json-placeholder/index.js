const main = document.getElementById('main');
const loadComment = () => {
    main.innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => showComment(data.slice(0, 50)))
}

const showComment = (comments) => {
    for (const comment of comments) {
        // console.log(comment)
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('bg-secondary');
        div.classList.add('m-3');
        div.classList.add('p-3');
        div.innerHTML = `
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
        <p>Email: ${comment.email}</p>
        <p>Id: ${comment.id}</p>
        <button class="btn btn-warning" onclick="showDetail('${comment.id}')">See Detail</button>
        `
        main.appendChild(div);

    }
}

const showDetail = (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            main.innerHTML = "";
            const div = document.createElement('div');
            div.classList.add('col-lg-3');
            div.classList.add('bg-secondary');
            div.classList.add('m-3');
            div.classList.add('p-3');
            div.innerHTML = `
            <h4>${data.name}</h4>
            <p>${data.body}</p>
            <p>Email: ${data.email}</p>
            <p>Id: ${data.id}</p>
        `
            main.appendChild(div);

        })
}