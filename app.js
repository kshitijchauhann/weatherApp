const city = document.getElementById('city');
const time = document.getElementById('time');
const tempCelcius = document.getElementById('temp-cel');
const tempFarenheit = document.getElementById('temp-far');

async function weather() {
    try {

        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=ee197a4b155b4d3d843153413241904&q=udaipur');
        const data = await response.json();
        console.log(data);
        city.textContent = `City: ${data.location.name}`;
        time.textContent = `Time: ${data.location.localtime}`;
        tempCelcius.textContent = `Temperature(Celcius): ${data.current.temp_c}`;
        tempFarenheit.textContent = `Temperature(Farenheit): ${data.current.temp_f}`;
    } catch(error) {
        console.log(error);
    }
}

weather()