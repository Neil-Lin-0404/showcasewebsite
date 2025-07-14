
document.getElementById("btn").addEventListener('click', async function() {
    const API = "a05a0c094a0c8fdd6e867876ea3088a9";
    const cityid = document.getElementById("inp").value;
    const image = document.getElementById("image");
    const temp = document.getElementById("temp");
    const cityname = document.getElementById("cityname");
    const desc = document.getElementById("adj");
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityid}&appid=${API}&units=metric`;
    try{
        const dataResponse = await fetch(link);
        if(!dataResponse.ok) {
            throw new Error("Errow Fetching AT dataResponse")
        }
        const data = await dataResponse.json();
        
        
            const iconCode = data.weather[0].icon;
            image.src = `https://openweathermap.org/img/wn/${iconCode}.png`; // 完整的圖片 URL
            temp.innerText = data.main.temp;
            cityname.innerText = cityid;
            desc.innerText = data.weather[0].description;
            image.style.display = "block";
        
}
        
        
    catch(error) {
        console.error("ERROR FETCHING DATA",error)
    }})
    