let btn = document.querySelector('#button');
btn.addEventListener('click', () => {
    let cityname = document.querySelector('#cityname').value;
    console.log(cityname);
    const apikey = '3e11bf6ef7b760d21d0fd9ae8e1418cf';
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric`;

    async function checkweather() {
        const send = await fetch(apiurl + `&appid=${apikey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.cod === 200) {
                    var tempratur = data.main.temp;
                    let intNumberCeil = Math.ceil(tempratur);
                    document.querySelector('.temprature').innerHTML = `${intNumberCeil}°C`;
                    document.querySelector('.city').innerHTML = data.name;
                    document.querySelector('#wind').innerHTML = `${Math.ceil(data.wind.speed)} Km/h`;
                    document.querySelector('#humididty').innerHTML = `${Math.ceil(data.main.humidity)} %`;

                    var weathercondition = data.weather[0].main;
                    console.log(weathercondition);
                    var Weatherimg = document.querySelector('#Weatherimg');

                    // Update the src attribute directly based on the weather condition
                    if (weathercondition === 'Clear') {
                        Weatherimg.src = 'clear.png';
                    } else if (weathercondition === 'Clouds') {
                        Weatherimg.src = 'clouds.png';
                    } else if (weathercondition === 'Drizzle') {
                        Weatherimg.src = 'drizle.png';
                    } else if (weathercondition === 'Mist') {
                        Weatherimg.src = 'mist.png';
                    } else if (weathercondition === 'Rain') {
                        Weatherimg.src = 'rain.png';
                    } else if (weathercondition === 'Snow') {
                        Weatherimg.src = 'snow.png';
                    }else if (weathercondition === 'Smoke') {
                        Weatherimg.src = 'smoke.png';
                    }
                }
            });
    }

    checkweather();
});
