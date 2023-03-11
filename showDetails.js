const fetchUrl = `https://restcountries.com/v3.1/name/{name}?fullText=true`

const countriesInput = document.getElementById("countries");

const infoBox = document.getElementById("infoBox");


countriesInput.addEventListener("change", () => {
    if(countriesInput.value != ""){

        fetch(`https://restcountries.com/v3.1/name/${countriesInput.value}?fullText=true`).then(responce => responce.json()).then(data => {
            // console.log(data);

            const {common, official} = data[0].name;
            const capital = data[0].capital[0];
            const {png} = data[0].flags;
            const region = data[0].region;
            const area = data[0].area;
            const population = data[0].population;
            const lat = data[0].capitalInfo.latlng[0];
            const lng = data[0].capitalInfo.latlng[1];
            const logo = data[0].coatOfArms.png;

            infoBox.innerHTML = `
                <h1 class="country_name">${common}</h1>
                <p class="official_name">${official}</p>
                <img class="flag" src="${png}" alt="">
                <img class="cons" src="${logo}" alt="">

                <div class="more">
                    <div class="left">
                        <h3>Capital: ${capital}</h3>
                        <h3>Region: ${region}</h3>
                        <h3>Area: ${area} SqKm</h3>
                        
                    </div>
                    <div class="right">
                        <h3>Population: ${population}</h3>
                        <h3>Latitude: ${lat}</h3>
                        <h3>Longitude: ${lng}</h3>
                    </div>
                </div>`
            
        }).catch(err => {
            infoBox.innerHTML = `<h1>${err.message}</h1>`;
        })
        
    }
})