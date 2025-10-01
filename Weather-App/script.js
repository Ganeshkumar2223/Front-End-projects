;async function myWeather()
{
    const city = document.getElementById('input').value;
    const weatherIcon = document.querySelector('.weather-Icon');
    const apiKey= 'f295e1a78b08ad64656f5f16e6eb2a76';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if(data.cod==200)
        {
            document.querySelector('.city').innerHTML=data.name;
            document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
            document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
            if(data.weather[0].main == 'Clouds')
            {
                weatherIcon.src ="images/clouds.png";
            }
            else if(data.weather[0].main == 'Clear')
            {
                weatherIcon.src ="images/clear.png";
            }
            if(data.weather[0].main == 'Drizzle')
            {
                weatherIcon.src ="images/drizzle.png";
            }
            if(data.weather[0].main == 'Mist')
            {
                weatherIcon.src ="images/mist.png";
            }
            if(data.weather[0].main == 'Rain')
            {
                weatherIcon.src ="images/rain.png";
            }
            if(data.weather[0].main == 'Snow')
            {
                weatherIcon.src ="images/snow.png";
            }
            document.querySelector('.weather').style.display="block";
            document.querySelector('.error').style.display="none";

        }
        else{
            document.querySelector('.weather').style.display="none";
            document.querySelector('.error').style.display = "block";
            document.querySelector('.error').innerHTML="<p> City not found. Please try again.</p>";
        }
        
    }
    catch(error){
         console.log("Error Fetching data , Please try again")
    }

}


