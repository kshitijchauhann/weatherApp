const city = document.getElementById('city');
const time = document.getElementById('time');
const tempCelcius = document.getElementById('temp-cel');
const errorMessage = document.getElementById('error');
const feel = document.getElementById('feelslike');

async function weather(cityName) {
    try {

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee197a4b155b4d3d843153413241904&q=${cityName}`, {mode: 'cors'});
        const data = await response.json();
        console.log(data);
        city.textContent = `${data.location.name}`;
        time.textContent = `Local Time: ${data.location.localtime}`;
        tempCelcius.textContent = `Temperature: ${data.current.temp_c} C`;
        feel.textContent = `Feels like ${data.current.feelslike_c} C`;
    } catch(error) {
        console.log(error);
        throw new Error('City not found. Please enter a valid city name.');
    }
}


document.getElementById('search-button').addEventListener('click', async () => {
    try {
        const cityName = document.getElementById('search').value;
        await weather(cityName);
    } catch(error) {
        errorMessage.textContent = `${error}`;
    }
});