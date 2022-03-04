var req = new XMLHttpRequest();
req.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
for(var i=0;i<data.length;i++){
    console.log(`Name: ${data[i].name} Region: ${data[i].region} sub-Region: ${data[i].subregion}  population: ${data[i].population}
    `)
}
}