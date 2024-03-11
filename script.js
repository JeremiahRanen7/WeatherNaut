let city_search = document.getElementById("city-input");
let search = document.querySelector(".search");
let city_name = document.getElementById("city-name");
let description = document.getElementById("description");
let temperature = document.getElementById("temperature");
let direction = document.querySelector(".dir-value");
let speed = document.querySelector(".speed-value");
let sunrise = document.querySelector(".sunrise")
let sunset = document.querySelector(".sunset")
let image = document.querySelector(".image")

search.addEventListener("click", function() {
    let val = city_search.value;
    let url = `https://api.weatherbit.io/v2.0/current?&city=${val}&key=0d40762281104369aeca4b03e592d9cb`;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let cityName = data.data[0].city_name;
        let temp = data.data[0].temp;
        let desc = data.data[0].weather.description.toLowerCase();
        let formattedTemp = `${temp}°C`;
        let dir = data.data[0].wind_dir;
        console.log(dir);
        let spd = data.data[0].wind_spd
        console.log(spd);
        let formattedDir = `${dir}°`
        let formattedSpd = `${spd} Kph`
        let rise = data.data[0].sunrise;
        let set = data.data[0].sunset;
        let formattedRise = `${rise} AM`;
        let formattedSet = `${set} PM`;
        city_name.textContent=cityName
        temperature.textContent=formattedTemp
        description.textContent=desc
        direction.textContent=formattedDir
        speed.textContent=formattedSpd
        sunrise.textContent=formattedRise
        sunset.textContent=formattedSet
        if (desc=="clear sky"){
            image.setAttribute("src", "icons/sun.png")
        }
        else if(desc=="haze"){
            image.setAttribute("src", "icons/haze.png")
        }
        else if(desc=="fog"){
            image.setAttribute("src", "icons/fog.png")
        }
        else if(desc=="overcast clouds"){
            image.setAttribute("src", "icons/overcast.png")
        }
        else if(desc=="broken clouds"){
            image.setAttribute("src", "icons/brokenclouds.png")
        }
        else if(desc=="partly cloudy"){
            image.setAttribute("src", "icons/partly cloudy.png")
        }
        else if(desc=="rainy" || desc=="drizzle"){
            image.setAttribute("src", "icons/rainy.png")
        }
        else if(desc=="snowy"){
            image.setAttribute("src", "icons/snowy.png")
        }
        else if(desc=="cloudy"){
            image.setAttribute("src", "icons/cloudy.png")
        }
        else if(desc=="scattered clouds"){
            image.setAttribute("src", "icons/scattered.png")
        }
        else if(desc=="few clouds"){
            image.setAttribute("src", "icons/fewclouds.png")
        }
        else{
            image.setAttribute("src", "icons/cloudy.png")
        }
    })
    .catch((err) => {
        console.log(err.message);
    });
});
