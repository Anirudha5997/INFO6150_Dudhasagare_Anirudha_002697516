export async function getWeatherData(){
    const params = new URLSearchParams({
        lat : 42.360081,
        lon : -71.058884,
        units: "metric",
        exclude: "alerts,minutely",
        appid: "2be68ee54ee8988d1dfa1fa84e47ba56"
    })
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?${params}`,{
        method: "GET",
    });
    const data = await response.json();
    console.log(data);
    return data;
};
