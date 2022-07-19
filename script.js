var input=document.getElementById("inputId")
var search=document.getElementById("searchBtn")
var apiGeo="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
var api="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
var apiKey="f56a3181ed937475116ec4055eca38bb"
// fetching apiGEo 
search.addEventListener("click",firstApi)
function firstApi(){
    console.log(input.value)
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+input.value+"&limit=1&appid="+apiKey+"").then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    })
}
// Fetching current wether api
    search.addEventListener("click",firstApi)
function firstApi(){
    console.log(input.value)
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid="+apiKey+"") 
    .then(response => { return response.json()})
    .then((data)=>{ 
        console.log(data)
    })
}
   