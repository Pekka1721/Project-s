
const form = document.getElementById('mySearch');

form.addEventListener('submit',(e)=>{                                   //getting city 
    const city = document.getElementById('search').value
    e.preventDefault();
    console.log(city)

    const locationSearch = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c51cdc8015msh16426a9f9d8bdc2p12073bjsne289e5b69c73',
		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
	}
};

    fetch(`https://foreca-weather.p.rapidapi.com/location/search/${city}?lang=en&country=in`,locationSearch)
	    .then(response => response.json())
	    .then(response =>{
         document.getElementById('cityName').textContent= city;                              //get the location id
         
        console.log(response)
        document.getElementById('state').textContent = `State: ${response.locations[0].adminArea}` ;
        document.getElementById('timezn').textContent =`TimeZone: ${response.locations[0].timezone}`  ;
        document.getElementById('lat').textContent = `Latitude: ${response.locations[0].lat}` ;
        document.getElementById('lon').textContent = `Longitude: ${response.locations[0].lon}` ;





        
         const locationID = response.locations[0].id;
         //console.log(locationID);
         fetch(`https://foreca-weather.p.rapidapi.com/observation/latest/${locationID}?lang=en`, locationSearch)
	        .then(response => response.json())
	        .then(response =>{

            const station1 = (response.observations[0].station)              //gettingSubstation from response setting the localcity1
            document.getElementById('localc1').textContent = station1;
            document.getElementById('distancec1').textContent = response.observations[0].distance;
            document.getElementById('feelsLikeTempc1').textContent = response.observations[0].feelsLikeTemp;
            document.getElementById('relHumidityc1').textContent = response.observations[0].relHumidity;
            document.getElementById('temperaturec1').textContent = response.observations[0].temperature;
            document.getElementById('visibilityc1').textContent = response.observations[0].visibility;
            document.getElementById('windDirc1').textContent = response.observations[0].windDir;
            document.getElementById('windDirStringc1').textContent = response.observations[0].windDirString;
            document.getElementById('windGustc1').textContent = response.observations[0].windGust;
            document.getElementById('windSpeedc1').textContent = response.observations[0].windSpeed;
            document.getElementById('temp').textContent = `Temperature: ${response.observations[0].temperature}`  ; 
            document.getElementById('humd').textContent =   `Humidity: ${response.observations[0].relHumidity}`;
            const station2 = (response.observations[1].station)              //gettingSubstation from response setting the localcity2
            document.getElementById('localc2').textContent = station2;
            document.getElementById('distancec2').textContent = response.observations[1].distance;
            document.getElementById('feelsLikeTempc2').textContent = response.observations[1].feelsLikeTemp;
            document.getElementById('relHumidityc2').textContent = response.observations[1].relHumidity;
            document.getElementById('temperaturec2').textContent = response.observations[1].temperature;
            document.getElementById('visibilityc2').textContent = response.observations[1].visibility;
            document.getElementById('windDirc2').textContent = response.observations[1].windDir;
            document.getElementById('windDirStringc2').textContent = response.observations[1].windDirString;
            document.getElementById('windGustc2').textContent = response.observations[1].windGust;
            document.getElementById('windSpeedc2').textContent = response.observations[1].windSpeed;


            
            const station3 = (response.observations[2].station)              //gettingSubstation from response setting the localcity3
            document.getElementById('localc3').textContent = station3;
            document.getElementById('distancec3').textContent = response.observations[2].distance;
            document.getElementById('feelsLikeTempc3').textContent = response.observations[2].feelsLikeTemp;
            document.getElementById('relHumidityc3').textContent = response.observations[2].relHumidity;
            document.getElementById('temperaturec3').textContent = response.observations[2].temperature;
            document.getElementById('visibilityc3').textContent = response.observations[2].visibility;
            document.getElementById('windDirc3').textContent = response.observations[2].windDir;
            document.getElementById('windDirStringc3').textContent = response.observations[2].windDirString;
            document.getElementById('windGustc3').textContent = response.observations[2].windGust;
            document.getElementById('windSpeedc3').textContent = response.observations[2].windSpeed;




            console.log(response)} )


        .catch(err => console.error(err));
            
        } )
            
            
            
        .catch(err => console.error(err));

                

})




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c52cdc8015msh16426a9f9d8bdc2p12073bjsne289e5b69c73',
// 		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
// 	}
// };

// fetch('https://foreca-weather.p.rapidapi.com/observation/latest/101275339?lang=en', options)
// 	.then(response => response.json())
// 	.then(response =>{

//         const station1 = (response.observations[0].station)              //gettingSubstation from response setting the localcity1
//         document.getElementById('localc1').textContent = station1;
//         document.getElementById('distancec1').textContent = response.observations[0].distance;
//         document.getElementById('feelsLikeTempc1').textContent = response.observations[0].feelsLikeTemp;
//         document.getElementById('relHumidityc1').textContent = response.observations[0].relHumidity;
//         document.getElementById('temperaturec1').textContent = response.observations[0].temperature;
//         document.getElementById('visibilityc1').textContent = response.observations[0].visibility;
//         document.getElementById('windDirc1').textContent = response.observations[0].windDir;
//         document.getElementById('windDirStringc1').textContent = response.observations[0].windDirString;
//         document.getElementById('windGustc1').textContent = response.observations[0].windGust;
//         document.getElementById('windSpeedc1').textContent = response.observations[0].windSpeed;

//         const station2 = (response.observations[1].station)              //gettingSubstation from response setting the localcity2
//         document.getElementById('localc2').textContent = station2;
//         document.getElementById('distancec2').textContent = response.observations[1].distance;
//         document.getElementById('feelsLikeTempc2').textContent = response.observations[1].feelsLikeTemp;
//         document.getElementById('relHumidityc2').textContent = response.observations[1].relHumidity;
//         document.getElementById('temperaturec2').textContent = response.observations[1].temperature;
//         document.getElementById('visibilityc2').textContent = response.observations[1].visibility;
//         document.getElementById('windDirc2').textContent = response.observations[1].windDir;
//         document.getElementById('windDirStringc2').textContent = response.observations[1].windDirString;
//         document.getElementById('windGustc2').textContent = response.observations[1].windGust;
//         document.getElementById('windSpeedc2').textContent = response.observations[1].windSpeed;


        
//         const station3 = (response.observations[2].station)              //gettingSubstation from response setting the localcity3
//         document.getElementById('localc3').textContent = station3;
//         document.getElementById('distancec3').textContent = response.observations[2].distance;
//         document.getElementById('feelsLikeTempc3').textContent = response.observations[2].feelsLikeTemp;
//         document.getElementById('relHumidityc3').textContent = response.observations[2].relHumidity;
//         document.getElementById('temperaturec3').textContent = response.observations[2].temperature;
//         document.getElementById('visibilityc3').textContent = response.observations[2].visibility;
//         document.getElementById('windDirc3').textContent = response.observations[2].windDir;
//         document.getElementById('windDirStringc3').textContent = response.observations[2].windDirString;
//         document.getElementById('windGustc3').textContent = response.observations[2].windGust;
//         document.getElementById('windSpeedc3').textContent = response.observations[2].windSpeed;




//         console.log(response)} )


// 	.catch(err => console.error(err));