/** //1.creat an XHR Object.
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
    //to get flag of frt 10 countries from.
    for(var i = 0;i<10;i++){
        console.log(`flag: ${data[i].flag}`);
    }
    //to get name ,lat,long from api.
    for(var i = 0;i<data.length;i++){
        console.log(`Name: ${data[i].name} Lat: ${data[i].latlng[0]} Long: ${data[i].latlng[1]}`);
    }
}
var mul=function(a,b){
    return a*b;
    }
    console.log(mul(12,13)); 
    //normal function
    function mul1(arr,n){
        if (n==undefined){
            return(arr[arr[arr.length-1]])
        }
        else if (n>0){
            return(arr.slice(-n))
        } 
    }
    console.log(mul1([1,2,3,-4],5))
    //arrow function
      var con=(name)=>"hello"+name;
      console.log(con("john"));
      
    var Once= function(arr){
        for (var i = 0;i<arr.length;i++){
            var a=arr[0];
       a = a - arr[i] ;
        }
        return(-a)
    }
    console.log(Once([7,1,1,2,3,4,5,6,4,3,2,5,6]))
    var tem =[];
    var a=[];
    var remove = function(arr,b){
    for (var i=0;i<arr.length;i++){
        
     if (b==arr[i]){
        a.push(arr[i]);
     }
     else{
        
         tem.push(arr[i]);
     }
      return (tem)
    }
}
console.log(remove([2,5,9,6],5))
   
2
3
4
Write a JavaScript function to find the most frequent item of an array.
Sample array: 
var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
Sample Output: q ( 5 times )
https://www.anapioficeandfire.com/api/books/1

//1.creat an XHR Object.
var request=new XMLHttpRequest();
//2.Request a connection.
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
//3.sending a connection request.
request.send();
//4.Once a data successfully recevied from the server(200);
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log("authorname: "+data.authors+", isbn: " + data.isbn +", publisher: "+ data.publisher +", NO Page: " +data.numberOfPages);
}

var m=[];
var range=function(a,b){
    for (var i=a;i<=b;i++){
 m += (i);
    }
    return(m);
}
console.log(range(-3,7))
// practice
let a=[{
    name:'a',
    dep:'cse',
    mark:[1,2,3,4,5]
},{
    name:'b',
    dep:'cse',
    mark:[1,124,43,14,45]
},{
    name:'c',
    dep:'cse',
    mark:[81,82,3,84,85]
}]
var result=[];
var total=[]
for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length-1;i++){
        total +=a[i].mark[j];
    }
    result += a[i].name + total;
}console.log(total );


//OOPS 
class car{
    constructor(brand,color){
        this.brand=brand;
        this.color=color;
    }
}
var mustak=new car("BMW","black");
console.log(mustak);**/
/*
//MAP.
var stu=[{name:"john",mark:30},{name:"alice",mark:40}]
var res=stu.map((ele)=>{
    ele.mark=ele.mark+20
    return ele})
console.log(res);

//filter
var arr=[11,23,24,22];
var res1 = arr.filter((ele)=>ele%2===0);
console.log(res);

var stu=[{name:"john",mark:30},{name:"alica",mark:40},{name:"bob",mark:50}];
var res= stu.filter((elem)=>(elem.mark>30));
console.log(res);
var res1=res.map((ele)=>ele.name)
console.log(res1);

 //1.creat an XHR Object.
var request=new XMLHttpRequest();
//2.Request a connection.
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//3.sending a connection request.
request.send();
//4.Once a data successfully recevied from the server(200);
request.onload=function(){
    var data=JSON.parse(request.response);
    //console.log(data);}
    var res= data.filter((Element)=>Element.region==="Asia")
               console.log(res);
    //var res1=res.map((elem)=>elem.name)
    //console.log(res1);
    for(var i=0;i<res.length;i++){
        console.log(res[i].name);
    }
    var sumofpop=0;
    for(var i=0;i<res.length;i++){
        sumofpop += res[i].population;
    }
    console.log(sumofpop);

}**/
//inheritance in class.
class car{
    constructor(brand,color){
        this.brand=brand;
        this.color=color;
    }
    brandname(){
        return "My car series is " + this.brand;
    }
    colorname(){
        return " and my car color is " + this.color
    }
}
class BMW extends car{
    constructor(brand,color){
        super(brand,color);
        //super(color);
    }
    display(){
        return this.brandname() + this.colorname();

    }
}
var Mycar = new BMW("S1","black");
console.log(Mycar.display());