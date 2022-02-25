const loadUser = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}
loadUser()
const displayUser = (users) => {
    const main = document.getElementById('main')
    users.forEach(user => {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('m-3');
        div.innerHTML = `
        <img class="img-fluid" src="${user.picture.large}" />
        <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <p class="mb-0">Location: ${user.location.country} ${user.location.city}</p>
        <p class="mb-0">Phone: ${user.cell}</p>
        <p class="mb-0">Gender: ${user.gender}</p>
        <p class="mb-0">Email: ${user.email}</p>
        <p class="mb-0">Date: ${user.dob.date}</p>
        `
        main.appendChild(div)

    })
}