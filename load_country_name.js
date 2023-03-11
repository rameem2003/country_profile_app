const countriesBox = document.getElementById("countries");
const url = `https://restcountries.com/v3.1/all`;

fetch(url).then(responce => responce.json()).then(countries => {
    countries.map(country => {
        const options = document.createElement("option");
        options.value = country.name.common;
        options.innerHTML = country.name.common;

        countriesBox.appendChild(options);
    })
    
})