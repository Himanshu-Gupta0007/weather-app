document.getElementById("cityInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {
    let cityInput = document.querySelector("#cityInput").value.trim(); // Trim spaces
    let apiKey = "d1845658f92b31c64bd94f06f7188c9c"; // अपनी OpenWeather API Key डालो
    let weatherResult = document.getElementById("weatherResult");

    if (!cityInput) {
        weatherResult.innerHTML = "❌ Please enter a city!";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        weatherResult.innerHTML = "⏳ Fetching weather...";
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            weatherResult.innerHTML = "❌ City not found!";
        } else {
            weatherResult.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>☁ Condition: ${data.weather[0].description}</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        weatherResult.innerHTML = "❌ Error fetching data!";
    }
}










// // let arr =  [ 1,2,3,4,5,6,7,8,7,10]

// // function customFilter(cb){
// //     let ans = []
// //     for(let i = 0 ; i<this.length; i++){
// //         if(cb(this[i])){
// //               ans.push(cb(arr[i]));

// //         }
      
// //     }
// //     return ans;
// // }
// // Array.prototype.customFilter = customFilter
// // let ans2 = arr.customFilter((ele) => ele % 2 === 0);
// // console.log(ans2);

// let a ="1" + + "1"
// console.log(typeof a);


// let b =1 + + "1"    
// console.log(typeof b);
// console.log(b)


// let a ="2" *  " 10"
// console.log(typeof a);
// console.log(a)


// let objA = { value: 100 };
// let objB = objA;
// objB.value = 200;

// console.log(objA.value); // ??? 🤔


// let x = { data: { num: 10 } };
// let y = { data: { num: 10 } };

// console.log(x.data === y.data); // ??? 🤔
// let a = { value: 10 };
// let b = a;
// b.value = 20;

// console.log(a.value); // ??? 🤔
// console.log(b.value); // ??? 🤔
// console.log(a === b); // ??? 🤔
// console.log(foo()); // ??? 🤔

// function foo() {
//   return "Hello, World!";
// }

//console.log(a)

// function add (){

//     console.log(name)
//     var name = 2
// }

// add()