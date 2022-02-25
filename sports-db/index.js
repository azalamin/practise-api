const loadSports = async() => {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php');
    const data = await response.json();
    if (response) {
        hideSpinner()
    }
    displaySports(data.sports);
}
loadSports()

const hideSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = "none"
}

function displaySports(sports) {
    const main = document.getElementById('main')
    sports.forEach(sport => {
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('m-3');
        div.innerHTML = `
        <img src="${sport.strSportThumb}" />
        <img src="${sport.strSportIconGreen}" />
        <h4>${sport.strSport}</h4>
        <p>${sport.strFormat}</p>
        <p>${sport.strSportDescription.slice(0, 150)}</p>
        `
        main.appendChild(div)
    });
}