

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
        const $divTemperature = $("div.temperature")
        const $divFeelsLike = $("div.feelsLike")
        const $divWeather = $("div.weather")
       
        // console.log(weather.name)
        // console.log(weather.weather[0].description)

        $divCity.append(` ${weather.name}`)
        $divTemperature.append(" " + Math.floor((((weather.main.temp-273.15)*1.8)+32)))
        $divFeelsLike.append(" " + Math.floor((((weather.main.temp-273.15)*1.8)+32)))
        $divWeather.append(weather.weather[0].description)
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



