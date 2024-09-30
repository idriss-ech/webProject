const API_KEY = "a68dd5e2b5f426ebb259c6d836418027";
const unit = "metric";

const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherState = document.getElementById("weatherState");
const loadingElement = document.getElementById('loading');
const alertbox = document.querySelector('.alertBox')

async function getWeather() {
    const serachCity = document.getElementById("serachCity").value;
    loadingElement.classList.remove('hidden');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${serachCity}&appid=${API_KEY}&units=${unit}`)

        if (!response.ok) throw new Error('city not found')

        const data = await response.json();
        console.log(data)
        temperature.textContent = Math.round(data.main.temp);
        description.textContent = data.weather[0].main;
        city.textContent = data.name;
        humidity.textContent = data.main.humidity;
        windSpeed.textContent = data.wind.speed;
        switch (description.textContent) {
            case 'Clear':
                weatherState.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 28 28"><path fill="#eab308" d="M14 2a.75.75 0 0 1 .75.75v1.496a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 14 2m0 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-1.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m11.25-3.75a.75.75 0 0 0 0-1.5h-1.496a.75.75 0 0 0 0 1.5zM14 23.004a.75.75 0 0 1 .75.75v1.496a.75.75 0 0 1-1.5 0v-1.496a.75.75 0 0 1 .75-.75M4.25 14.75a.75.75 0 0 0 0-1.5H2.751a.75.75 0 0 0 0 1.5zm.97-9.531a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m1.06 17.56a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06zm16.5-17.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06M21.72 22.78a.75.75 0 0 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 1.06z"/></svg>';
                break;
            case 'Clouds':
                weatherState.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00ccff" d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353C9 20.815 10.247 22 11.786 22z"/><path fill="#00ccff" d="M21.551 14.55a5.261 5.261 0 0 0-.751-.486c-.66-2.101-2.686-3.564-4.99-3.564c-2.754 0-5.124 2.1-5.212 4.87c-1.321.37-2.41 1.342-2.867 2.63H6.286C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236c.284 0 .562.028.83.08a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 .78-.16 1.522-.449 2.197"/></svg>'
                break;
            case 'Drizzle':
                weatherState.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#0284c7" d="M12 3.001c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 11.314a3.687 3.687 0 0 1-3.692 3.682h-.582l-.003.004h-.264a.8.8 0 0 1-.083.167l-1 1.5a.75.75 0 0 1-1.248-.832l.559-.839h-1.83l-.002.004h-.397a.8.8 0 0 1-.083.166l-1 1.5a.75.75 0 1 1-1.248-.831l.56-.839H8.986L8.985 15h-.527a.8.8 0 0 1-.084.167l-1 1.5a.75.75 0 0 1-1.248-.832l.56-.839A3.687 3.687 0 0 1 3 11.314A3.687 3.687 0 0 1 6.693 7.63h.08C7.035 5.08 8.831 3 12 3m0 1.498c-2.071 0-3.877 1.633-3.877 3.889c0 .357-.319.638-.684.638h-.69c-1.261 0-2.284 1.001-2.284 2.236S5.488 13.5 6.75 13.5h10.5c1.261 0 2.284-1.002 2.284-2.237s-1.023-2.236-2.284-2.236h-.69c-.365 0-.684-.28-.684-.638c0-2.285-1.806-3.89-3.877-3.89M7.126 18.834a.75.75 0 1 0 1.248.832l1-1.5a.75.75 0 1 0-1.248-.832zm4.208 1.04a.75.75 0 0 1-.208-1.04l1-1.5a.75.75 0 1 1 1.248.832l-1 1.5a.75.75 0 0 1-1.04.208"/></svg>'
                break;
            case 'Mist':
                weatherState.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 20 20"><path fill="#0284c7" d="M6.5 15.024h7a.5.5 0 0 1 .09.992l-.09.008h-7a.5.5 0 0 1-.09-.992zm-1.996-2h10.992a.5.5 0 0 1 .091.992l-.09.008H4.503a.5.5 0 0 1-.504-.5a.5.5 0 0 1 .413-.491zm5.496-10c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.498 17 7.735 17 9.261s-1.286 2.763-2.872 2.763H5.872C4.286 12.024 3 10.787 3 9.261c0-1.469 1.192-2.67 2.697-2.758l.237-.005C6.139 4.586 7.535 3.024 10 3.024m0 1c-1.65 0-3.087 1.27-3.087 3.025c0 .278-.254.497-.545.497h-.55C4.814 7.546 4 8.324 4 9.285c0 .96.814 1.74 1.818 1.74h8.364c1.004 0 1.818-.78 1.818-1.74s-.814-1.74-1.818-1.74h-.55c-.29 0-.545-.218-.545-.496c0-1.777-1.438-3.025-3.087-3.025"/></svg>'
                break;
            case 'Rain':
                weatherState.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#0284c7" d="M4.5 13.59c.5.28.64.91.37 1.37c-.28.48-.87.64-1.37.37A4.98 4.98 0 0 1 1 11a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a1 1 0 0 1-1-1a1 1 0 0 1 1-1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3c0 1.11.6 2.08 1.5 2.6zm5-2.59h3l-2 4h2l-3.75 7l.75-5H7zm8 7.67c0 1.29-1 2.33-2.25 2.33S13 19.96 13 18.67c0-1.55 2.25-4.17 2.25-4.17s2.25 2.62 2.25 4.17"/></svg>'
                break;
            case 'Snow':
                weatherState.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#0284c7" d="M6.5 19q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T6.5 19m3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T9.5 22m3-3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T12.5 19m6 0q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T18.5 19m-3 3q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888T15.5 22m-8-7q-2.275 0-3.887-1.612T2 9.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 1q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 10.5q0 1.875-1.312 3.188T17.5 15zm0-2h10q1.05 0 1.775-.725T20 10.5t-.725-1.775T17.5 8H16V7q0-1.65-1.175-2.825T12 3q-1.2 0-2.187.65T8.325 5.4l-.25.6H7.45q-1.425.05-2.437 1.063T4 9.5q0 1.45 1.025 2.475T7.5 13m4.5-2.5"/></svg>'
                break;
        }

    }
    catch (error) {
        document.querySelector('.msg').textContent = error.message;
        alertbox.classList.remove('hidden');
        
    }
    finally {
        // Masquer l'animation de chargement
        loadingElement.classList.add('hidden');
    }

}

document.getElementById('cancelBtn').addEventListener('click',()=>{
    alertbox.classList.add('hidden')

})



