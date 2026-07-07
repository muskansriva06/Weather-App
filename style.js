let btn=document.querySelector("button");


btn.addEventListener("click",async ()=>{
    let city=document.querySelector("input").value;
    console.log(city);


    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd80ada1c2245ac0ad9e935c72f94f00&units=metric`;
    console.log(url)
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);

    let temp=document.getElementById("temper");
temp.innerText=`${Math.round(data.main.temp)}°C`

let description=document.getElementById("des");
description.innerText=`${data.weather[0].description}`

let humidity=document.getElementById("humidity");
humidity.innerText=`${data.main.humidity}%`;

let wind=document.getElementById("wind");
wind.innerText=`${data.wind.speed}m/s`;

let feel=document.getElementById("feel");
feel.innerText=`${Math.round(data.main.feels_like)}°C`

let icon=data.weather[0].icon;
let cloud= document.getElementById("cloud").src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
cloud.style.width="120px";
cloud.style.height="120px";




})



