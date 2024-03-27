const changeLocation = document.getElementById('changeLocation')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weatherIcon')
const overlay = document.getElementById('overlay')
const header = document.getElementById('header')
const headImg = document.getElementById("headImg")

function loader (state){
    if(state){
        overlay.classList.remove('d-none')
    }else{
        overlay.classList.add('d-none')
        
    } 
}

changeLocation.city.focus()
const updateUi = async (data)=>{
    console.log(data)
    const city = data.name
    const country = data.sys.country
    const main = data.weather[0].main
    const temp = data.main.temp
    

    details.innerHTML = ` 
    <h5 class="mb-3">${city}, ${country}</h5>
    <p class="mb-3">${main}</p>
    <div class="display-4 mb-3">
      <span>TEMP</span>
      <span>${Math.round(temp)}&deg;C</span>
    </div>`

    if(card.classList.contains("d-none")){
        card.classList.remove("d-none")
        // overlay.classList.remove("d-none")
    }
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

}

const headerBlock = async () => {
    const data = await getData("Hazorasp")
    const city = data.name
    const country = data.sys.country
    const main = data.weather[0].main
    const temp = data.main.temp
    header.innerHTML = `${city}, ${country}, ${main}, TEMP,  ${Math.round(temp)}&deg;C
    ` 
    headImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}
headerBlock()

//get weather
const getWeather = async (city)=>{
    const data = await getData(city)
   
    return data
}
changeLocation.addEventListener("submit", (e)=>{
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then((data)=>{
        updateUi(data)
    })
})
