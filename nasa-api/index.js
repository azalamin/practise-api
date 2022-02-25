function loadCats() {
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => {
            document.getElementById('spinner').style.display = "block"
            return res.json()
        })
        .then(cats => {
            document.getElementById('spinner').style.display = "none"
            const main = document.getElementById('main')
            cats.forEach(cat => {
                console.log(cat)
                const div = document.createElement('div');
                div.classList.add('col-lg-3');
                div.classList.add('m-3');
                div.innerHTML = `
            <img class="img-fluid" src="${cat.image.url}" />
            <h4>${cat.name}</h4>
            <p>${cat.description}</p>
            `
                main.appendChild(div)
            });
        })
        .catch(error => console.log(error))
}