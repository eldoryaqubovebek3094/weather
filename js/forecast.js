// const KEY = '96b947a45d33d7dc1c49af3203966408'
const keys = 'b74c56bb2fe021a0cd62ca7859c7268e'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web

//ssilka
//https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=b74c56bb2fe021a0cd62ca7859c7268e

//request data


const getData = async (sity)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${sity}&units=metric&appid=${keys}`
    loader(true)
    const req = await fetch(base+query)
    const data = await req.json()
    loader(false)
    return data
  
}
