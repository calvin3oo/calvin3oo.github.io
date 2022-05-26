//fetch data from url 
const url = 'https://byui-cit230.github.io/weather/data/towndata.json';
const townsToShow = ['Soda Springs', 'Fish Haven', 'Preston'];

const main = async() => {
    const response = await fetch(url).catch(error => alert(error));
    const towns = (await response.json().catch(error => alert(error))).towns;

    var container = document.getElementById('content-container');
    
    towns.forEach((town) => {
        if(!townsToShow.includes(town.name)) return;

        var eventsHTML = "";
        town.events.forEach(event => {
            if(event!==undefined) eventsHTML+=`<li>${event}</li>`;
        })

        container.innerHTML += `
        <div class="towngrid" id="${town.name.replaceAll(' ', '')}">
            <div class="towngrid-top">
                <div class="town-title"> ${town.name}</div>
                <div class="town-motto"> ${town.motto}</div>
            </div>
            <div class="towngrid-img">
                <img class="town-image" src="./images/home/${town.photo}" alt="generic ${town.name} photo">
            </div>
            <div class="towngrid-content">
                <ul>
                    <li>Year Founded: ${town.yearFounded}</li>
                    <li>Population: ${town.currentPopulation}</li>
                    <li>Annual Rainfall: ${town.averageRainfall}</li>
                </ul>
            </div>
            <div class="events">
                <h3>Events:</h3>
                <hr>
                <ul>
                    ${eventsHTML}
                </ul>
            </div>
        </div>
        `;;
    })
}

main();