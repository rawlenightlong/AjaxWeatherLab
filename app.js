

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "ee1f44a4b1bd4badd8adbddf5f0d08d0"


console.log(baseUrl, apiKey)

function weatherSearch(city){
    const url = `${baseUrl}?q=${city}&APPID=${apiKey}`
    console.log(url)

    $.ajax(url)
    .then((weather) => {
        console.log(weather)

        const $divCity = $("div.city")
        $divCity.empty()
        const $divTemperature = $("div.temperature")
        $divTemperature.empty()
        const $divFeelsLike = $("div.feelsLike")
        $divFeelsLike.empty()
        const $divWeather = $("div.weather")
        $divWeather.empty()
        // console.log(weather.name)
        // console.log(weather.weather[0].description)

        $divCity.append(`Weather in: ${weather.name}`)
        $divTemperature.append("Temperature: " + Math.floor((((weather.main.temp-273.15)*1.8)+32)) + " degrees Fahrenheit")
        $divFeelsLike.append("Feels Like: " + Math.floor((((weather.main.feels_like-273.15)*1.8)+32)) + " degrees Fahrenheit") 
        $divWeather.append("Weather Description: " + weather.weather[0].description)
    })
}



$("input[type=submit]").on("click", (event) => {
    // prevent refresh
    event.preventDefault()
    // grab text from input
    const inputText = $("input[type=text]").val()
    //update screen
    weatherSearch(inputText)
    
} )

// weatherSearch("New York")



