
//Print odd numbers in an array in anonymous function.
var odd=function(num){
    var Odd="";
    for(var i=0;i<num.length;i++){
 if(num[i]%2!==0){
     Odd += num[i];
 }
    }
    return (Odd);
}
console.log(odd([1,2,3,4,5,4,3,8]));


//Print odd numbers in an array in IIFE function.
(function(num){
    var result='';
    for(var i=0;i<num.length;i++){
        if(num[i]%2!=0){
      result += num[i];
        }
    }
    console.log(result)
})([1,4,3,9,7,8,6,1]);


//Convert all the strings to title caps in a string array in IIFE.
(function(str){var input=str.toLowerCase().split(" ");
for(var i=0;i<input.length;i++){
    input[i]=input[i][0].toUpperCase() + input[i].slice(1);
}
input.join('');
var result="";
for(var i=0;i<input.length;i++){
result += input[i]+' ';}
console.log(result);})("we aRe GuviAn")


//Convert all the strings to title caps in a string array in anonymous function.
var frtupper=function(str){
    var input=str.toLowerCase().split(" ");
    for(var i=0;i<input.length;i++){
        input[i]=input[i][0].toUpperCase() + input[i].slice(1);
    }
    input.join('');
    var result="";
    for(var i=0;i<input.length;i++){
    result += input[i]+' ';}
    return (result);
}

console.log(frtupper("We are guVian"));


//Sum of all numbers in an array in anonymous function.
var sum = function(num){
    var result=0;
    for(var i=0;i<num.length;i++){
  result += num[i];
    }
    return (result);
}
console.log(sum([3,4,5,1,2,1]));


//Sum of all numbers in an array in IIFE function.
(function(num){
    var result=0;
    for(var i=0;i<num.length;i++){
        result += num[i];
    }
    console.log(result)
})([5,4,1,3,2,1]);


//Return all the prime numbers in an array in IIFE function.
(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})([1,2,3,4,5,6,7,8,9,11]);
//Return all the prime numbers in an array in anonymous function.
let PN=function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return (res);
 
}
console.log(PN([1,2,3,4,5,6,7,8,9,11]));



 
 //return all the palindromes in an array in anonymous function.
 var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind(["mom","monkey","ooo"]));


 //return all the palindromes in an array in IIFE function.

 (function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+""
        }
        res="";
    }
    console.log(ans);
 
})
(palind(["mom","monkey","ooo"]));

//Return median of two sorted arrays of the same size in anonymous function.
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));
//Return median of two sorted arrays of the same size in IIFE function.
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
    console.log(med);
    
})([1,2,3,7],[4,5,6,8]);

//Remove duplicates from an array in anonymous function.
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,1,2,,5,4,3,4,5,4,3,4,5,4]));


//Remove duplicates from an array in IIFE function.
(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
    console.log(c);
    
})([1,4,3,4,3,5,4,5,4,6,7,6,7,8,7]);


//Rotate an array by k times in IIFE function.
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d += c[c.length-1];

 console.log(d);

})([1,2,3,4,5,6,7,8,9],4);

//Rotate an array by k times in anonymous function.
var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5,6,7,8,9],4));

//Print odd numbers in an array in arrow function.

let od=(num)=>{
    var Odd="";
    for(var i=0;i<num.length;i++){
 if(num[i]%2!==0){
     Odd += num[i];
 }
    }
    return (Odd);
}
console.log(od([1,2,3,4,5,4,3,8]));


//Convert all the strings to title caps in a string array in arrow function.
let TC=(str)=>{var input=str.toLowerCase().split(" ");
for(var i=0;i<input.length;i++){
    input[i]=input[i][0].toUpperCase() + input[i].slice(1);
}
input.join('');
var result="";
for(var i=0;i<input.length;i++){
result += input[i]+' ';}
return(result);}
console.log(TC("we aRe GuviAn"));

//Sum of all numbers in an array in arrow function.

let SUM=(num)=>{
    var result=0;
    for(var i=0;i<num.length;i++){
  result += num[i];
    }
    return (result);
}
console.log(sum([3,4,5,1,2,1]));

//Return all the prime numbers in an array in arrow function.
let pn=(a)=>{
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return (res);
 
}
console.log(PN([1,2,3,4,5,6,7,8,9,11]));

//Return all the palindromes in an array in arrow function.
let palindromes=(a)=>{
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind(["mom","monkey","ooo"]));
