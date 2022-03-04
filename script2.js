/**1.creat an XHR Object.
var request=new XMLHttpRequest();
//2.Request a connection.
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//3.sending a connection request.
request.send();
//4.Once a data successfully recevied from the server(200);
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    //to get name from api.
    for(var i = 0;i<data.length;i++){
        console.log(`Name: ${data[i].name} `);
    }
    //to get flag of frt 10 countries from api.
    for(var i = 0;i<10;i++){
        console.log(`flag: ${data[i].flag}`);
    }
    //to get name ,lat,long from api.
    for(var i = 0;i<data.length;i++){
        console.log(`Name: ${data[i].name} Lat: ${data[i].latlng[0]} Long: ${data[i].latlng[1]}`);
    }
}**/
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    for (let i=0;i<data.length;i++){
        console.log(`Flag: ${data[i].flag}`);
    }
}