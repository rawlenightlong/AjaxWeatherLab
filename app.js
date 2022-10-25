

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "ee1f44a4b1bd4badd8adbddf5f0d08d0"


console.log(baseUrl, apiKey)

function weatherSearch(city, state){
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},us&limit=5&appid=ee1f44a4b1bd4badd8adbddf5f0d08d0`
    console.log(url)

    $.ajax(url)
    .then((coordinates) => {
        console.log(coordinates[0].lat)
        console.log(coordinates[0].lon)

        const lat = coordinates[0].lat
        const lon = coordinates[0].lon
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ee1f44a4b1bd4badd8adbddf5f0d08d0`

        $.ajax(weatherUrl)
        .then((weather) => {
            
            const $divCity = $("div.city")
            $divCity.empty()
            const $divTemperature = $("div.temperature")
            $divTemperature.empty()
            const $divFeelsLike = $("div.feelsLike")
            $divFeelsLike.empty()
            const $divWeather = $("div.weather")
            $divWeather.empty()

            console.log(weather)

            $divCity.append(`Weather in: ${weather.name}, ${state.toUpperCase()}`)
            $divTemperature.append("Temperature: " + Math.floor((((weather.main.temp-273.15)*1.8)+32)) + " degrees Fahrenheit")
            $divFeelsLike.append("Feels Like: " + Math.floor((((weather.main.feels_like-273.15)*1.8)+32)) + " degrees Fahrenheit") 
            $divWeather.append("Weather Description: " + weather.weather[0].description)
        })
    })
}



$("input[type=submit]").on("click", (event) => {
    // prevent refresh
    event.preventDefault()
    // grab text from input
    const cityText = $("input[type=text].city").val()
    const stateText = $("input[type=text].state").val()
    //update screen
    weatherSearch(cityText, stateText)
    
} )





