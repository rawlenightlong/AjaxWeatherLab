// const baseUrl = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ee1f44a4b1bd4badd8adbddf5f0d08d0"



// $.ajax(geocoder)
// .then((data) => {
//     $.ajax(`dfdfsfsdff${data.long}&${data.lat}`)
//     .then((finalData) =>  {
//         // render to the dom
//     })
// })

// const url = `${baseUrl}data/2.5/weather?q=${city}&APPID=${apiKey}`

let weatherData, userInput

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
        // $divCity.empty()
        const $divTemperature = $("div.temperature")
        // $divTemperature.empty()
        const $divFeelsLike = $("div.feelsLike")
        // $divFeelsLike.empty()
        const $divWeather = $("div.weather")
        // $divWeather.empty()

        console.log(weather.name)
        console.log(weather.weather[0].description)

        $divCity.append(` ${weather.name}`)
        $divTemperature.append(" " + Math.floor((((weather.main.temp-273.15)*1.8)+32)))
        $divFeelsLike.append(" " + Math.floor((((weather.main.temp-273.15)*1.8)+32)))
        $divWeather.append(weather.weather[0].description)


    })
}

weatherSearch("Los Angeles")



