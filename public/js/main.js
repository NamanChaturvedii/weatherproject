const submitBtn= document.getElementById("submitBtn");
const cityname= document.getElementById("cityname")
const city_name= document.getElementById("city_name")
const tempreal= document.getElementById("tempreal")
const temp_status= document.getElementById("temp_status")
const datahide=document.querySelector(".middle_layer")

const getInfo= async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    if(cityval==""){
        city_name.innerText=`plz write the name before search`
        datahide.classList.add("data_hide")
    }else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}a&units=metric&appid=4654bfc1dcdcea2318eb53bc09dd7201`
        const response=  await fetch(url);
        const data= await response.json();
        const arrdata= [data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`
        tempreal.innerText=arrdata[0].main.temp;
        const tempStatus=arrdata[0].weather[0].main;
        if(tempStatus=="sunny"){                               //for getting the clouds and all thaht
            temp_status.innerHTML=
            "<i class='fa-solid fa-sun '></i>"
        }else if(tempStatus=="clouds"){
            temp_status.innerHTML=
            "<i class='fa-solid fa-cloud'></i>" 
        }else if(tempStatus=="rainy"){
            temp_status.innerHTML=
            "<i class='fa-solid fa-rain'></i>" 
        }else {                                          
            temp_status.innerHTML=
            "<i class='fa fa-cloud' aria-hidden='true'></i>" 
        }

        datahide.classList.remove("data_hide")

        
        }catch{
            city_name.innerText=`plz write the name properly`
            datahide.classList.add("data_hide")

        }
        
    }



}


submitBtn.addEventListener("click",getInfo)